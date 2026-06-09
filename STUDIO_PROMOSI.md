# Studio Promosi Syariah

Studio internal Tata Kreasi tersedia di `/tools/studio-promosi`.

## Konfigurasi

1. Buat project Supabase dan jalankan migration:

   ```bash
   supabase db push
   ```

2. Salin variabel dari `.env.example` ke environment lokal dan Vercel.
3. Undang pengguna melalui Supabase Auth. Login studio memakai magic link dan tidak membuat akun baru otomatis.
4. Jadikan pengguna pertama sebagai admin:

   ```sql
   update public.profiles
   set role = 'admin'
   where email = 'admin@tatakreasi.com';
   ```

5. Verifikasi klaim proyek sebelum API AI dipakai:

   ```sql
   update public.projects
   set is_verified = true
   where id in ('narraya', 'grandsezha', 'sedah');
   ```

6. Aktifkan Fluid Compute di Vercel. Fungsi promosi sudah dikonfigurasi dengan `maxDuration: 300`.

Tanpa environment Supabase, frontend berjalan dalam mode demo lokal agar UI, template, crop aman, riwayat sesi, dan ekspor PNG dapat ditinjau.

## Aturan Fasad

- Fasad utama disimpan sebagai aset referensi dengan hash SHA-256.
- Canvas hanya mengizinkan crop, zoom, dan posisi terhadap piksel sumber.
- Endpoint latar AI tidak menerima foto fasad.
- Endpoint analisis hanya memakai foto sebagai input vision untuk menyusun brief, bukan sebagai input edit gambar.
- Latar AI diperiksa ulang dan ditolak jika berisi bangunan, teks, logo, atau manusia.

## Endpoint

- `POST /api/promotion/analyze`
- `POST /api/promotion/background`
- `POST /api/promotion/variations`
- `POST /api/promotion/refine`

Semua endpoint membutuhkan bearer token Supabase dan mencatat job AI beserta `Idempotency-Key`.

Alur studio utama:

1. Pengguna mengunggah gambar fasad dan referensi tambahan.
2. Endpoint analisis menghasilkan copy banner, pilihan template, dan prompt gambar ambience yang dapat diedit.
3. Endpoint variasi membuat hingga empat ambience image dari prompt tersebut.
4. Pengguna memilih ambience image, lalu studio menggabungkannya dengan fasad asli yang terkunci dan copy marketing yang presisi.
