import { trackContact, trackLead, trackViewContent } from "../../utils/facebookPixel";

const PREFIX = "LP2026 | ";

/** Meta Pixel `Lead` — hanya untuk klik ke WhatsApp */
export function trackLp2026WhatsAppLead(contentName) {
  trackLead(`${PREFIX}${contentName}`, "WhatsApp Inquiry");
}

/** Navigasi internal / tombol non-WA — `ViewContent`, bukan Lead */
export function trackLp2026Engagement(contentName, contentType = "Engagement") {
  trackViewContent(`${PREFIX}${contentName}`, contentType);
}

/** Email / kontak non-WA */
export function trackLp2026EmailContact(contentName) {
  trackContact(`${PREFIX}${contentName}`, "Email Inquiry");
}
