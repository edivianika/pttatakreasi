const { randomUUID } = require("node:crypto");
const OpenAI = require("openai");
const { zodTextFormat } = require("openai/helpers/zod");
const { createClient } = require("@supabase/supabase-js");
const { z } = require("zod");

const TEXT_MODEL = process.env.OPENAI_TEXT_MODEL || "gpt-5.5";
const IMAGE_MODEL = process.env.OPENAI_IMAGE_MODEL || "gpt-image-2";
const TEMPLATE_IDS = ["editorial-hero", "promo-fokus-harga", "syariah-keluarga"];
const FORMAT_IDS = ["feed", "story", "whatsapp"];
const ImagePromptSchema = z.string().min(40).max(4000);

const BriefSchema = z.object({
  headline: z.string().min(4).max(72),
  subheadline: z.string().min(8).max(180),
  claimIds: z.array(z.string()).min(1).max(3),
  templateId: z.enum(TEMPLATE_IDS),
  safeZone: z.object({
    note: z.string().max(160),
    avoidCoveringFacade: z.boolean(),
  }),
});

const AnalyzeBriefSchema = BriefSchema.extend({
  imagePrompt: ImagePromptSchema,
});

const BackgroundInspectionSchema = z.object({
  isSafe: z.boolean(),
  reasons: z.array(z.string()).max(5),
});

const AnalyzeBodySchema = z.object({
  projectId: z.string().min(1),
  format: z.enum(FORMAT_IDS),
  prompt: z.string().min(8).max(1600),
  referenceAssetIds: z.array(z.string().uuid()).min(1).max(5),
});

const BackgroundBodySchema = z.object({
  projectId: z.string().min(1),
  format: z.enum(FORMAT_IDS),
  prompt: z.string().min(8).max(1600),
});

const VariationsBodySchema = z.object({
  projectId: z.string().min(1),
  format: z.enum(FORMAT_IDS),
  imagePrompt: ImagePromptSchema,
  count: z.number().int().min(1).max(4).default(4),
});

const RefineBodySchema = z.object({
  projectId: z.string().min(1),
  format: z.enum(FORMAT_IDS),
  instruction: z.string().min(3).max(1200),
  currentBrief: z.object({
    headline: z.string().max(100),
    subheadline: z.string().max(240),
    claimIds: z.array(z.string()).max(5),
    templateId: z.enum(TEMPLATE_IDS),
  }),
});

function assertConfigured() {
  const required = ["OPENAI_API_KEY", "SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length) {
    const error = new Error(`Server belum dikonfigurasi: ${missing.join(", ")}`);
    error.status = 503;
    throw error;
  }
}

function getClients() {
  assertConfigured();
  return {
    openai: new OpenAI({ apiKey: process.env.OPENAI_API_KEY }),
    supabase: createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    }),
  };
}

function sendJson(res, status, payload) {
  res.status(status).json(payload);
}

function parseBody(schema, req) {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    const error = new Error(parsed.error.issues.map((issue) => issue.message).join("; "));
    error.status = 400;
    throw error;
  }
  return parsed.data;
}

function requirePost(req) {
  if (req.method !== "POST") {
    const error = new Error("Method not allowed");
    error.status = 405;
    throw error;
  }
}

async function authenticate(req, supabase) {
  const bearer = req.headers.authorization;
  const token = bearer?.startsWith("Bearer ") ? bearer.slice(7) : null;
  if (!token) {
    const error = new Error("Login diperlukan.");
    error.status = 401;
    throw error;
  }

  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data.user) {
    const authError = new Error("Sesi login tidak valid.");
    authError.status = 401;
    throw authError;
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("id, role, daily_ai_background_limit")
    .eq("id", data.user.id)
    .single();

  if (profileError || !profile) {
    const accessError = new Error("Akun belum diundang ke Studio Promosi.");
    accessError.status = 403;
    throw accessError;
  }

  return { ...data.user, profile };
}

async function getProject(supabase, projectId) {
  const { data, error } = await supabase
    .from("projects")
    .select("id, name, location, claim_catalog, is_verified")
    .eq("id", projectId)
    .single();

  if (error || !data) {
    const projectError = new Error("Proyek tidak ditemukan.");
    projectError.status = 404;
    throw projectError;
  }

  if (!data.is_verified) {
    const verificationError = new Error("Proyek belum diverifikasi admin.");
    verificationError.status = 409;
    throw verificationError;
  }

  return data;
}

function getIdempotencyKey(req) {
  const key = req.headers["idempotency-key"];
  return typeof key === "string" && key.trim() ? key.trim().slice(0, 160) : null;
}

async function getCachedJob(supabase, userId, idempotencyKey) {
  if (!idempotencyKey) return null;
  const { data } = await supabase
    .from("ai_generation_jobs")
    .select("status, response_json")
    .eq("user_id", userId)
    .eq("idempotency_key", idempotencyKey)
    .maybeSingle();
  return data?.status === "completed" ? data.response_json : null;
}

async function createJob(supabase, { userId, projectId, type, model, idempotencyKey, request }) {
  const { data, error } = await supabase
    .from("ai_generation_jobs")
    .insert({
      user_id: userId,
      project_id: projectId,
      type,
      model,
      idempotency_key: idempotencyKey,
      request_json: request,
    })
    .select("id")
    .single();

  if (error) throw error;
  return data.id;
}

async function completeJob(supabase, jobId, status, response, errorMessage = null) {
  await supabase
    .from("ai_generation_jobs")
    .update({
      status,
      response_json: response || null,
      error: errorMessage,
      completed_at: new Date().toISOString(),
    })
    .eq("id", jobId);
}

function filterBriefClaims(brief, project) {
  const allowedIds = new Set(project.claim_catalog.map((claim) => claim.id));
  const claimIds = brief.claimIds.filter((id) => allowedIds.has(id));
  if (!claimIds.length) {
    const error = new Error("AI tidak memilih klaim proyek yang terverifikasi.");
    error.status = 422;
    throw error;
  }

  return { ...brief, claimIds };
}

async function getReferenceImageContent(supabase, projectId, referenceAssetIds) {
  const { data, error } = await supabase
    .from("reference_assets")
    .select("id, role, storage_path")
    .eq("project_id", projectId)
    .in("id", referenceAssetIds);

  if (error || !data || data.length !== referenceAssetIds.length) {
    const assetError = new Error("Sebagian referensi tidak ditemukan untuk proyek aktif.");
    assetError.status = 400;
    throw assetError;
  }

  const signedAssets = await Promise.all(
    data.map(async (asset) => {
      const { data: signed, error: signError } = await supabase.storage
        .from("reference-assets")
        .createSignedUrl(asset.storage_path, 300);
      if (signError) throw signError;
      return {
        type: "input_image",
        image_url: signed.signedUrl,
        detail: asset.role === "facade_primary" ? "high" : "low",
      };
    }),
  );

  return signedAssets;
}

async function handleAnalyze(req, res) {
  requirePost(req);
  const { openai, supabase } = getClients();
  const user = await authenticate(req, supabase);
  const body = parseBody(AnalyzeBodySchema, req);
  const idempotencyKey = getIdempotencyKey(req);
  const cached = await getCachedJob(supabase, user.id, idempotencyKey);
  if (cached) return sendJson(res, 200, cached);

  const project = await getProject(supabase, body.projectId);
  const imageContent = await getReferenceImageContent(
    supabase,
    body.projectId,
    body.referenceAssetIds,
  );
  const jobId = await createJob(supabase, {
    userId: user.id,
    projectId: body.projectId,
    type: "analyze",
    model: TEXT_MODEL,
    idempotencyKey,
    request: body,
  });

  try {
    const response = await openai.responses.parse({
      model: TEXT_MODEL,
      input: [
        {
          role: "developer",
          content:
            "You are an Indonesian property marketing art director. Analyze facade references only for composition. Never propose changes to architecture, facade materials, doors, windows, roof, or building geometry. Use only verified claim IDs. Pick exactly one approved template. Also return a detailed English imagePrompt for generating a supporting ambience layer only. The imagePrompt must request no house, no building, no architecture, no facade, no roof, no people, no text, no letters, no numbers, no logo, and no watermark. Keep the center calm and low-detail because the unchanged source facade and exact marketing copy will be layered above it later.",
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: JSON.stringify({
                task: "Create an Indonesian promotional banner brief.",
                campaignPrompt: body.prompt,
                format: body.format,
                project: {
                  name: project.name,
                  location: project.location,
                  verifiedClaims: project.claim_catalog,
                },
                approvedTemplates: TEMPLATE_IDS,
              }),
            },
            ...imageContent,
          ],
        },
      ],
      text: { format: zodTextFormat(AnalyzeBriefSchema, "promotion_brief") },
    });

    const brief = filterBriefClaims(response.output_parsed, project);
    const payload = { brief };
    await completeJob(supabase, jobId, "completed", payload);
    return sendJson(res, 200, payload);
  } catch (error) {
    await completeJob(supabase, jobId, "failed", null, error.message);
    throw error;
  }
}

function getBackgroundSize(format) {
  if (format === "story") return "1024x1792";
  if (format === "whatsapp") return "1536x800";
  return "1024x1024";
}

async function assertBackgroundQuota(supabase, user) {
  const startOfDay = new Date();
  startOfDay.setUTCHours(0, 0, 0, 0);
  const { count, error } = await supabase
    .from("ai_generation_jobs")
    .select("id", { count: "exact", head: true })
    .eq("user_id", user.id)
    .eq("type", "background")
    .in("status", ["pending", "completed"])
    .gte("created_at", startOfDay.toISOString());

  if (error) throw error;
  if ((count || 0) >= user.profile.daily_ai_background_limit) {
    const quotaError = new Error("Batas latar AI harian telah tercapai.");
    quotaError.status = 429;
    throw quotaError;
  }
}

function makeAmbiencePrompt(project, imagePrompt) {
  return [
    "Create one tasteful supporting ambience layer for an Indonesian sharia property promotional banner.",
    `Project mood: ${project.name}, ${project.location}.`,
    `Art direction: ${imagePrompt}`,
    "The unchanged real property facade and exact marketing copy will be layered above this image later.",
    "Strictly no house, no building, no architecture, no roof, no facade, no text, no letters, no numbers, no logo, no watermark, no people.",
    "Keep the center calm and low-detail. Use restrained lighting and an editorial composition.",
  ].join("\n");
}

async function inspectBackground(openai, dataUrl) {
  const inspected = await openai.responses.parse({
    model: TEXT_MODEL,
    input: [
      {
        role: "developer",
        content:
          "Inspect a banner ambience layer. Reject it if it contains any building, house, architecture, facade, roof, text, letters, numbers, logo, watermark, or people.",
      },
      {
        role: "user",
        content: [
          { type: "input_text", text: "Is this ambience layer safe to place behind a locked facade?" },
          { type: "input_image", image_url: dataUrl, detail: "low" },
        ],
      },
    ],
    text: { format: zodTextFormat(BackgroundInspectionSchema, "background_inspection") },
  });

  return inspected.output_parsed;
}

async function storeVariation(supabase, userId, base64) {
  const storagePath = `${userId}/${randomUUID()}.jpeg`;
  const { error: uploadError } = await supabase.storage
    .from("creative-assets")
    .upload(storagePath, Buffer.from(base64, "base64"), {
      contentType: "image/jpeg",
      upsert: false,
    });
  if (uploadError) throw uploadError;

  const { data: signed, error: signError } = await supabase.storage
    .from("creative-assets")
    .createSignedUrl(storagePath, 3600);
  if (signError) throw signError;

  return {
    id: randomUUID(),
    url: signed.signedUrl,
    storagePath,
  };
}

async function generateVisualVariations(req, res, body, responseMode = "variations") {
  const { openai, supabase } = getClients();
  const user = await authenticate(req, supabase);
  const idempotencyKey = getIdempotencyKey(req);
  const cached = await getCachedJob(supabase, user.id, idempotencyKey);
  if (cached) return sendJson(res, 200, cached);

  const project = await getProject(supabase, body.projectId);
  await assertBackgroundQuota(supabase, user);
  const count = responseMode === "background" ? 1 : body.count;
  const jobId = await createJob(supabase, {
    userId: user.id,
    projectId: body.projectId,
    type: "background",
    model: IMAGE_MODEL,
    idempotencyKey,
    request: body,
  });

  try {
    const generated = await openai.images.generate({
      model: IMAGE_MODEL,
      size: getBackgroundSize(body.format),
      quality: "medium",
      output_format: "jpeg",
      background: "opaque",
      n: count,
      user: user.id,
      prompt: makeAmbiencePrompt(project, body.imagePrompt || body.prompt),
    });

    const generatedImages = (generated.data || []).filter((image) => image.b64_json);
    if (!generatedImages.length) throw new Error("OpenAI tidak mengembalikan variasi gambar.");

    const inspectedImages = await Promise.all(
      generatedImages.map(async (image) => ({
        base64: image.b64_json,
        inspection: await inspectBackground(openai, `data:image/jpeg;base64,${image.b64_json}`),
      })),
    );
    const acceptedImages = inspectedImages.filter(({ inspection }) => inspection.isSafe);

    if (!acceptedImages.length) {
      const reasons = inspectedImages.flatMap(({ inspection }) => inspection.reasons).slice(0, 5);
      const payload = { rejected: true, reasons };
      await completeJob(supabase, jobId, "rejected", payload);
      return sendJson(res, 422, {
        error: "Semua variasi AI ditolak karena berpotensi mengandung elemen yang tidak diizinkan.",
        reasons: payload.reasons,
      });
    }

    const variations = await Promise.all(
      acceptedImages.map(({ base64 }) => storeVariation(supabase, user.id, base64)),
    );
    const payload = responseMode === "background"
      ? { backgroundUrl: variations[0].url, storagePath: variations[0].storagePath }
      : {
          variations,
          rejectedCount: inspectedImages.length - acceptedImages.length,
        };
    await completeJob(supabase, jobId, "completed", payload);
    return sendJson(res, 200, payload);
  } catch (error) {
    await completeJob(supabase, jobId, "failed", null, error.message);
    throw error;
  }
}

async function handleBackground(req, res) {
  requirePost(req);
  const body = parseBody(BackgroundBodySchema, req);
  return generateVisualVariations(req, res, body, "background");
}

async function handleVariations(req, res) {
  requirePost(req);
  const body = parseBody(VariationsBodySchema, req);
  return generateVisualVariations(req, res, body);
}

async function handleRefine(req, res) {
  requirePost(req);
  const { openai, supabase } = getClients();
  const user = await authenticate(req, supabase);
  const body = parseBody(RefineBodySchema, req);
  const idempotencyKey = getIdempotencyKey(req);
  const cached = await getCachedJob(supabase, user.id, idempotencyKey);
  if (cached) return sendJson(res, 200, cached);

  const project = await getProject(supabase, body.projectId);
  const jobId = await createJob(supabase, {
    userId: user.id,
    projectId: body.projectId,
    type: "refine",
    model: TEXT_MODEL,
    idempotencyKey,
    request: body,
  });

  try {
    const response = await openai.responses.parse({
      model: TEXT_MODEL,
      input: [
        {
          role: "developer",
          content:
            "Refine Indonesian property marketing copy. Keep it concise. Use only verified claim IDs. Never introduce a new promise, price, promo, or property fact. The facade layer remains unchanged.",
        },
        {
          role: "user",
          content: JSON.stringify({
            task: "Refine the banner brief.",
            instruction: body.instruction,
            format: body.format,
            currentBrief: body.currentBrief,
            project: { name: project.name, verifiedClaims: project.claim_catalog },
            approvedTemplates: TEMPLATE_IDS,
          }),
        },
      ],
      text: { format: zodTextFormat(BriefSchema, "refined_promotion_brief") },
    });

    const brief = filterBriefClaims(response.output_parsed, project);
    const payload = { brief };
    await completeJob(supabase, jobId, "completed", payload);
    return sendJson(res, 200, payload);
  } catch (error) {
    await completeJob(supabase, jobId, "failed", null, error.message);
    throw error;
  }
}

function withErrorHandling(handler) {
  return async function route(req, res) {
    try {
      return await handler(req, res);
    } catch (error) {
      console.error(error);
      return sendJson(res, error.status || 500, {
        error: error.status ? error.message : "Terjadi kesalahan saat memproses permintaan studio.",
      });
    }
  };
}

module.exports = {
  handleAnalyze: withErrorHandling(handleAnalyze),
  handleBackground: withErrorHandling(handleBackground),
  handleVariations: withErrorHandling(handleVariations),
  handleRefine: withErrorHandling(handleRefine),
};
