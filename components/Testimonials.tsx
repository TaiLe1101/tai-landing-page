"use client";

import React from "react";
import { Star, ShieldCheck, CheckCircle2 } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  avatar: string;
  rating: number;
  content: string;
  tag: string;
  verifiedOS: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nguyễn Hoàng Nam",
    role: "AI Research Engineer",
    organization: "Deep Learning Lab",
    avatar: "HN",
    rating: 5,
    content:
      "Xem các bài giảng chuyên sâu của Andrej Karpathy và keynote NeurIPS trước đây rất mệt mỏi vì phụ đề tự động của YouTube dịch sai bét thuật ngữ. Với TAI Desktop, tính năng AI Terminology Lock giữ nguyên 100% các từ như Attention Mechanism, LoRA, Tokenizer. Cực kỳ đáng tiền!",
    tag: "Nghiên cứu Kỹ thuật & AI",
    verifiedOS: "macOS M3 Max",
  },
  {
    id: 2,
    name: "Trần Minh Thư",
    role: "IELTS 8.5 & Du học sinh",
    organization: "University of Melbourne",
    avatar: "MT",
    rating: 5,
    content:
      "Chế độ Dual Subtitles song ngữ kết hợp tra từ điển 1 chạm và xuất thẳng sang thẻ Anki đã thay đổi hoàn toàn cách mình luyện nghe tiếng Anh học thuật. Mình tiết kiệm được ít nhất 2 tiếng ghi chép thủ công mỗi ngày.",
    tag: "Học ngoại ngữ & Du học",
    verifiedOS: "Windows 11 x64",
  },
  {
    id: 3,
    name: "Lê Quốc Bảo (David)",
    role: "Caster & Content Creator",
    organization: "Esports Broadcast",
    avatar: "QB",
    rating: 5,
    content:
      "Độ trễ dưới 200ms của TAI là điều kỳ diệu đối với người xem stream trực tiếp. Lời bình luận viên quốc tế vừa dứt thì phụ đề tiếng Việt đã hiện lên, kèm theo thuyết minh AI giọng tự nhiên không hề bị giật khung hình 60fps.",
    tag: "Livestream & Giải trí",
    verifiedOS: "Windows 11 Pro",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Được Tin Dùng Bởi 120,000+ Người Dùng</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trải nghiệm thực tế từ các chuyên gia & người học
          </h2>
          <p className="text-base text-slate-600">
            Khám phá lý do tại sao TAI trở thành công cụ không thể thiếu của các kỹ sư AI,
            giảng viên và sinh viên quốc tế.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-6 sm:p-8 bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Header of review: Stars + Category Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.content}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-xs shadow-xs">
                    {item.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {item.role} • {item.organization}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-slate-400 hidden sm:inline-block">
                  {item.verifiedOS}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
