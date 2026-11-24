"use client";

import React from "react";
import { DownloadCloud, PlaySquare, Headphones, CheckCircle2 } from "lucide-react";
import type { ReleaseInfo } from "@/lib/release";

interface HowItWorksProps {
  release: ReleaseInfo;
}

export default function HowItWorks({ release }: HowItWorksProps) {
  const sizeHint = release.fileSizeLabel ? ` (${release.fileSizeLabel})` : "";
  const steps = [
    {
      step: "01",
      title: "Tải app & đăng ký nhận gói Free",
      desc: `Cài đặt nhanh trên Windows 10/11${sizeHint}. Đăng ký tài khoản ngay trong ứng dụng để tự động kích hoạt gói Free hàng tháng mà không cần thẻ tín dụng.`,
      icon: DownloadCloud,
      badge: "Free Tự Kích Hoạt",
      footer: "Tự động cập nhật phiên bản mới",
    },
    {
      step: "02",
      title: "Mở video YouTube ngay trong TAI",
      desc: "Duyệt YouTube trực tiếp trong trình phát tích hợp hoặc dán link video. Chọn ngôn ngữ đích và giọng đọc từ 42 ngôn ngữ Neural TTS.",
      icon: PlaySquare,
      badge: "Trình Phát Tích Hợp",
      footer: "Không cần cài Extension trình duyệt",
    },
    {
      step: "03",
      title: "Nghe lồng tiếng & xem song ngữ ngay",
      desc: "Hệ thống dịch phân đoạn ~45s + tải trước 30s / 12 câu, tự đồng bộ 3-cue lookahead, Audio Ducking 4 chế độ và phụ đề nổi kéo thả.",
      icon: Headphones,
      badge: "Phát Tức Thì",
      footer: "Tua tới đâu dịch ngay tới đó",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 bg-slate-50 relative border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">
            Đơn Giản &amp; Hiệu Quả
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Chỉ 3 bước để xem YouTube lồng tiếng AI mượt mà
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Không cần cấu hình API Key bên ngoài, không cần Extension rườm rà. Mở ứng dụng
            và bắt đầu xem ngay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-mono font-black text-slate-300">
                      {item.step}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-700">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-blue-600" />
                  <span>{item.footer}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
