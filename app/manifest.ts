import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Translation AI (TAI) - Real-time YouTube Subtitles & Audio Dubbing",
    short_name: "TAI Desktop",
    description:
      "Ứng dụng Desktop dịch thuật YouTube song ngữ theo thời gian thực với độ trễ cực thấp (<200ms), AI Terminology Lock và Audio Dubbing thông minh.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8FAFC",
    theme_color: "#2563EB",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

