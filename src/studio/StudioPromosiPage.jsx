import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpenCheck,
  Check,
  ChevronRight,
  Clock3,
  Download,
  FileImage,
  FolderKanban,
  ImagePlus,
  LayoutTemplate,
  LoaderCircle,
  LockKeyhole,
  LogOut,
  Palette,
  Play,
  RefreshCw,
  Settings2,
  ShieldCheck,
  Sparkles,
  Upload,
} from "lucide-react";
import { toast, Toaster } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { StudioAuthProvider, useStudioAuth } from "./AuthProvider";
import { analyzePromotion, generateVariations, refinePromotion } from "./api";
import {
  DEFAULT_BRAND_KIT,
  DEFAULT_CREATIVE,
  PROMOTION_FORMATS,
  PROMOTION_TEMPLATES,
  STUDIO_PROJECTS,
  getProject,
} from "./config";
import PromotionCanvas from "./PromotionCanvas";
import { supabase } from "./supabase";
import "./studio.css";

const NAV_ITEMS = [
  { id: "studio", label: "Studio", icon: Sparkles },
  { id: "history", label: "Riwayat", icon: Clock3 },
  { id: "brand", label: "Brand Kit", icon: Palette, adminOnly: true },
  { id: "templates", label: "Template", icon: LayoutTemplate, adminOnly: true },
  { id: "projects", label: "Proyek", icon: FolderKanban, adminOnly: true },
];

const INITIAL_TRANSFORM = { zoom: 1, x: 0, y: 0 };
const DEMO_VARIATION_STYLES = [
  {
    id: "natural-glow",
    label: "Natural Glow",
    start: "#F6F0DF",
    end: "#D8EAD9",
    accent: "#91B498",
    sun: "#F1D99D",
  },
  {
    id: "emerald-calm",
    label: "Emerald Calm",
    start: "#E6EFE7",
    end: "#BBD3C0",
    accent: "#4F8562",
    sun: "#F8EBCB",
  },
  {
    id: "golden-morning",
    label: "Golden Morning",
    start: "#FFF4D9",
    end: "#D7E4CF",
    accent: "#B79B54",
    sun: "#F2C76F",
  },
  {
    id: "soft-editorial",
    label: "Soft Editorial",
    start: "#F4F3ED",
    end: "#CDDCD6",
    accent: "#78988D",
    sun: "#E5D5B4",
  },
];

async function sha256(file) {
  const bytes = await file.arrayBuffer();
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function makeFacadeAsset(project) {
  return {
    id: project.sourceAssetId,
    sourceAssetId: project.sourceAssetId,
    hash: project.sourceHash,
    url: project.heroUrl,
    label: "Fasad Utama",
  };
}

function createCreativeForProject(project) {
  return {
    ...DEFAULT_CREATIVE,
    headline:
      project.id === "narraya"
        ? "Tinggal Nyaman di Jantung Kota"
        : project.id === "grandsezha"
          ? "Hunian Eksklusif, Langkah Lebih Dekat"
          : "Hunian Berkah untuk Keluarga",
    subheadline: `${project.verifiedClaims[0].label}. ${project.verifiedClaims[1].label}.`,
    claimIds: project.verifiedClaims.slice(0, 2).map((claim) => claim.id),
  };
}

function createDemoImagePrompt(project, campaignDirection) {
  return [
    `Create a premium editorial ambience layer for a ${project.category.toLowerCase()} Indonesian sharia property promotion.`,
    `Mood: ${campaignDirection.trim()}`,
    `Location context: ${project.location}.`,
    "Use restrained natural greenery, warm morning light, soft depth, and calm negative space in the center.",
    "This is a supporting background only. The unchanged real facade and exact marketing copy will be layered above it later.",
    "Strictly no house, no building, no architecture, no roof, no facade, no text, no letters, no numbers, no logo, no watermark, and no people.",
  ].join(" ");
}

function createDemoVariationUrl(formatId, style, index) {
  const format = PROMOTION_FORMATS[formatId];
  const width = format.width;
  const height = format.height;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${style.start}" />
          <stop offset="100%" stop-color="${style.end}" />
        </linearGradient>
        <radialGradient id="sun">
          <stop offset="0%" stop-color="${style.sun}" stop-opacity=".9" />
          <stop offset="100%" stop-color="${style.sun}" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg)" />
      <circle cx="${width * (0.82 - index * 0.08)}" cy="${height * 0.16}" r="${width * 0.3}" fill="url(#sun)" />
      <ellipse cx="${width * 0.12}" cy="${height * 0.9}" rx="${width * 0.42}" ry="${height * 0.3}" fill="${style.accent}" opacity=".28" />
      <ellipse cx="${width * 0.92}" cy="${height * 0.84}" rx="${width * 0.35}" ry="${height * 0.24}" fill="${style.accent}" opacity=".18" />
      <path d="M0 ${height * 0.78} C ${width * 0.2} ${height * 0.68}, ${width * 0.3} ${height * 0.86}, ${width * 0.5} ${height * 0.76} S ${width * 0.82} ${height * 0.7}, ${width} ${height * 0.8} L ${width} ${height} L0 ${height} Z" fill="${style.accent}" opacity=".16" />
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function createDemoVariations(formatId) {
  return DEMO_VARIATION_STYLES.map((style, index) => ({
    id: `demo:${style.id}`,
    label: style.label,
    url: createDemoVariationUrl(formatId, style, index),
  }));
}

function AuthGate({ children }) {
  const { session, loading, isDemoMode, signInWithOtp } = useStudioAuth();
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  if (loading) {
    return (
      <div className="studio-auth-screen">
        <LoaderCircle className="studio-spin" />
        <p>Menyiapkan studio...</p>
      </div>
    );
  }

  if (session) return children;

  async function handleSubmit(event) {
    event.preventDefault();
    setSending(true);
    const { error } = await signInWithOtp(email);
    setSending(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Tautan login telah dikirim. Periksa email Anda.");
  }

  return (
    <main className="studio-auth-screen">
      <Toaster position="top-center" richColors />
      <div className="studio-auth-card">
        <img src="/logo.png" alt="Logo Tata Kreasi" />
        <p className="studio-eyebrow">Studio internal Tata Kreasi</p>
        <h1>Masuk ke Studio Promosi Syariah</h1>
        <p>Gunakan email internal yang telah diundang admin untuk menerima tautan login.</p>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="studio-email">Email internal</Label>
          <Input
            id="studio-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="nama@tatakreasi.com"
            required
          />
          <Button type="submit" disabled={sending}>
            {sending ? <LoaderCircle className="studio-spin" /> : null}
            Kirim tautan login
          </Button>
        </form>
        {isDemoMode ? <p>Mode demo aktif karena Supabase belum dikonfigurasi.</p> : null}
      </div>
    </main>
  );
}

function StudioLayout() {
  const { session, profile, isDemoMode, signOut } = useStudioAuth();
  const [view, setView] = useState("studio");
  const [projectId, setProjectId] = useState("sedah");
  const [formatId, setFormatId] = useState("feed");
  const [campaignDirection, setCampaignDirection] = useState(
    "Buat promosi hangat untuk keluarga Muslim yang ingin memiliki rumah tanpa riba.",
  );
  const [imagePrompt, setImagePrompt] = useState("");
  const [variations, setVariations] = useState([]);
  const [selectedVariationId, setSelectedVariationId] = useState(null);
  const [creative, setCreative] = useState(() => createCreativeForProject(getProject("sedah")));
  const [facadeAsset, setFacadeAsset] = useState(() => makeFacadeAsset(getProject("sedah")));
  const [extraAssets, setExtraAssets] = useState([]);
  const [transform, setTransform] = useState(INITIAL_TRANSFORM);
  const [busy, setBusy] = useState(false);
  const [history, setHistory] = useState([]);
  const canvasRef = useRef(null);
  const primaryUploadRef = useRef(null);
  const extraUploadRef = useRef(null);

  const project = getProject(projectId);
  const isAdmin = profile?.role === "admin";
  const template = useMemo(
    () => PROMOTION_TEMPLATES.find((item) => item.id === creative.templateId),
    [creative.templateId],
  );

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Studio Promosi Syariah - Tata Kreasi";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  function applyProject(nextId) {
    const nextProject = getProject(nextId);
    setProjectId(nextId);
    setFacadeAsset(makeFacadeAsset(nextProject));
    setExtraAssets([]);
    setCreative(createCreativeForProject(nextProject));
    setTransform(INITIAL_TRANSFORM);
    setImagePrompt("");
    setVariations([]);
    setSelectedVariationId(null);
  }

  function addVersion(nextCreative, note = "Konsep diperbarui", nextImagePrompt = imagePrompt) {
    const nextVersion = {
      id: crypto.randomUUID(),
      projectId,
      projectName: project.name,
      formatId,
      creative: nextCreative,
      imagePrompt: nextImagePrompt,
      facadeAsset,
      transform,
      note,
      createdAt: new Date().toLocaleString("id-ID", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    };
    setHistory((current) => [nextVersion, ...current].slice(0, 12));
  }

  async function uploadReference(event, role) {
    const file = event.target.files?.[0];
    if (!file) return;
    setBusy(true);

    try {
      const hash = await sha256(file);
      const localAsset = {
        id: `local:${crypto.randomUUID()}`,
        sourceAssetId: `local:${hash.slice(0, 12)}`,
        hash,
        url: URL.createObjectURL(file),
        label: role === "facade_primary" ? "Fasad Utama" : "Referensi Tambahan",
      };

      if (supabase && session?.user) {
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
        const storagePath = `${session.user.id}/${projectId}/${crypto.randomUUID()}-${safeName}`;
        const { error: uploadError } = await supabase.storage
          .from("reference-assets")
          .upload(storagePath, file);
        if (uploadError) throw uploadError;

        const { data, error: assetError } = await supabase
          .from("reference_assets")
          .insert({
            project_id: projectId,
            role,
            storage_path: storagePath,
            sha256: hash,
            uploaded_by: session.user.id,
            metadata: { original_name: file.name, size: file.size, type: file.type },
          })
          .select("id")
          .single();
        if (assetError) throw assetError;
        localAsset.id = data.id;
        localAsset.sourceAssetId = data.id;
      }

      if (role === "facade_primary") setFacadeAsset(localAsset);
      else setExtraAssets((current) => [...current, localAsset]);
      setImagePrompt("");
      setVariations([]);
      setSelectedVariationId(null);
      toast.success(`${localAsset.label} tersimpan dengan hash SHA-256.`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setBusy(false);
      event.target.value = "";
    }
  }

  async function handleAnalyze() {
    if (!facadeAsset) {
      toast.error("Unggah fasad utama sebelum membuat konsep.");
      return;
    }
    setBusy(true);

    try {
      let nextCreative;
      let nextImagePrompt;
      if (isDemoMode || facadeAsset.id.startsWith("local:") || facadeAsset.id.startsWith("seed:")) {
        const lowerPrompt = campaignDirection.toLowerCase();
        const templateId = lowerPrompt.includes("promo terbatas") ||
          lowerPrompt.includes("diskon") ||
          lowerPrompt.includes("harga")
          ? "promo-fokus-harga"
          : lowerPrompt.includes("keluarga") || lowerPrompt.includes("syariah")
            ? "syariah-keluarga"
            : "editorial-hero";
        nextCreative = {
          ...creative,
          headline:
            templateId === "promo-fokus-harga"
              ? "Kesempatan Terbaik Punya Rumah"
              : templateId === "syariah-keluarga"
                ? "Rumah Nyaman, Hati Lebih Tenang"
                : "Hunian Modern untuk Masa Depan",
          subheadline: `${project.verifiedClaims[0].label}. ${project.verifiedClaims[1].label}.`,
          claimIds: project.verifiedClaims.slice(0, 2).map((claim) => claim.id),
          templateId,
        };
        nextImagePrompt = createDemoImagePrompt(project, campaignDirection);
      } else {
        const result = await analyzePromotion(session, {
          projectId,
          format: formatId,
          prompt: campaignDirection,
          referenceAssetIds: [facadeAsset.id, ...extraAssets.map((asset) => asset.id)],
        });
        const { imagePrompt: generatedImagePrompt, ...brief } = result.brief;
        nextCreative = { ...creative, ...brief };
        nextImagePrompt = generatedImagePrompt;
      }

      setCreative(nextCreative);
      setImagePrompt(nextImagePrompt);
      setVariations([]);
      setSelectedVariationId(null);
      addVersion(nextCreative, "Prompt gambar disusun", nextImagePrompt);
      toast.success("Prompt gambar siap ditinjau. Fasad asli tetap terkunci.");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setBusy(false);
    }
  }

  async function handleGenerateVariations() {
    if (!imagePrompt.trim()) {
      toast.error("Susun prompt gambar sebelum membuat variasi.");
      return;
    }

    setBusy(true);
    try {
      const nextVariations = isDemoMode
        ? createDemoVariations(formatId)
        : (await generateVariations(session, {
            projectId,
            format: formatId,
            imagePrompt,
            count: 4,
          })).variations;
      const [firstVariation] = nextVariations;
      const nextCreative = { ...creative, backgroundUrl: firstVariation.url };
      setVariations(nextVariations);
      setSelectedVariationId(firstVariation.id);
      setCreative(nextCreative);
      addVersion(nextCreative, "Variasi ambience pertama diterapkan");
      toast.success(`${nextVariations.length} variasi visual siap dipilih.`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setBusy(false);
    }
  }

  function selectVariation(variation) {
    const nextCreative = { ...creative, backgroundUrl: variation.url };
    setSelectedVariationId(variation.id);
    setCreative(nextCreative);
    addVersion(nextCreative, `${variation.label || "Variasi AI"} diterapkan`);
  }

  async function handleRefine() {
    if (!campaignDirection.trim()) return;
    setBusy(true);
    try {
      let nextCreative;
      if (isDemoMode) {
        nextCreative = {
          ...creative,
          subheadline: `${project.verifiedClaims[0].label}. ${campaignDirection.trim()}`,
        };
      } else {
        const result = await refinePromotion(session, {
          projectId,
          format: formatId,
          instruction: campaignDirection,
          currentBrief: creative,
        });
        nextCreative = { ...creative, ...result.brief };
      }
      setCreative(nextCreative);
      addVersion(nextCreative, "Prompt perbaikan diterapkan");
      toast.success("Versi baru dibuat tanpa mengubah fasad.");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setBusy(false);
    }
  }

  function downloadCreative() {
    const dataUrl = canvasRef.current?.exportImage();
    if (!dataUrl) return;

    const link = document.createElement("a");
    link.download = `${projectId}-${formatId}-${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
    toast.success(`PNG ${PROMOTION_FORMATS[formatId].width}×${PROMOTION_FORMATS[formatId].height} diunduh.`);
  }

  function restoreVersion(version) {
    setProjectId(version.projectId);
    setFormatId(version.formatId);
    setCreative(version.creative);
    setImagePrompt(version.imagePrompt || "");
    setFacadeAsset(version.facadeAsset);
    setTransform(version.transform);
    setView("studio");
    toast.success("Versi dipulihkan ke kanvas.");
  }

  const visibleNavItems = NAV_ITEMS.filter((item) => !item.adminOnly || isAdmin);

  return (
    <div className="studio-app">
      <Toaster position="top-center" richColors />
      <aside className="studio-sidebar">
        <Link to="/tools" className="studio-brand">
          <img src="/logo.png" alt="Logo Tata Kreasi" />
          <span>
            <strong>Tata Kreasi</strong>
            <small>Studio Promosi</small>
          </span>
        </Link>
        <nav aria-label="Navigasi studio">
          {visibleNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                type="button"
                key={item.id}
                className={`${view === item.id ? "is-active" : ""} ${item.adminOnly ? "is-admin-only" : ""}`}
                onClick={() => setView(item.id)}
              >
                <Icon />
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="studio-sidebar-footer">
          <Badge variant="outline">{isDemoMode ? "Mode demo" : profile?.role}</Badge>
          <span>{profile?.full_name || session.user.email}</span>
          {!isDemoMode ? (
            <button type="button" onClick={signOut}>
              <LogOut />
              Keluar
            </button>
          ) : null}
        </div>
      </aside>

      <main className="studio-main">
        <header className="studio-topbar">
          <div>
            <Link to="/tools">
              <ArrowLeft />
              Tools Marketing
            </Link>
            <h1>{visibleNavItems.find((item) => item.id === view)?.label}</h1>
          </div>
          <div className="studio-project-select">
            <Label htmlFor="project-select">Proyek aktif</Label>
            <Select value={projectId} onValueChange={applyProject}>
              <SelectTrigger id="project-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {STUDIO_PROJECTS.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </header>

        {view === "studio" ? (
          <section className="studio-workspace">
            <ReferencePanel
              project={project}
              facadeAsset={facadeAsset}
              extraAssets={extraAssets}
              busy={busy}
              onPrimaryUpload={() => primaryUploadRef.current?.click()}
              onExtraUpload={() => extraUploadRef.current?.click()}
            />

            <input
              ref={primaryUploadRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              hidden
              onChange={(event) => uploadReference(event, "facade_primary")}
            />
            <input
              ref={extraUploadRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              hidden
              onChange={(event) => uploadReference(event, "facade_side")}
            />

            <section className="studio-canvas-column">
              <CanvasToolbar
                formatId={formatId}
                setFormatId={setFormatId}
                facadeAsset={facadeAsset}
              />
              <PromotionCanvas
                ref={canvasRef}
                project={project}
                formatId={formatId}
                creative={creative}
                facadeAsset={facadeAsset}
                transform={transform}
                templateId={creative.templateId}
              />
              <CanvasFooter
                history={history}
                busy={busy}
                onRefine={handleRefine}
                onDownload={downloadCreative}
                onRestore={restoreVersion}
              />
            </section>

            <BriefPanel
              project={project}
              creative={creative}
              setCreative={setCreative}
              template={template}
              campaignDirection={campaignDirection}
              setCampaignDirection={setCampaignDirection}
              imagePrompt={imagePrompt}
              setImagePrompt={setImagePrompt}
              variations={variations}
              selectedVariationId={selectedVariationId}
              transform={transform}
              setTransform={setTransform}
              busy={busy}
              onAnalyze={handleAnalyze}
              onGenerateVariations={handleGenerateVariations}
              onSelectVariation={selectVariation}
            />
          </section>
        ) : null}

        {view === "history" ? (
          <HistoryView history={history} onRestore={restoreVersion} onDownload={downloadCreative} />
        ) : null}
        {view === "brand" && isAdmin ? <BrandKitView /> : null}
        {view === "templates" && isAdmin ? <TemplatesView /> : null}
        {view === "projects" && isAdmin ? <ProjectsView /> : null}
      </main>
    </div>
  );
}

function ReferencePanel({ project, facadeAsset, extraAssets, busy, onPrimaryUpload, onExtraUpload }) {
  return (
    <aside className="studio-panel studio-reference-panel">
      <div className="studio-panel-heading">
        <div>
          <h2>Referensi Gambar</h2>
          <p>Upload acuan sebelum menyusun prompt.</p>
        </div>
        <ShieldCheck />
      </div>

      <AssetCard label="Fasad Utama" url={facadeAsset.url} required locked />
      <AssetCard label="Tampak Samping" url={extraAssets[0]?.url || project.sideUrl} />
      <AssetCard label="Logo Proyek" url={project.logoUrl} compact />

      <div className="studio-upload-stack">
        <Button variant="outline" onClick={onPrimaryUpload} disabled={busy}>
          <Upload />
          Ganti fasad utama
        </Button>
        <Button variant="ghost" onClick={onExtraUpload} disabled={busy}>
          <ImagePlus />
          Tambah referensi
        </Button>
      </div>

      <div className="studio-integrity-note">
        <LockKeyhole />
        <div>
          <strong>Fasad terkunci</strong>
          <span>{facadeAsset.hash.slice(0, 18)}...</span>
        </div>
      </div>
    </aside>
  );
}

function AssetCard({ label, url, required = false, locked = false, compact = false }) {
  return (
    <article className={`studio-asset-card ${compact ? "is-compact" : ""}`}>
      <img src={url} alt={label} />
      <div>
        <strong>{label}</strong>
        <span>{required ? "Wajib" : "Opsional"}</span>
      </div>
      {locked ? <LockKeyhole /> : <ChevronRight />}
    </article>
  );
}

function CanvasToolbar({ formatId, setFormatId, facadeAsset }) {
  return (
    <div className="studio-canvas-toolbar">
      <div>
        <Badge variant="outline">
          <LockKeyhole />
          Fasad terkunci
        </Badge>
        <span>Source ID: {facadeAsset.sourceAssetId.slice(0, 24)}</span>
      </div>
      <Select value={formatId} onValueChange={setFormatId}>
        <SelectTrigger aria-label="Pilih ukuran ekspor">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Object.values(PROMOTION_FORMATS).map((format) => (
              <SelectItem key={format.id} value={format.id}>
                {format.label} · {format.width}×{format.height}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

function CanvasFooter({ history, busy, onRefine, onDownload, onRestore }) {
  return (
    <div className="studio-canvas-footer">
      <div className="studio-version-strip">
        {history.length ? (
          history.slice(0, 4).map((version, index) => (
            <button type="button" key={version.id} onClick={() => onRestore(version)}>
              <FileImage />
              <span>v{history.length - index}</span>
            </button>
          ))
        ) : (
          <p>Versi hasil generasi akan muncul di sini.</p>
        )}
      </div>
      <div className="studio-footer-actions">
        <Button variant="outline" onClick={onRefine} disabled={busy}>
          <RefreshCw />
          Perbaiki
        </Button>
        <Button onClick={onDownload}>
          <Download />
          Unduh PNG
        </Button>
      </div>
    </div>
  );
}

function BriefPanel({
  project,
  creative,
  setCreative,
  template,
  campaignDirection,
  setCampaignDirection,
  imagePrompt,
  setImagePrompt,
  variations,
  selectedVariationId,
  transform,
  setTransform,
  busy,
  onAnalyze,
  onGenerateVariations,
  onSelectVariation,
}) {
  return (
    <aside className="studio-panel studio-brief-panel">
      <div className="studio-panel-heading">
        <div>
          <h2>Prompt & Variasi</h2>
          <p>Susun prompt gambar, lalu pilih ambience terbaik.</p>
        </div>
        <Sparkles />
      </div>

      <div className="studio-step-heading">
        <span>1</span>
        <div>
          <strong>Arahan kampanye</strong>
          <p>Jelaskan audiens, nuansa, dan pesan utama.</p>
        </div>
      </div>
      <div className="studio-field">
        <Textarea
          id="campaign-direction"
          aria-label="Arahan kampanye"
          value={campaignDirection}
          onChange={(event) => setCampaignDirection(event.target.value)}
          rows={4}
        />
      </div>
      <Button className="studio-primary-action" onClick={onAnalyze} disabled={busy}>
        {busy ? <LoaderCircle className="studio-spin" /> : <Sparkles />}
        Susun prompt gambar
      </Button>

      <Separator />

      <div className="studio-step-heading">
        <span>2</span>
        <div>
          <strong>Prompt gambar</strong>
          <p>Hasil AI ini dapat diedit sebelum generate.</p>
        </div>
      </div>
      <div className="studio-field">
        <Textarea
          id="image-prompt"
          aria-label="Prompt gambar"
          value={imagePrompt}
          onChange={(event) => setImagePrompt(event.target.value)}
          placeholder="Susun prompt gambar dari referensi terlebih dahulu."
          rows={7}
        />
      </div>
      <Button variant="outline" onClick={onGenerateVariations} disabled={busy || !imagePrompt.trim()}>
        {busy ? <LoaderCircle className="studio-spin" /> : <Play />}
        Generate 4 variasi
      </Button>

      {variations.length ? (
        <>
          <div className="studio-step-heading">
            <span>3</span>
            <div>
              <strong>Pilih variasi</strong>
              <p>Klik ambience untuk menerapkannya ke banner.</p>
            </div>
          </div>
          <div className="studio-variation-grid">
            {variations.map((variation, index) => (
              <button
                type="button"
                key={variation.id}
                className={selectedVariationId === variation.id ? "is-selected" : ""}
                onClick={() => onSelectVariation(variation)}
                aria-pressed={selectedVariationId === variation.id}
              >
                <img src={variation.url} alt={variation.label || `Variasi ${index + 1}`} />
                <span>{variation.label || `Variasi ${index + 1}`}</span>
                {selectedVariationId === variation.id ? <Check /> : null}
              </button>
            ))}
          </div>
        </>
      ) : null}

      <Separator />

      <div className="studio-field">
        <Label htmlFor="template">Template aktif</Label>
        <Select
          value={creative.templateId}
          onValueChange={(templateId) => setCreative((current) => ({ ...current, templateId }))}
        >
          <SelectTrigger id="template">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {PROMOTION_TEMPLATES.map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <p>{template?.description}</p>
      </div>

      <Separator />

      <div className="studio-brand-lock">
        <div>
          <h3>Brand Kit Aktif</h3>
          <p>Tata Kreasi Global · {project.name}</p>
        </div>
        <Badge variant="secondary">Terkunci</Badge>
      </div>
      <div className="studio-swatches">
        {Object.values(DEFAULT_BRAND_KIT.colors).slice(0, 4).map((color) => (
          <span key={color} style={{ backgroundColor: color }} title={color} />
        ))}
      </div>
      <div className="studio-fonts">
        <span>{DEFAULT_BRAND_KIT.fonts.headline}</span>
        <span>{DEFAULT_BRAND_KIT.fonts.body}</span>
      </div>
      <div className="studio-field">
        <Label htmlFor="cta">CTA resmi</Label>
        <Select
          value={creative.cta}
          onValueChange={(cta) => setCreative((current) => ({ ...current, cta }))}
        >
          <SelectTrigger id="cta">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {DEFAULT_BRAND_KIT.ctas.map((cta) => (
                <SelectItem key={cta} value={cta}>
                  {cta}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <details className="studio-crop-controls">
        <summary>
          <Settings2 />
          Crop aman fasad
        </summary>
        <RangeControl
          label="Zoom"
          value={transform.zoom}
          min={1}
          max={1.7}
          step={0.05}
          onChange={(zoom) => setTransform((current) => ({ ...current, zoom }))}
        />
        <RangeControl
          label="Horizontal"
          value={transform.x}
          min={-180}
          max={180}
          step={10}
          onChange={(x) => setTransform((current) => ({ ...current, x }))}
        />
        <RangeControl
          label="Vertikal"
          value={transform.y}
          min={-160}
          max={160}
          step={10}
          onChange={(y) => setTransform((current) => ({ ...current, y }))}
        />
      </details>

    </aside>
  );
}

function RangeControl({ label, value, min, max, step, onChange }) {
  return (
    <label className="studio-range">
      <span>{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

function HistoryView({ history, onRestore, onDownload }) {
  return (
    <section className="studio-content-view">
      <div className="studio-view-header">
        <div>
          <p className="studio-eyebrow">Versi kreatif</p>
          <h2>Riwayat Materi Promosi</h2>
          <p>Bandingkan, pulihkan, dan unduh hasil yang pernah dibuat selama sesi ini.</p>
        </div>
        <Button onClick={onDownload}>
          <Download />
          Unduh kanvas aktif
        </Button>
      </div>
      {history.length ? (
        <div className="studio-history-grid">
          {history.map((version, index) => (
            <article key={version.id} className="studio-history-card">
              <div className="studio-history-icon">
                <FileImage />
              </div>
              <Badge variant="outline">v{history.length - index}</Badge>
              <h3>{version.creative.headline}</h3>
              <p>{version.projectName} · {PROMOTION_FORMATS[version.formatId].label}</p>
              <span>{version.note} · {version.createdAt}</span>
              <Button variant="outline" onClick={() => onRestore(version)}>
                Pulihkan versi
              </Button>
            </article>
          ))}
        </div>
      ) : (
        <EmptyView
          icon={Clock3}
          title="Belum ada versi"
          copy="Buat konsep pertama dari halaman Studio. Setiap iterasi akan tercatat di sini."
        />
      )}
    </section>
  );
}

function BrandKitView() {
  return (
    <AdminView
      eyebrow="Sistem desain"
      title="Brand Kit Tata Kreasi"
      copy="Marketer memakai token yang dikunci. Admin dapat meninjau konfigurasi global dan menyiapkan override per proyek di Supabase."
    >
      <article className="studio-admin-card studio-brand-preview">
        <div>
          <h3>Tata Kreasi Global</h3>
          <p>Default untuk seluruh materi promosi.</p>
        </div>
        <div className="studio-swatches">
          {Object.entries(DEFAULT_BRAND_KIT.colors).map(([name, color]) => (
            <span key={name} style={{ backgroundColor: color }} title={`${name}: ${color}`} />
          ))}
        </div>
        <p><strong>Headline:</strong> {DEFAULT_BRAND_KIT.fonts.headline}</p>
        <p><strong>UI dan body:</strong> {DEFAULT_BRAND_KIT.fonts.body}</p>
        <div className="studio-chip-row">
          {DEFAULT_BRAND_KIT.ctas.map((cta) => <Badge key={cta} variant="outline">{cta}</Badge>)}
        </div>
      </article>
    </AdminView>
  );
}

function TemplatesView() {
  return (
    <AdminView
      eyebrow="Layout terkurasi"
      title="Template Promosi"
      copy="AI hanya memilih dari template aktif agar identitas visual tetap konsisten."
    >
      {PROMOTION_TEMPLATES.map((template) => (
        <article key={template.id} className="studio-admin-card">
          <LayoutTemplate />
          <h3>{template.name}</h3>
          <p>{template.description}</p>
          <div className="studio-chip-row">
            {template.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
          </div>
        </article>
      ))}
    </AdminView>
  );
}

function ProjectsView() {
  return (
    <AdminView
      eyebrow="Klaim terverifikasi"
      title="Proyek Properti"
      copy="Verifikasi promo, harga, logo, dan klaim proyek di Supabase sebelum mengaktifkannya untuk tim."
    >
      {STUDIO_PROJECTS.map((project) => (
        <article key={project.id} className="studio-admin-card">
          <img src={project.heroUrl} alt={project.name} />
          <h3>{project.name}</h3>
          <p>{project.location}</p>
          {project.verifiedClaims.map((claim) => (
            <span key={claim.id} className="studio-verified-claim">
              <Check />
              {claim.label}
            </span>
          ))}
        </article>
      ))}
    </AdminView>
  );
}

function AdminView({ eyebrow, title, copy, children }) {
  return (
    <section className="studio-content-view">
      <div className="studio-view-header">
        <div>
          <p className="studio-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <Badge variant="outline">
          <BookOpenCheck />
          Admin
        </Badge>
      </div>
      <div className="studio-admin-grid">{children}</div>
    </section>
  );
}

function EmptyView({ icon: Icon, title, copy }) {
  return (
    <div className="studio-empty-view">
      <Icon />
      <h3>{title}</h3>
      <p>{copy}</p>
    </div>
  );
}

export default function StudioPromosiPage() {
  return (
    <StudioAuthProvider>
      <AuthGate>
        <StudioLayout />
      </AuthGate>
    </StudioAuthProvider>
  );
}
