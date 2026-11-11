"use client";

import React from "react";
import { Zap, Globe, Shield, Users, Cpu, Award } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: "< 200ms",
    label: "Độ trễ cực thấp",
    desc: "Xử lý âm thanh tức thì trên On-Device Edge AI, nhanh hơn tốc độ nói",
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: Globe,
    value: "50+ Ngôn ngữ",
    label: "Đa ngôn ngữ toàn cầu",
    desc: "Dịch hai chiều mượt mà giữa tiếng Anh, Nhật, Hàn, Trung, Đức, Việt...",
    color: "from-blue-600 to-indigo-600",
  },
  {
    icon: Shield,
    value: "99.2%",
    label: "Chuẩn xác thuật ngữ",
    desc: "AI Terminology Lock khoá nguyên vẹn từ vựng IT, Y khoa & Nghiên cứu",
    color: "from-indigo-600 to-purple-600",
  },
  {
    icon: Users,
    value: "120K+",
    label: "Chuyên gia tin dùng",
    desc: "Kỹ sư phần mềm, bác sĩ nội trú, sinh viên học bổng và nhà nghiên cứu",
    color: "from-blue-600 to-teal-600",
  },
  {
    icon: Cpu,
    value: "< 180MB",
    label: "Tiết kiệm RAM & CPU",
    desc: "Kiến trúc Rust siêu nhẹ, chạy nền êm ái khi stream video 4K 60fps",
    color: "from-emerald-600 to-teal-600",
  },
];

const platforms = [
  "YouTube Main & Shorts",
  "Coursera Tech Lectures",
  "MIT OpenCourseWare",
  "Udemy Masterclasses",
  "Stanford Online",
  "Twitch Dev Streams",
  "Twitter/X Spaces",
  "Google I/O & Apple WWDC",
];

export default function SocialProofTicker() {
  return (
    <section className="py-12 bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {stats.map((item, idx) => {
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

        {/* Ticker marquee text */}
        <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 uppercase tracking-wider shrink-0">
            <Award className="w-4 h-4 text-blue-600" />
            <span>Tương thích mọi nền tảng video:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
            {platforms.map((platform, i) => (
              <span
                key={i}
                className="hover:text-blue-600 transition-colors duration-150 flex items-center gap-1.5 cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
