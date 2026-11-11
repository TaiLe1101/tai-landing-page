"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group cursor-pointer"
            aria-label="Trang chủ TAI - Translation AI"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/30 transition-all duration-200 text-white">
              <span className="font-mono font-black text-white text-lg tracking-wider">
                T
              </span>
              <span className="font-mono font-bold text-blue-200 text-xs -ml-0.5">
                AI
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                  TAI
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-blue-50 text-blue-700 border border-blue-200">
                  Desktop v2.4
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide">
                Real-time YouTube AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a
              href="#features"
              className="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Tính năng
            </a>
            <a
              href="#demo"
              className="hover:text-blue-600 transition-colors duration-200 cursor-pointer flex items-center gap-1.5"
            >
              Trải nghiệm
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            </a>
            <a
              href="#how-it-works"
              className="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Cách hoạt động
            </a>
            <a
              href="#pricing"
              className="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Bảng giá
            </a>
            <a
              href="#faq"
              className="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#download"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Tải bản Desktop</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#download"
              className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors duration-200 cursor-pointer"
              aria-label="Mở menu điều hướng"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border border-slate-200 bg-white/95 backdrop-blur-xl rounded-2xl px-4 flex flex-col gap-3 shadow-xl">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              Tính năng nổi bật
            </a>
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer flex items-center justify-between"
            >
              <span>Trải nghiệm trực quan</span>
              <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">
                Interactive
              </span>
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              Cách hoạt động
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              Bảng giá
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              Câu hỏi thường gặp
            </a>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 text-center text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
              >
                <Download className="w-4 h-4" />
                Tải bản Desktop
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
