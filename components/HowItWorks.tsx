"use client";

import React from "react";
import { DownloadCloud, PlaySquare, Headphones, ShieldCheck } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Cài đặt trong 30 giây",
    desc: "Tải file cài đặt siêu nhẹ (~78MB) cho Windows hoặc macOS. Không cần cài thêm Extension trình duyệt rườm rà.",
    icon: DownloadCloud,
    badge: "1-Click Setup",
  },
  {
    step: "02",
    title: "Mở bất kỳ video nào",
    desc: "Mở YouTube, Coursera, Twitch hoặc bất kỳ bài giảng nào. Động cơ audio hook tự động nhận diện luồng phát tức thời.",
    icon: PlaySquare,
    badge: "Auto Detection",
  },
  {
    step: "03",
    title: "Trải nghiệm song ngữ & Dubbing",
    desc: "Phụ đề song ngữ nổi đè lên màn hình với độ trễ <200ms. Thuyết minh giọng đọc tiếng Việt tự nhiên bảo toàn âm thanh gốc.",
    icon: Headphones,
    badge: "Real-time AI",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">
            Đơn Giản & Hiệu Quả
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Chỉ với 3 bước để tiếp cận tri thức toàn cầu
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Không cần tài khoản phức tạp, không cần API Key bên ngoài. Mọi thứ hoạt động
            ngay sau khi mở ứng dụng.
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
                  <ShieldCheck className="w-4 h-4 mr-1.5 text-blue-600" />
                  <span>Bảo mật dữ liệu 100% On-Device</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
