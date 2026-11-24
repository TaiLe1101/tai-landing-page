"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/lib/faq-data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Giải Đáp Thắc Mắc</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Câu hỏi thường gặp
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Mọi điều bạn cần biết trước khi tải và trải nghiệm Translation AI Desktop.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-blue-400 shadow-md shadow-blue-500/5"
                    : "bg-white border-slate-200 hover:border-slate-300 shadow-xs"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg bg-slate-100 text-slate-600 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 bg-blue-50 text-blue-600" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
