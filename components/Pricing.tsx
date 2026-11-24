"use client";

import React, { useState } from "react";
import { Check, Sparkles, Zap, ShieldCheck, Clock, Users } from "lucide-react";
import { INTERNAL_DOWNLOAD_PATH, type ReleaseInfo } from "@/lib/release";
import {
  formatCurrency,
  formatMinutesLimit,
  getMonthlyEquivalentPrice,
  getYearlySavingsPercent,
  type PlanDto,
} from "@/lib/plans";

interface PricingProps {
  release: ReleaseInfo;
  plans: PlanDto[];
}

export default function Pricing({ release, plans }: PricingProps) {
  const [isYearly, setIsYearly] = useState(true);
  const downloadTitle = `Tải ${release.filename} cho Windows`;

  const maxSavingsPercent = plans.reduce(
    (max, plan) => Math.max(max, getYearlySavingsPercent(plan)),
    0
  );

  return (
    <section
      id="pricing"
      className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>Bảng Giá Minh Bạch &amp; Đồng Bộ Trực Tiếp</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Chọn gói cước phù hợp với nhu cầu xem YouTube của bạn
          </h2>
          <p className="text-base text-slate-600">
            Đăng ký tài khoản ngay trong TAI Desktop để tự động kích hoạt gói Free hàng
            tháng. Nâng cấp lên Pro hoặc Team trực tiếp trong ứng dụng khi cần thêm thời
            lượng.
          </p>

          {/* Billing Toggle */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <button
              type="button"
              className={`text-sm font-semibold cursor-pointer transition-colors duration-200 ${
                !isYearly ? "text-slate-900" : "text-slate-500"
              }`}
              onClick={() => setIsYearly(false)}
            >
              Thanh toán theo tháng
            </button>

            {/* Toggle Switch */}
            <button
              type="button"
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-200 transition-colors duration-200 ease-in-out focus:outline-none"
              role="switch"
              aria-checked={isYearly}
              aria-label="Chuyển đổi thanh toán theo tháng hoặc theo năm"
            >
              <span
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-blue-600 shadow-md ring-0 transition duration-200 ease-in-out ${
                  isYearly ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>

            <button
              type="button"
              className={`text-sm font-semibold cursor-pointer transition-colors duration-200 flex items-center gap-2 ${
                isYearly ? "text-slate-900" : "text-slate-500"
              }`}
              onClick={() => setIsYearly(true)}
            >
              <span>Thanh toán theo năm</span>
              {maxSavingsPercent > 0 && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Tiết kiệm đến {maxSavingsPercent}%
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Dynamic Pricing Cards Grid */}
        <div
          className={`grid grid-cols-1 gap-8 items-stretch ${
            plans.length === 2
              ? "lg:grid-cols-2 max-w-4xl mx-auto"
              : "lg:grid-cols-3"
          }`}
        >
          {plans.map((plan) => {
            const isFree = plan.priceMonthly <= 0 && plan.priceYearly <= 0;
            const displayMonthlyPrice = getMonthlyEquivalentPrice(plan, isYearly);
            const savingsPercent = getYearlySavingsPercent(plan);
            const isHighlighted = plan.isHighlighted;
            const ctaLabel = isFree
              ? "Tải & dùng miễn phí"
              : "Tải app & nâng cấp";

            return (
              <div
                key={plan.id}
                className={
                  isHighlighted
                    ? "relative rounded-3xl bg-white border-2 border-blue-600 p-8 flex flex-col justify-between shadow-xl shadow-blue-500/10 transform lg:-translate-y-2"
                    : "rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200 shadow-xs"
                }
              >
                {/* Top highlight pill */}
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white font-extrabold text-xs tracking-wide uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{plan.badge || "Phổ Biến Nhất"}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                    {plan.badge && !isHighlighted && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        {plan.badge}
                      </span>
                    )}
                    {isHighlighted && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        Khuyên dùng
                      </span>
                    )}
                  </div>

                  {plan.description && (
                    <p
                      className={`text-xs mb-6 leading-relaxed ${
                        isHighlighted ? "text-slate-600" : "text-slate-500"
                      }`}
                    >
                      {plan.description}
                    </p>
                  )}

                  {/* Price Block */}
                  <div className="mb-5">
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className={`text-4xl font-extrabold font-mono ${
                          isHighlighted ? "text-blue-600" : "text-slate-900"
                        }`}
                      >
                        {formatCurrency(displayMonthlyPrice, plan.currency)}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {isFree ? "/ tháng" : "/ tháng"}
                      </span>
                    </div>

                    {isFree ? (
                      <span className="text-xs text-slate-400 mt-1 block font-medium">
                        Tự kích hoạt khi đăng ký trong app • Không cần thẻ
                      </span>
                    ) : isYearly && plan.priceYearly > 0 ? (
                      <span className="text-xs text-blue-700 mt-1 block font-semibold">
                        Thanh toán {formatCurrency(plan.priceYearly, plan.currency)}/năm
                        {savingsPercent > 0 ? ` (Tiết kiệm ${savingsPercent}%)` : ""}
                      </span>
                    ) : (
                      <span className="text-xs text-slate-500 mt-1 block font-medium">
                        Thanh toán linh hoạt theo chu kỳ tháng
                      </span>
                    )}
                  </div>

                  {/* Quota & Seats Strip */}
                  <div className="grid grid-cols-1 gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-xs">
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        <span>Hạn mức lồng tiếng:</span>
                      </span>
                      <span className="font-mono font-bold text-slate-900">
                        {formatMinutesLimit(plan.monthlyMinutesLimit)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                        <Users className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Số thành viên:</span>
                      </span>
                      <span className="font-mono font-bold text-slate-900">
                        {plan.maxSeats > 1
                          ? `Tối đa ${plan.maxSeats} thành viên`
                          : "1 thành viên"}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 text-xs text-slate-600 border-t border-slate-100 pt-5">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span className={isHighlighted && fIdx === 0 ? "font-bold text-slate-900" : ""}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-2">
                  <a
                    href={INTERNAL_DOWNLOAD_PATH}
                    title={downloadTitle}
                    className={
                      isHighlighted
                        ? "w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-center block shadow-lg shadow-blue-500/25 active:scale-[0.98] cursor-pointer"
                        : "w-full py-3 px-4 rounded-xl font-bold text-xs text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all duration-200 text-center block cursor-pointer"
                    }
                  >
                    {ctaLabel}
                  </a>
                  {!isFree && (
                    <p className="text-[11px] text-center text-slate-400">
                      Gửi yêu cầu nâng cấp trực tiếp trong TAI Desktop
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* SaaS Account note */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            Tài khoản SaaS đồng bộ hạn mức theo thời gian thực ngay trên TAI Desktop cho cá
            nhân và đội nhóm (Tenant).
          </span>
        </div>
      </div>
    </section>
  );
}
