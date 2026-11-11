"use client";

import React, { useState } from "react";
import { Check, Sparkles, Zap, ShieldCheck } from "lucide-react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>Bảng Giá Minh Bạch & Tiết Kiệm</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Chọn gói cước phù hợp với bạn
          </h2>
          <p className="text-base text-slate-600">
            Dùng thử miễn phí trọn đời gói Starter. Nâng cấp bất cứ lúc nào khi cần dịch
            chuyên sâu hoặc lồng tiếng AI.
          </p>

          {/* Billing Toggle */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <span
              className={`text-sm font-semibold cursor-pointer transition-colors duration-200 ${
                !isYearly ? "text-slate-900" : "text-slate-500"
              }`}
              onClick={() => setIsYearly(false)}
            >
              Thanh toán theo tháng
            </span>

            {/* Toggle Switch */}
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-200 transition-colors duration-200 ease-in-out focus:outline-none"
              role="switch"
              aria-checked={isYearly}
            >
              <span
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-blue-600 shadow-md ring-0 transition duration-200 ease-in-out ${
                  isYearly ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>

            <span
              className={`text-sm font-semibold cursor-pointer transition-colors duration-200 flex items-center gap-2 ${
                isYearly ? "text-slate-900" : "text-slate-500"
              }`}
              onClick={() => setIsYearly(true)}
            >
              <span>Thanh toán theo năm</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                Tiết kiệm 30%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Free Starter */}
          <div className="rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200 shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">Free Starter</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  Cơ bản
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-6">
                Lý tưởng cho người mới bắt đầu học ngoại ngữ và xem video ngắn.
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900 font-mono">0đ</span>
                  <span className="text-xs text-slate-500">/ trọn đời</span>
                </div>
                <span className="text-xs text-slate-400 mt-1 block font-medium">
                  Không cần nhập thẻ tín dụng
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-xs text-slate-600 border-t border-slate-100 pt-6">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>15 giờ dịch video/tháng</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Độ trễ tiêu chuẩn &lt; 350ms</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>5 ngôn ngữ phổ biến (Anh, Nhật, Hàn, Trung, Việt)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Phụ đề nổi cơ bản (Floating Subtitles)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Khóa tối đa 10 thuật ngữ chuyên ngành</span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-400">
                  <span className="w-4 h-4 text-center shrink-0">—</span>
                  <span>Chưa hỗ trợ Neural Audio Dubbing</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <a
                href="#download"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all duration-200 text-center block cursor-pointer"
              >
                Tải bản Free Starter
              </a>
            </div>
          </div>

          {/* Card 2: Pro Creator (Highlighted) */}
          <div className="relative rounded-3xl bg-white border-2 border-blue-600 p-8 flex flex-col justify-between shadow-xl shadow-blue-500/10 transform lg:-translate-y-2">
            {/* Top pill badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white font-extrabold text-xs tracking-wide uppercase shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Phổ Biến Nhất</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">Pro Creator</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Tất cả tính năng
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-6">
                Dành cho lập trình viên, nghiên cứu sinh, người học ngoại ngữ chuyên sâu.
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-blue-600 font-mono">
                    {isYearly ? "139.000đ" : "199.000đ"}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ tháng</span>
                </div>
                <span className="text-xs text-blue-700 mt-1 block font-semibold">
                  {isYearly
                    ? "Thanh toán 1.668.000đ/năm (Tiết kiệm 720.000đ)"
                    : "Hủy bất cứ lúc nào"}
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-xs text-slate-700 border-t border-slate-100 pt-6">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="font-bold text-slate-900">
                    Dịch video & Livestream KHÔNG GIỚI HẠN
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="font-bold text-blue-700">
                    Độ trễ siêu tốc cực hạn &lt; 180ms
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Hỗ trợ 50+ ngôn ngữ toàn cầu song ngữ</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900">
                    AI Terminology Lock KHÔNG GIỚI HẠN (IT/Y khoa/Kinh tế)
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-900 font-medium">
                    Real-time Audio Dubbing giọng đọc AI Studio tự nhiên
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Xuất 1 chạm sang Notion & thẻ từ Anki</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Hỗ trợ kỹ thuật ưu tiên 24/7 & Cập nhật trước bản Beta</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <a
                href="#download"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-center block shadow-lg shadow-blue-500/25 active:scale-[0.98] cursor-pointer"
              >
                Bắt đầu 7 ngày dùng thử Pro
              </a>
            </div>
          </div>

          {/* Card 3: Enterprise */}
          <div className="rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200 shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">Enterprise / Team</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  Doanh nghiệp
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-6">
                Dành cho viện nghiên cứu, công ty EdTech, đội ngũ bản địa hóa nội dung.
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900 font-mono">
                    {isYearly ? "489.000đ" : "699.000đ"}
                  </span>
                  <span className="text-xs text-slate-500">/ tháng</span>
                </div>
                <span className="text-xs text-slate-500 mt-1 block font-medium">
                  Bao gồm sẵn 5 seats cho team
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-xs text-slate-600 border-t border-slate-100 pt-6">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Tất cả tính năng của gói Pro Creator</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900">
                    Custom Domain Glossary (Từ điển độc quyền nội bộ)
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Tùy chọn On-Premise / Local LLM riêng tư</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Webhook API tự động hóa luồng transcript</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>SLA cam kết 99.9% & Hỗ trợ kỹ thuật riêng</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Hợp đồng dịch vụ & Xuất hóa đơn VAT</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <a
                href="#download"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all duration-200 text-center block cursor-pointer"
              >
                Liên hệ tư vấn Doanh nghiệp
              </a>
            </div>
          </div>
        </div>

        {/* Guarantee footer */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Cam kết hoàn tiền 100% trong 14 ngày nếu bạn không hoàn toàn hài lòng.</span>
        </div>
      </div>
    </section>
  );
}
