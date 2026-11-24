import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { getCachedLatestRelease } from "@/lib/release-server";

const FALLBACK_LAST_MODIFIED = new Date("2026-11-24T00:00:00.000Z");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const release = await getCachedLatestRelease();
  const parsedReleaseDate = release.releaseDate ? new Date(release.releaseDate) : null;
  const lastModified =
    parsedReleaseDate && !Number.isNaN(parsedReleaseDate.getTime())
      ? parsedReleaseDate
      : FALLBACK_LAST_MODIFIED;

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [`${siteUrl}/og-image.png`, `${siteUrl}/logo.png`],
    },
  ];
}
