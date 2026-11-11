"use client";

import React, { useState, useEffect } from "react";
import {
  Download,
  Laptop,
  Apple,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function DownloadSection() {
  const [detectedOS, setDetectedOS] = useState<"windows" | "mac" | "linux">("windows");

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes("mac")) {
      setDetectedOS("mac");
    } else if (userAgent.includes("linux")) {
      setDetectedOS("linux");
    } else {
      setDetectedOS("windows");
    }
  }, []);

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
            Cài đặt nhanh trong 30 giây. Không cần thẻ tín dụng, trải nghiệm miễn phí trọn
            đời với bản Starter.
          </p>
        </div>

        {/* Download Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Windows Download */}
          <div
            className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 border ${
              detectedOS === "windows"
                ? "bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10"
                : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 shadow-xs">
                  <Laptop className="w-6 h-6" />
                </div>
                {detectedOS === "windows" && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-600 text-white font-mono shadow-xs">
                    Hệ điều hành của bạn
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">Windows</h3>
              <p className="text-xs text-slate-500 mb-4">
                Hỗ trợ Windows 10 & 11 (64-bit / ARM64). Tương thích DirectML.
              </p>

              <div className="text-xs font-mono text-slate-700 space-y-1 py-3 border-y border-slate-100">
                <div className="flex justify-between">
                  <span className="text-slate-400">Phiên bản:</span>
                  <span className="font-semibold">v2.4.2 Stable</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Dung lượng:</span>
                  <span className="font-semibold">78.4 MB</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Đang khởi động tải xuống bản TAI Desktop cho Windows!");
                }}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.98] ${
                  detectedOS === "windows"
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200"
                }`}
              >
                <Download className="w-4 h-4" />
                <span>Tải cho Windows</span>
              </a>
            </div>
          </div>

          {/* macOS Download */}
          <div
            className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 border ${
              detectedOS === "mac"
                ? "bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10"
                : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 shadow-xs">
                  <Apple className="w-6 h-6" />
                </div>
                {detectedOS === "mac" && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-600 text-white font-mono shadow-xs">
                    Hệ điều hành của bạn
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">macOS</h3>
              <p className="text-xs text-slate-500 mb-4">
                Apple Silicon (M1/M2/M3/M4) & Intel. Tận dụng Apple Neural Engine.
              </p>

              <div className="text-xs font-mono text-slate-700 space-y-1 py-3 border-y border-slate-100">
                <div className="flex justify-between">
                  <span className="text-slate-400">Phiên bản:</span>
                  <span className="font-semibold">v2.4.2 Universal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Dung lượng:</span>
                  <span className="font-semibold">82.1 MB</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Đang khởi động tải xuống bản TAI Desktop cho macOS!");
                }}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.98] ${
                  detectedOS === "mac"
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200"
                }`}
              >
                <Download className="w-4 h-4" />
                <span>Tải cho macOS</span>
              </a>
            </div>
          </div>

          {/* Linux Download */}
          <div
            className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 border ${
              detectedOS === "linux"
                ? "bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10"
                : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 shadow-xs">
                  <Terminal className="w-6 h-6" />
                </div>
                {detectedOS === "linux" && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-600 text-white font-mono shadow-xs">
                    Hệ điều hành của bạn
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">Linux</h3>
              <p className="text-xs text-slate-500 mb-4">
                Ubuntu, Debian, Fedora, Arch Linux. Tương thích AppImage & Flatpak.
              </p>

              <div className="text-xs font-mono text-slate-700 space-y-1 py-3 border-y border-slate-100">
                <div className="flex justify-between">
                  <span className="text-slate-400">Phiên bản:</span>
                  <span className="font-semibold">v2.4.2 x86_64</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Dung lượng:</span>
                  <span className="font-semibold">75.9 MB</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Đang khởi động tải xuống bản TAI Desktop cho Linux!");
                }}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.98] ${
                  detectedOS === "linux"
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200"
                }`}
              >
                <Download className="w-4 h-4" />
                <span>Tải cho Linux</span>
              </a>
            </div>
          </div>
        </div>

        {/* Security / Verification footer */}
        <div className="mt-12 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Mã nguồn ký số chứng thư số bảo mật EV Code Signing</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>Không chứa quảng cáo, phần mềm gián điệp hay telemetry xâm phạm</span>
          </div>
        </div>
      </div>
    </section>
  );
}
