"use client";

import React from "react";
import { GraduationCap, Code2, Users, CheckCircle2, Sparkles } from "lucide-react";

const useCases = [
  {
    id: 1,
    title: "Lập trình viên & Kỹ sư công nghệ",
    tag: "Tech Talks & Tutorials",
    icon: Code2,
    summary:
      "Theo dõi các bài giảng kiến trúc hệ thống, hội thảo công nghệ và video hướng dẫn bằng tiếng Anh, Nhật, Hàn ngay trên YouTube mà không bỏ lỡ nội dung quan trọng.",
    highlights: [
      "Tua nhanh đến đúng phần code nhờ bảng Transcript bấm để tua",
      "Phụ đề song ngữ nổi kéo thả để không che màn hình IDE trong video",
    ],
    platform: "Windows 10 / 11",
  },
  {
    id: 2,
    title: "Người học ngoại ngữ & Nghiên cứu sinh",
    tag: "Học tập song ngữ",
    icon: GraduationCap,
    summary:
      "Vừa nghe thuyết minh AI tự nhiên với Audio Ducking êm dịu, vừa đối chiếu trực tiếp câu gốc và bản dịch tiếng Việt ngay trên khung phát video.",
    highlights: [
      "42 ngôn ngữ Neural TTS giữ nguyên cao độ giọng đọc (preservesPitch)",
      "Dịch phân đoạn ~45s giúp xem bài giảng dài 1–2 giờ ngay lập tức",
    ],
    platform: "Gói Free & Pro",
  },
  {
    id: 3,
    title: "Đội nhóm nghiên cứu & Đào tạo nội bộ",
    tag: "Không gian Team (Tenant)",
    icon: Users,
    summary:
      "Dùng chung quỹ phút lồng tiếng theo tháng trong một không gian Tenant thống nhất, dễ dàng phân quyền thành viên và theo dõi hạn mức theo thời gian thực.",
    highlights: [
      "Hỗ trợ nhiều thành viên trong cùng tổ chức (Owner / Admin / Member)",
      "Quản lý gói cước và yêu cầu nâng cấp trực tiếp trong TAI Desktop",
    ],
    platform: "Gói Team Tenant",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ứng Dụng Thực Tế</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Được thiết kế cho mọi nhu cầu xem YouTube đa ngôn ngữ
          </h2>
          <p className="text-base text-slate-600">
            Từ tự học công nghệ, nghe podcast quốc tế đến làm việc nhóm trên cùng không gian
            Tenant — mọi trải nghiệm đều gọn gàng trong một ứng dụng Windows.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {useCases.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-3xl p-6 sm:p-8 bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {item.summary}
                  </p>

                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {item.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Sẵn sàng trên TAI Desktop</span>
                  <span className="font-semibold text-blue-700">{item.platform}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
