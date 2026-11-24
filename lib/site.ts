export const DEFAULT_SITE_URL = "https://devt.dpdns.org";

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const url = configured || DEFAULT_SITE_URL;
  return url.replace(/\/+$/, "");
}

export const SITE_NAME = "TAI Desktop";
export const SITE_FULL_NAME = "Translation AI (TAI)";
export const SITE_TITLE =
  "TAI Desktop — Trình Phát YouTube Lồng Tiếng AI & Phụ Đề Song Ngữ Thời Gian Thực";
export const SITE_DESCRIPTION =
  "Ứng dụng TAI Desktop cho Windows 10/11 tích hợp trình phát YouTube với 42 ngôn ngữ Neural TTS, dịch phân đoạn ~45s phát ngay, đồng bộ âm thanh – video 3-cue lookahead, Audio Ducking 4 chế độ và phụ đề song ngữ kéo thả.";
