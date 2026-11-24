export const DEFAULT_RELEASE_BASE_URL = "https://api.devt.dpdns.org";
export const INTERNAL_DOWNLOAD_PATH = "/api/download";

export interface ReleaseInfo {
  version: string;
  filename: string;
  path: string;
  downloadUrl: string;
  fileSize: number | null;
  fileSizeLabel: string;
  sha512: string | null;
  releaseDate: string | null;
  releaseNotes: string | null;
  source: "latest.json" | "latest.yml" | "fallback";
}

export function getReleaseBaseUrl(): string {
  const configured = process.env.NEXT_PUBLIC_RELEASE_BASE_URL?.trim();
  const base = configured || DEFAULT_RELEASE_BASE_URL;
  return base.replace(/\/+$/, "");
}

export function getLatestDownloadFallbackUrl(baseUrl = getReleaseBaseUrl()): string {
  return `${baseUrl}/uploads/app/release/latest/download`;
}

export function normalizeReleasePath(rawPath: string): string {
  return rawPath
    .trim()
    .replace(/^\/+/, "")
    .split("/")
    .filter(Boolean)
    .map((segment) => {
      try {
        return encodeURIComponent(decodeURIComponent(segment));
      } catch {
        return encodeURIComponent(segment);
      }
    })
    .join("/");
}

export function extractFilename(rawPath: string): string {
  const lastSegment = rawPath.trim().replace(/^\/+/, "").split("/").filter(Boolean).pop();
  if (!lastSegment) return "TAI-Desktop-Setup.exe";
  try {
    return decodeURIComponent(lastSegment);
  } catch {
    return lastSegment;
  }
}

export function resolveDownloadUrl(
  baseUrl: string,
  downloadUrl?: string | null,
  rawPath?: string | null
): string {
  const trimmedUrl = downloadUrl?.trim();
  if (trimmedUrl) {
    if (/^https?:\/\//i.test(trimmedUrl)) {
      return trimmedUrl;
    }
    if (trimmedUrl.startsWith("/")) {
      return `${baseUrl}${trimmedUrl}`;
    }
    return `${baseUrl}/uploads/app/release/${normalizeReleasePath(trimmedUrl)}`;
  }

  const trimmedPath = rawPath?.trim();
  if (trimmedPath) {
    return `${baseUrl}/uploads/app/release/${normalizeReleasePath(trimmedPath)}`;
  }

  return getLatestDownloadFallbackUrl(baseUrl);
}

export function formatFileSize(bytes: number | null | undefined): string {
  if (typeof bytes !== "number" || !Number.isFinite(bytes) || bytes <= 0) {
    return "";
  }
  const mb = bytes / (1024 * 1024);
  if (mb >= 1024) {
    return `${(mb / 1024).toFixed(2)} GB`;
  }
  return `${mb.toFixed(1)} MB`;
}

export function getDisplayVersion(release: ReleaseInfo): string {
  return release.version ? `v${release.version}` : "Mới nhất";
}

export function getFallbackReleaseInfo(baseUrl = getReleaseBaseUrl()): ReleaseInfo {
  return {
    version: "",
    filename: "TAI-Desktop-Setup.exe",
    path: "",
    downloadUrl: getLatestDownloadFallbackUrl(baseUrl),
    fileSize: null,
    fileSizeLabel: "",
    sha512: null,
    releaseDate: null,
    releaseNotes: null,
    source: "fallback",
  };
}

function stripYamlQuotes(value: string): string {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

export function parseLatestYml(ymlText: string, baseUrl = getReleaseBaseUrl()): ReleaseInfo | null {
  const lines = ymlText.split(/\r?\n/);

  let version = "";
  let topPath = "";
  let firstFileUrl = "";
  let firstFileSize: number | null = null;
  let sha512: string | null = null;
  let releaseDate: string | null = null;
  let inFilesSection = false;
  let seenFirstFile = false;

  for (const rawLine of lines) {
    const trimmed = rawLine.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const isTopLevel = !rawLine.startsWith(" ") && !rawLine.startsWith("\t");
    if (isTopLevel) {
      inFilesSection = false;
      const match = rawLine.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
      if (!match) continue;
      const [, key, rawVal] = match;
      const val = stripYamlQuotes(rawVal);

      if (key === "files") {
        inFilesSection = true;
      } else if (key === "version" && val) {
        version = val;
      } else if (key === "path" && val) {
        topPath = val;
      } else if (key === "sha512" && val) {
        sha512 = val;
      } else if (key === "releaseDate" && val) {
        releaseDate = val;
      }
      continue;
    }

    if (inFilesSection) {
      if (trimmed.startsWith("- ")) {
        if (seenFirstFile) {
          inFilesSection = false;
          continue;
        }
        seenFirstFile = true;
        const urlMatch = trimmed.match(/^-\s*url:\s*(.+)$/);
        if (urlMatch) {
          firstFileUrl = stripYamlQuotes(urlMatch[1]);
        }
        continue;
      }

      if (seenFirstFile) {
        const sizeMatch = trimmed.match(/^size:\s*(\d+)$/);
        if (sizeMatch) {
          const parsedSize = Number(sizeMatch[1]);
          if (Number.isFinite(parsedSize) && parsedSize > 0) {
            firstFileSize = parsedSize;
          }
        } else if (!firstFileUrl) {
          const urlMatch = trimmed.match(/^url:\s*(.+)$/);
          if (urlMatch) {
            firstFileUrl = stripYamlQuotes(urlMatch[1]);
          }
        }
      }
    }
  }

  const releasePath = topPath || firstFileUrl;
  if (!version && !releasePath) {
    return null;
  }

  return {
    version,
    filename: extractFilename(releasePath),
    path: releasePath,
    downloadUrl: resolveDownloadUrl(baseUrl, null, releasePath),
    fileSize: firstFileSize,
    fileSizeLabel: formatFileSize(firstFileSize),
    sha512,
    releaseDate,
    releaseNotes: null,
    source: "latest.yml",
  };
}

export function parseLatestJson(data: unknown, baseUrl = getReleaseBaseUrl()): ReleaseInfo | null {
  if (!data || typeof data !== "object") return null;
  const record = data as Record<string, unknown>;

  const version = typeof record.version === "string" ? record.version.trim() : "";
  const rawPath = typeof record.path === "string" ? record.path.trim() : "";
  const rawDownloadUrl =
    typeof record.downloadUrl === "string" ? record.downloadUrl.trim() : "";
  const rawFilename = typeof record.filename === "string" ? record.filename.trim() : "";
  const rawFileSize =
    typeof record.fileSize === "number" && Number.isFinite(record.fileSize) && record.fileSize > 0
      ? record.fileSize
      : null;
  const sha512 = typeof record.sha512 === "string" && record.sha512.trim() ? record.sha512.trim() : null;
  const releaseDate =
    typeof record.releaseDate === "string" && record.releaseDate.trim()
      ? record.releaseDate.trim()
      : null;
  const releaseNotes =
    typeof record.releaseNotes === "string" && record.releaseNotes.trim()
      ? record.releaseNotes.trim()
      : null;

  if (!version && !rawPath && !rawDownloadUrl) {
    return null;
  }

  return {
    version,
    filename: rawFilename || extractFilename(rawPath || rawDownloadUrl),
    path: rawPath,
    downloadUrl: resolveDownloadUrl(baseUrl, rawDownloadUrl, rawPath),
    fileSize: rawFileSize,
    fileSizeLabel: formatFileSize(rawFileSize),
    sha512,
    releaseDate,
    releaseNotes,
    source: "latest.json",
  };
}

async function fetchWithTimeout(
  url: string,
  accept: string,
  timeoutMs: number
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      cache: "no-store",
      headers: { Accept: accept },
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function fetchLatestRelease(options?: {
  baseUrl?: string;
  timeoutMs?: number;
}): Promise<ReleaseInfo> {
  const baseUrl = (options?.baseUrl || getReleaseBaseUrl()).replace(/\/+$/, "");
  const timeoutMs = options?.timeoutMs ?? 5000;

  try {
    const jsonRes = await fetchWithTimeout(
      `${baseUrl}/uploads/app/release/latest.json`,
      "application/json",
      timeoutMs
    );
    if (jsonRes.ok) {
      const jsonData: unknown = await jsonRes.json();
      const parsed = parseLatestJson(jsonData, baseUrl);
      if (parsed) return parsed;
    }
  } catch {
    // Fall through to latest.yml fallback
  }

  try {
    const ymlRes = await fetchWithTimeout(
      `${baseUrl}/uploads/app/release/latest.yml`,
      "text/yaml, text/plain, */*",
      timeoutMs
    );
    if (ymlRes.ok) {
      const ymlText = await ymlRes.text();
      const parsed = parseLatestYml(ymlText, baseUrl);
      if (parsed) return parsed;
    }
  } catch {
    // Fall through to latest/download fallback
  }

  return getFallbackReleaseInfo(baseUrl);
}
