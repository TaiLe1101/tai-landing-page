"use client";

import React, { useSyncExternalStore } from "react";
import {
  Download,
  Laptop,
  Apple,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Clock,
} from "lucide-react";
import { INTERNAL_DOWNLOAD_PATH, type ReleaseInfo } from "@/lib/release";

interface DownloadSectionProps {
  release: ReleaseInfo;
}

const subscribe = () => () => {};
const getServerOS = (): "windows" | "mac" | "linux" => "windows";
function getClientOS(): "windows" | "mac" | "linux" {
  const userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.includes("mac")) return "mac";
  if (userAgent.includes("linux")) return "linux";
  return "windows";
}

export default function DownloadSection({ release }: DownloadSectionProps) {
  const detectedOS = useSyncExternalStore(subscribe, getClientOS, getServerOS);
  const versionLabel = release.version ? `v${release.version} Stable` : "Bản mới nhất";
  const sizeLabel = release.fileSizeLabel || "Trình cài đặt (.exe)";

  return (
    <section id="download" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-100/50 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tải Về Trực Tiếp</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Sẵn sàng mở khóa thế giới tri thức video?
          </h2>
          <p className="text-base text-slate-600">
            Cài đặt nhanh trên Windows 10/11. Đăng ký tài khoản ngay trong ứng dụng để tự
            động nhận gói Free hàng tháng — không cần thẻ tín dụng.
          </p>
        </div>

        {/* Download Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Windows Download */}
          <div className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 shadow-xs">
                  <Laptop className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-600 text-white font-mono shadow-xs">
                  {detectedOS === "windows" ? "Hệ điều hành của bạn" : "Sẵn sàng tải về"}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">Windows</h3>
              <p className="text-xs text-slate-500 mb-4">
                Hỗ trợ Windows 10 &amp; 11 (64-bit). Tự động cập nhật phiên bản mới nhất.
              </p>

              <div className="text-xs font-mono text-slate-700 space-y-1.5 py-3 border-y border-slate-100">
                <div className="flex justify-between gap-2">
                  <span className="text-slate-400">Phiên bản:</span>
                  <span className="font-semibold text-slate-900">{versionLabel}</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-slate-400">Dung lượng:</span>
                  <span className="font-semibold text-slate-900">{sizeLabel}</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-slate-400 shrink-0">Tệp cài đặt:</span>
                  <span
                    className="font-semibold text-slate-700 truncate max-w-[160px]"
                    title={release.filename}
                  >
                    {release.filename}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <a
                href={INTERNAL_DOWNLOAD_PATH}
                title={`Tải ${release.filename}`}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.98] bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25"
              >
                <Download className="w-4 h-4" />
                <span>
                  Tải cho Windows{release.version ? ` (v${release.version})` : ""}
                </span>
              </a>
              <p className="text-center text-[11px] text-slate-400">
                Hoặc{" "}
                <a
                  href={release.downloadUrl}
                  className="text-blue-600 hover:underline font-medium"
                >
                  tải trực tiếp từ máy chủ phát hành
                </a>
              </p>
            </div>
          </div>

          {/* macOS Download (Coming Soon) */}
          <div className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 border bg-slate-50 border-slate-200 hover:border-slate-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 shadow-xs">
                  <Apple className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-600 font-mono">
                  Sắp ra mắt
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">macOS</h3>
              <p className="text-xs text-slate-500 mb-4">
                Apple Silicon (M1/M2/M3/M4) &amp; Intel. Đang tối ưu Apple Neural Engine.
              </p>

              <div className="text-xs font-mono text-slate-700 space-y-1.5 py-3 border-y border-slate-100">
                <div className="flex justify-between gap-2">
                  <span className="text-slate-400">Trạng thái:</span>
                  <span className="font-semibold text-slate-600">Sắp ra mắt</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-slate-400">Kiến trúc:</span>
                  <span className="font-semibold text-slate-600">Universal (.dmg)</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                disabled
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 bg-slate-100 text-slate-500 border border-slate-200 cursor-not-allowed"
              >
                <Clock className="w-4 h-4" />
                <span>Sắp ra mắt</span>
              </button>
            </div>
          </div>

          {/* Linux Download (Coming Soon) */}
          <div className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 border bg-slate-50 border-slate-200 hover:border-slate-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 shadow-xs">
                  <Terminal className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-600 font-mono">
                  Sắp ra mắt
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">Linux</h3>
              <p className="text-xs text-slate-500 mb-4">
                Ubuntu, Debian, Fedora, Arch Linux. Dự kiến phát hành AppImage &amp; Flatpak.
              </p>

              <div className="text-xs font-mono text-slate-700 space-y-1.5 py-3 border-y border-slate-100">
                <div className="flex justify-between gap-2">
                  <span className="text-slate-400">Trạng thái:</span>
                  <span className="font-semibold text-slate-600">Sắp ra mắt</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-slate-400">Định dạng:</span>
                  <span className="font-semibold text-slate-600">AppImage / Flatpak</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                disabled
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 bg-slate-100 text-slate-500 border border-slate-200 cursor-not-allowed"
              >
                <Clock className="w-4 h-4" />
                <span>Sắp ra mắt</span>
              </button>
            </div>
          </div>
        </div>

        {/* Verification footer */}
        <div className="mt-12 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Tự động kiểm tra và cập nhật phiên bản mới trực tiếp trong ứng dụng</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>Tải trực tiếp từ máy chủ phát hành chính thức, không cần Extension</span>
          </div>
        </div>
      </div>
    </section>
  );
}
