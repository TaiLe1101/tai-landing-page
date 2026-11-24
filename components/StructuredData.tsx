import React from "react";
import { getCachedLatestRelease } from "@/lib/release-server";
import { getCachedPublicPlans } from "@/lib/plans-server";
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
  const [release, plans] = await Promise.all([
    getCachedLatestRelease(),
    getCachedPublicPlans(),
  ]);

  const offers = plans.map((plan) => {
    const isFree = plan.priceMonthly <= 0 && plan.priceYearly <= 0;
    return {
      "@type": "Offer",
      name: plan.name,
      price: String(Math.max(0, Math.round(plan.priceMonthly))),
      priceCurrency: plan.currency || "VND",
      availability: "https://schema.org/InStock",
      url: siteRoot,
      ...(isFree
        ? {}
        : {
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: String(Math.max(0, Math.round(plan.priceMonthly))),
              priceCurrency: plan.currency || "VND",
              unitText: "tháng",
            },
          }),
      description:
        plan.description ||
        (plan.monthlyMinutesLimit !== null
          ? `Gói ${plan.name} với ${plan.monthlyMinutesLimit} phút lồng tiếng AI mỗi tháng.`
          : `Gói ${plan.name} với thời lượng lồng tiếng AI không giới hạn.`),
    };
  });

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
        applicationSubCategory: "Real-time YouTube AI Dubbing & Bilingual Subtitles",
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
        offers,
        description: SITE_DESCRIPTION,
        featureList: [
          "Integrated YouTube player with real-time AI dubbing on Windows 10/11",
          "42 languages with natural Neural TTS voices preserving pitch (preservesPitch)",
          "~45-second chunked translation with 30s / 12-cue prefetch and instant seek",
          "3-cue lookahead audio-video synchronization preventing voice overlap",
          "4-mode smooth Audio Ducking without abrupt volume jumps",
          "Draggable floating bilingual subtitles with auto-fit text and clickable transcript",
          "Synced SaaS accounts with monthly quota tracking for individuals and teams (Tenant)",
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
