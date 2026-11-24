export const DEFAULT_SITE_URL = "https://devt.dpdns.org";

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const url = configured || DEFAULT_SITE_URL;
  return url.replace(/\/+$/, "");
}

export const SITE_NAME = "TAI Desktop";
export const SITE_FULL_NAME = "Translation AI (TAI)";
export const SITE_TITLE =
  "TAI Desktop — Dịch Phụ Đề Song Ngữ & Thuyết Minh AI YouTube Thời Gian Thực";
export const SITE_DESCRIPTION =
  "Ứng dụng TAI Desktop cho Windows dịch phụ đề song ngữ YouTube và lồng tiếng AI theo thời gian thực với độ trễ <200ms, bảo toàn 100% thuật ngữ chuyên ngành IT, Y khoa & Nghiên cứu.";
