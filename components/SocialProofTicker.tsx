"use client";

import React from "react";
import { Globe, Layers, FastForward, Sliders, Volume2, PlaySquare } from "lucide-react";

const highlights = [
  {
    icon: Globe,
    value: "42 Ngôn ngữ",
    label: "Neural TTS tự nhiên",
    desc: "Lồng tiếng AI đa ngôn ngữ tự nhiên, giữ nguyên cao độ giọng nói (preservesPitch)",
    color: "from-blue-600 to-indigo-600",
  },
  {
    icon: FastForward,
    value: "~45s / Đoạn",
    label: "Dịch phân đoạn phát ngay",
    desc: "Không cần chờ xử lý hết cả video dài — bấm phát là nghe ngay, tua tới đâu dịch tới đó",
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: Layers,
    value: "30s / 12 Câu",
    label: "Tải trước thông minh",
    desc: "Tự động chuẩn bị sẵn 30 giây hoặc 12 câu thoại tiếp theo để chuyển đoạn mượt mà",
    color: "from-indigo-600 to-purple-600",
  },
  {
    icon: Sliders,
    value: "3-Cue Sync",
    label: "Đồng bộ lookahead",
    desc: "Nhìn trước 3 câu để cân chỉnh tốc độ đọc và tốc độ video êm ái, không chồng tiếng",
    color: "from-blue-600 to-teal-600",
  },
  {
    icon: Volume2,
    value: "4 Chế độ",
    label: "Audio Ducking êm dịu",
    desc: "Tự hạ âm lượng gốc mượt mà theo 4 mức tùy chọn, không gây giật âm lượng nền",
    color: "from-emerald-600 to-teal-600",
  },
];

const youtubeTopics = [
  "Bài giảng Công nghệ & AI",
  "Podcast & Phỏng vấn quốc tế",
  "Hướng dẫn lập trình & DevOps",
  "Khoa học & Nghiên cứu",
  "Phim tài liệu YouTube",
  "Tin tức & Phân tích kinh tế",
  "Review sản phẩm & Keynote",
  "Học ngoại ngữ song ngữ",
];

export default function SocialProofTicker() {
  return (
    <section className="py-12 bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Capabilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative group p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-600">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    {item.label}
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight font-mono">
                  <span
                    className={`text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}
                  >
                    {item.value}
                  </span>
                </div>

                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* YouTube Content Categories Ticker */}
        <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 uppercase tracking-wider shrink-0">
            <PlaySquare className="w-4 h-4 text-red-600" />
            <span>Tối ưu cho mọi nội dung trên YouTube:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
            {youtubeTopics.map((topic, i) => (
              <span
                key={i}
                className="hover:text-blue-600 transition-colors duration-150 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
