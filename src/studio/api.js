async function request(path, { session, body, method = "POST" }) {
  const response = await fetch(path, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.access_token || ""}`,
      "Idempotency-Key": crypto.randomUUID(),
    },
    body: JSON.stringify(body),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.error || "Studio API tidak dapat memproses permintaan.");
  }

  return payload;
}

export function analyzePromotion(session, body) {
  return request("/api/promotion/analyze", { session, body });
}

export function generateBackground(session, body) {
  return request("/api/promotion/background", { session, body });
}

export function generateVariations(session, body) {
  return request("/api/promotion/variations", { session, body });
}

export function refinePromotion(session, body) {
  return request("/api/promotion/refine", { session, body });
}
