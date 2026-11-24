import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import {
  getSiteUrl,
  SITE_DESCRIPTION,
  SITE_FULL_NAME,
  SITE_NAME,
  SITE_TITLE,
} from "@/lib/site";

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

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a1026",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "TAI Development Team", url: `${siteUrl}/` }],
  generator: "Next.js",
  keywords: [
    "TAI Desktop",
    "Translation AI",
    "dịch phụ đề YouTube thời gian thực",
    "phụ đề song ngữ YouTube",
    "thuyết minh AI YouTube",
    "lồng tiếng AI YouTube",
    "real-time YouTube subtitles",
    "AI audio dubbing desktop app",
    "Whisper v3 Turbo",
    "AI Terminology Lock",
    "phụ đề nổi video",
    "dịch video tiếng Anh sang tiếng Việt",
    "TAI Windows",
  ],
  creator: "TAI Team",
  publisher: SITE_FULL_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: `${siteUrl}/`,
    siteName: SITE_NAME,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TAI Desktop — Dịch phụ đề song ngữ & thuyết minh AI YouTube thời gian thực",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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
