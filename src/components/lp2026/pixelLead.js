import { trackLead } from "../../utils/facebookPixel";

/** Meta Pixel `Lead` — prefix konsisten untuk filter di Events Manager */
export function trackLp2026Lead(contentName, leadType = "WhatsApp Inquiry") {
  trackLead(`LP2026 | ${contentName}`, leadType);
}
