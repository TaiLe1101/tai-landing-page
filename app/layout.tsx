import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://translationai.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563EB",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Translation AI (TAI) - Real-time YouTube Subtitles & Audio Dubbing Desktop App",
    template: "%s | TAI Desktop",
  },
  description:
    "Ứng dụng Desktop dịch thuật YouTube song ngữ theo thời gian thực với độ trễ cực thấp (<200ms), bảo toàn 100% thuật ngữ chuyên ngành IT/Y khoa và thuyết minh AI giọng đọc tự nhiên.",
  applicationName: "TAI Desktop",
  authors: [{ name: "TAI Development Team", url: siteUrl }],
  generator: "Next.js",
  keywords: [
    "Translation AI",
    "TAI Desktop",
    "Real-time YouTube Subtitles",
    "Dịch thuật YouTube song ngữ",
    "Audio Dubbing AI",
    "Terminology Lock",
    "Phụ đề song ngữ YouTube",
    "Dịch video YouTube thời gian thực",
    "Whisper AI Desktop",
    "Lồng tiếng AI YouTube",
    "Phụ đề nổi video",
    "YouTube bilingual subtitles",
    "TAI Windows",
    "TAI macOS",
  ],
  creator: "TAI Team",
  publisher: "Translation AI Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "Translation AI (TAI) - Real-time YouTube Subtitles & Audio Dubbing",
    description:
      "Ứng dụng Desktop dịch thuật YouTube song ngữ theo thời gian thực với độ trễ cực thấp (<200ms), bảo toàn 100% thuật ngữ chuyên ngành IT/Y khoa.",
    url: siteUrl,
    siteName: "Translation AI (TAI)",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Translation AI (TAI) Desktop App Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Translation AI (TAI) - Real-time YouTube Subtitles Desktop App",
    description:
      "Dịch thuật YouTube song ngữ thời gian thực với độ trễ <200ms & AI Terminology Lock cho IT & Y khoa.",
    images: ["/og-preview.png"],
    creator: "@translationai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-500/15 selection:text-blue-900 font-sans">
        {children}
      </body>
    </html>
  );
}
