import React from "react";
import { getCachedLatestRelease } from "@/lib/release-server";
import { faqs } from "@/lib/faq-data";
import {
  getSiteUrl,
  SITE_DESCRIPTION,
  SITE_FULL_NAME,
  SITE_NAME,
} from "@/lib/site";

export default async function StructuredData() {
  const siteUrl = getSiteUrl();
  const siteRoot = `${siteUrl}/`;
  const release = await getCachedLatestRelease();

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteRoot}#website`,
        url: siteRoot,
        name: SITE_NAME,
        alternateName: SITE_FULL_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "vi-VN",
        publisher: {
          "@id": `${siteRoot}#organization`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteRoot}#organization`,
        name: SITE_FULL_NAME,
        alternateName: SITE_NAME,
        url: siteRoot,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`,
          width: 512,
          height: 512,
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteRoot}#software`,
        name: SITE_NAME,
        alternateName: SITE_FULL_NAME,
        url: siteRoot,
        image: `${siteUrl}/og-image.png`,
        screenshot: `${siteUrl}/og-image.png`,
        operatingSystem: "Windows 10, Windows 11",
        applicationCategory: "MultimediaApplication",
        applicationSubCategory: "Real-time YouTube Subtitles & Audio Dubbing",
        downloadUrl: release.downloadUrl,
        ...(release.version ? { softwareVersion: release.version } : {}),
        ...(release.fileSizeLabel ? { fileSize: release.fileSizeLabel } : {}),
        ...(release.releaseDate ? { dateModified: release.releaseDate } : {}),
        publisher: {
          "@id": `${siteRoot}#organization`,
        },
        author: {
          "@id": `${siteRoot}#organization`,
        },
        offers: [
          {
            "@type": "Offer",
            name: "Free Starter",
            price: "0",
            priceCurrency: "VND",
            availability: "https://schema.org/InStock",
            url: siteRoot,
            description:
              "Miễn phí 15 giờ dịch thuật video/tháng với phụ đề nổi cơ bản.",
          },
          {
            "@type": "Offer",
            name: "Pro Creator",
            price: "139000",
            priceCurrency: "VND",
            availability: "https://schema.org/InStock",
            url: siteRoot,
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "139000",
              priceCurrency: "VND",
              unitText: "tháng (khi thanh toán năm)",
            },
            description:
              "Dịch thuật không giới hạn, độ trễ <180ms, AI Terminology Lock và Audio Dubbing thông minh.",
          },
        ],
        description: SITE_DESCRIPTION,
        featureList: [
          "Real-time YouTube Subtitles with <200ms latency",
          "AI Terminology Lock for IT, Medical & Finance",
          "Neural Audio Dubbing with natural Vietnamese voice",
          "Dual Bilingual Subtitles with 1-click Dictionary Lookup",
          "Lightweight Rust core client consuming <180MB RAM",
          "1-Click Export to Notion and Anki Flashcards",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteRoot}#faq`,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
    />
  );
}
