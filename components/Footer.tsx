"use client";

import React from "react";
import { Download, Sparkles, MessageSquare, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 shadow-xs">
                <span className="font-mono font-bold text-white text-xs">
                  TAI
                </span>
              </div>
              <span className="text-base font-bold text-slate-900 tracking-tight">
                Translation AI (TAI)
              </span>
            </div>

            <p className="text-slate-500 max-w-sm leading-relaxed">
              Ứng dụng Desktop dịch thuật YouTube song ngữ theo thời gian thực với độ trễ
              dưới 200ms, bảo toàn 100% thuật ngữ chuyên sâu và hỗ trợ lồng tiếng AI thông
              minh.
            </p>

            {/* Social Links with SVG icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors cursor-pointer shadow-xs"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors cursor-pointer shadow-xs"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors cursor-pointer shadow-xs"
                aria-label="Discord Community"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Sản phẩm */}
          <div className="space-y-3">
            <h5 className="font-bold text-slate-900 tracking-wider uppercase text-[11px]">
              Sản phẩm
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Tính năng nổi bật
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Bản mô phỏng
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Bảng giá cước
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Tải Desktop Client
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Tài nguyên */}
          <div className="space-y-3">
            <h5 className="font-bold text-slate-900 tracking-wider uppercase text-[11px]">
              Tài nguyên
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="#faq"
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Tài liệu hướng dẫn
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Từ điển IT & Y khoa
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Mẫu thẻ Anki Deck
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Khắc phục sự cố âm thanh
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Pháp lý & An toàn */}
          <div className="space-y-3">
            <h5 className="font-bold text-slate-900 tracking-wider uppercase text-[11px]">
              Pháp lý & Bảo mật
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Chính sách quyền riêng tư
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Điều khoản dịch vụ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Bảo vệ dữ liệu On-Device
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Cam kết hoàn tiền 14 ngày
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-slate-600 font-mono text-[11px]">
              Hệ thống Whisper Turbo & Dubbing Cloud: Hoạt động bình thường (100% Uptime)
            </span>
          </div>

          <p className="text-slate-500 text-[11px]">
            © 2026 Translation AI (TAI). Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
