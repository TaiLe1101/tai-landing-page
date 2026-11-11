"use client";

import React from "react";
import {
  Download,
  ShieldCheck,
  ArrowRight,
  Apple,
  Laptop,
} from "lucide-react";
import DesktopMockup from "./DesktopMockup";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/50 via-slate-50 to-slate-50">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-200/40 via-indigo-100/40 to-cyan-100/30 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100/40 blur-[100px] rounded-full pointer-events-none" />

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(15, 23, 42, 0.4) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 shadow-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-xs font-semibold text-slate-800">
              TAI Desktop v2.4 Ra Mắt
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs text-blue-600 font-semibold">
              Whisper v3 Turbo + Neural Dubbing
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Dịch thuật YouTube song ngữ{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              theo thời gian thực.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ứng dụng Desktop dịch phụ đề và lồng tiếng AI tức thì với{" "}
            <strong className="text-slate-900 font-semibold">độ trễ dưới 200ms</strong>.
            Bảo toàn 100% thuật ngữ chuyên ngành IT, Y khoa và Nghiên cứu khoa học.
          </p>

          {/* Primary CTA */}
          <div className="pt-2 flex items-center justify-center">
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl font-bold text-base text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-200 active:scale-[0.98] cursor-pointer group"
            >
              <Download className="w-5 h-5 text-white group-hover:translate-y-0.5 transition-transform duration-150" />
              <span>Tải bản Desktop miễn phí</span>
            </a>
          </div>

          {/* OS support & Trust Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <Laptop className="w-3.5 h-3.5 text-slate-600" />
              <span>Tải cho Windows</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Apple className="w-3.5 h-3.5 text-slate-600" />
              <span>Tải cho macOS</span>
            </div>
            <div className="flex items-center gap-1.5 text-blue-600 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Không cần Extension trình duyệt</span>
            </div>
          </div>
        </div>

        {/* Visual Mockup Container */}
        <div className="mt-14 sm:mt-16 relative">
          <DesktopMockup />
        </div>
      </div>
    </section>
  );
}
