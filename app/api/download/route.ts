import { NextResponse } from "next/server";
import { fetchLatestRelease } from "@/lib/release";

export async function GET() {
  const release = await fetchLatestRelease({ timeoutMs: 8000 });

  return NextResponse.redirect(release.downloadUrl, {
    status: 302,
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
