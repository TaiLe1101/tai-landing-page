"use client";

import React, { useState, useEffect } from "react";
import { Download, Laptop, Apple, X, Zap } from "lucide-react";

export default function StickyDownloadBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;
      const downloadSection = document.getElementById("download");
      const downloadTop = downloadSection ? downloadSection.offsetTop : 999999;
      const currentScroll = window.scrollY;

      // Show after scrolling 500px, but hide when reaching the download section
      if (currentScroll > 500 && currentScroll < downloadTop - 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-slate-300/40 rounded-2xl p-3 sm:px-5 sm:py-3.5 flex items-center justify-between gap-3 text-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs shadow-xs">
            TAI
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-900">
                TAI Desktop v2.4
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                &lt; 200ms Latency
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              Hỗ trợ Windows 10/11, macOS & Linux
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#download"
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all duration-150 cursor-pointer flex items-center gap-1.5 active:scale-[0.98] whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Tải bản Desktop</span>
          </a>

          <button
            onClick={() => setIsDismissed(true)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Đóng thanh tải nhanh"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

