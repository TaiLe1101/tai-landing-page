import { cacheLife } from "next/cache";
import { fetchLatestRelease, type ReleaseInfo } from "./release";

export async function getCachedLatestRelease(): Promise<ReleaseInfo> {
  "use cache";
  cacheLife("minutes");
  return fetchLatestRelease();
}
