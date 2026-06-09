create extension if not exists "pgcrypto";

create type public.studio_role as enum ('admin', 'marketer');
create type public.reference_asset_role as enum ('facade_primary', 'facade_side', 'environment', 'logo', 'facade_cutout');
create type public.ai_job_type as enum ('analyze', 'background', 'refine');
create type public.ai_job_status as enum ('pending', 'completed', 'rejected', 'failed');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  role public.studio_role not null default 'marketer',
  daily_ai_background_limit integer not null default 10 check (daily_ai_background_limit between 0 and 100),
  invited_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table public.projects (
  id text primary key,
  name text not null,
  category text not null,
  location text not null,
  claim_catalog jsonb not null default '[]'::jsonb,
  logo_path text,
  is_verified boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.brand_kits (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  project_id text references public.projects(id) on delete cascade,
  colors jsonb not null,
  fonts jsonb not null,
  allowed_ctas jsonb not null default '[]'::jsonb,
  default_cta text not null,
  logo_path text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique nulls not distinct (project_id)
);

create table public.templates (
  id text primary key,
  name text not null,
  description text not null,
  tags text[] not null default '{}',
  layout_json jsonb not null default '{}'::jsonb,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.reference_assets (
  id uuid primary key default gen_random_uuid(),
  project_id text not null references public.projects(id) on delete cascade,
  role public.reference_asset_role not null,
  storage_path text not null,
  sha256 text not null,
  metadata jsonb not null default '{}'::jsonb,
  uploaded_by uuid not null references public.profiles(id),
  created_at timestamptz not null default now()
);
create index reference_assets_project_id_idx on public.reference_assets(project_id);

create table public.creatives (
  id uuid primary key default gen_random_uuid(),
  project_id text not null references public.projects(id),
  title text not null,
  format text not null check (format in ('feed', 'story', 'whatsapp')),
  created_by uuid not null references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index creatives_project_id_created_at_idx on public.creatives(project_id, created_at desc);

create table public.creative_versions (
  id uuid primary key default gen_random_uuid(),
  creative_id uuid not null references public.creatives(id) on delete cascade,
  version_number integer not null,
  source_asset_id uuid not null references public.reference_assets(id),
  source_sha256 text not null,
  template_id text not null references public.templates(id),
  layout_json jsonb not null,
  brief_json jsonb not null,
  export_path text,
  created_by uuid not null references public.profiles(id),
  created_at timestamptz not null default now(),
  unique (creative_id, version_number)
);

create table public.ai_generation_jobs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id),
  project_id text references public.projects(id),
  type public.ai_job_type not null,
  status public.ai_job_status not null default 'pending',
  idempotency_key text,
  model text not null,
  request_json jsonb not null default '{}'::jsonb,
  response_json jsonb,
  error text,
  created_at timestamptz not null default now(),
  completed_at timestamptz
);
create unique index ai_jobs_user_idempotency_idx
  on public.ai_generation_jobs(user_id, idempotency_key)
  where idempotency_key is not null;
create index ai_jobs_background_usage_idx
  on public.ai_generation_jobs(user_id, created_at desc)
  where type = 'background' and status in ('pending', 'completed');

create or replace function public.handle_new_studio_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(new.raw_user_meta_data ->> 'full_name', split_part(coalesce(new.email, ''), '@', 1))
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created_for_studio
  after insert on auth.users
  for each row execute procedure public.handle_new_studio_user();

create or replace function public.is_studio_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

alter table public.profiles enable row level security;
alter table public.projects enable row level security;
alter table public.brand_kits enable row level security;
alter table public.templates enable row level security;
alter table public.reference_assets enable row level security;
alter table public.creatives enable row level security;
alter table public.creative_versions enable row level security;
alter table public.ai_generation_jobs enable row level security;

create policy "profiles read self or admin" on public.profiles
  for select using (id = auth.uid() or public.is_studio_admin());
create policy "profiles admin update" on public.profiles
  for update using (public.is_studio_admin()) with check (public.is_studio_admin());

create policy "internal read projects" on public.projects for select to authenticated using (true);
create policy "admin manage projects" on public.projects for all to authenticated
  using (public.is_studio_admin()) with check (public.is_studio_admin());
create policy "internal read brand kits" on public.brand_kits for select to authenticated using (true);
create policy "admin manage brand kits" on public.brand_kits for all to authenticated
  using (public.is_studio_admin()) with check (public.is_studio_admin());
create policy "internal read templates" on public.templates for select to authenticated using (true);
create policy "admin manage templates" on public.templates for all to authenticated
  using (public.is_studio_admin()) with check (public.is_studio_admin());

create policy "internal read reference assets" on public.reference_assets for select to authenticated using (true);
create policy "internal create reference assets" on public.reference_assets for insert to authenticated
  with check (uploaded_by = auth.uid());
create policy "admin delete reference assets" on public.reference_assets for delete to authenticated
  using (public.is_studio_admin());

create policy "internal read creatives" on public.creatives for select to authenticated using (true);
create policy "internal create creatives" on public.creatives for insert to authenticated
  with check (created_by = auth.uid());
create policy "creator or admin update creatives" on public.creatives for update to authenticated
  using (created_by = auth.uid() or public.is_studio_admin());
create policy "internal read creative versions" on public.creative_versions for select to authenticated using (true);
create policy "internal create creative versions" on public.creative_versions for insert to authenticated
  with check (created_by = auth.uid());

create policy "users read own ai jobs" on public.ai_generation_jobs for select to authenticated
  using (user_id = auth.uid() or public.is_studio_admin());

insert into storage.buckets (id, name, public)
values
  ('reference-assets', 'reference-assets', false),
  ('creative-assets', 'creative-assets', false),
  ('exports', 'exports', false)
on conflict (id) do nothing;

create policy "internal upload references" on storage.objects for insert to authenticated
  with check (bucket_id = 'reference-assets' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "internal read studio storage" on storage.objects for select to authenticated
  using (bucket_id in ('reference-assets', 'creative-assets', 'exports'));
create policy "admin delete studio storage" on storage.objects for delete to authenticated
  using (bucket_id in ('reference-assets', 'creative-assets', 'exports') and public.is_studio_admin());

insert into public.projects (id, name, category, location, claim_catalog, is_verified)
values
  ('narraya', 'Narraya Green Residence', 'Premium', 'Pusat Kota Ponorogo',
   '[{"id":"narraya-location","label":"5 langkah ke Alun-alun Ponorogo"},{"id":"narraya-syariah","label":"Hunian premium 100% syariah"},{"id":"narraya-promo","label":"Diskon Rp75 juta untuk 2 pembeli pertama"}]'::jsonb, false),
  ('grandsezha', 'Grand Sezha', 'Eksklusif', 'Tengah Kota Ponorogo',
   '[{"id":"grandsezha-location","label":"Lokasi premium di tengah kota"},{"id":"grandsezha-design","label":"Desain arsitektur modern"},{"id":"grandsezha-syariah","label":"Skema pembayaran syariah"}]'::jsonb, false),
  ('sedah', 'Sedah Green Residence', 'Keluarga', 'Sedah, Jenangan, Ponorogo',
   '[{"id":"sedah-family","label":"Hunian nyaman untuk keluarga Muslim"},{"id":"sedah-syariah","label":"Tanpa riba, tanpa denda, tanpa sita"},{"id":"sedah-green","label":"Lingkungan hijau dan asri"}]'::jsonb, false)
on conflict (id) do update set claim_catalog = excluded.claim_catalog;

insert into public.templates (id, name, description, tags)
values
  ('editorial-hero', 'Editorial Hero', 'Komposisi tenang untuk satu pesan utama.', array['premium','launch','lokasi']),
  ('promo-fokus-harga', 'Promo Fokus Harga', 'Komposisi tegas untuk promo atau harga mulai.', array['promo','harga','urgency']),
  ('syariah-keluarga', 'Syariah Keluarga', 'Komposisi hangat untuk hunian keluarga.', array['keluarga','syariah','trust'])
on conflict (id) do nothing;

insert into public.brand_kits (name, colors, fonts, allowed_ctas, default_cta)
values (
  'Tata Kreasi Global',
  '{"emerald":"#046A38","deepGreen":"#034D28","gold":"#C9A227","ivory":"#FCF9F2","slate":"#24332D"}'::jsonb,
  '{"headline":"Noto Serif","body":"Manrope"}'::jsonb,
  '["Konsultasi Sekarang","Cek Unit Tersedia","Jadwalkan Survey"]'::jsonb,
  'Konsultasi Sekarang'
)
on conflict (project_id) do nothing;
