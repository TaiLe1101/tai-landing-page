"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "TAI hoạt động trên các hệ điều hành nào?",
    answer:
      "TAI hỗ trợ đầy đủ các hệ điều hành máy tính phổ biến hiện nay: Windows 10 & Windows 11 (x64 / ARM64), macOS (tối ưu hóa cho cả chip Apple Silicon M1/M2/M3/M4 và Intel x86), cũng như Linux (định dạng AppImage / Flatpak). Ứng dụng tự động cập nhật phiên bản mới khi có cải tiến.",
  },
  {
    question: "TAI có làm chậm máy hay gây giật lag khi xem video 4K 60fps không?",
    answer:
      "Tuyệt đối không. Động cơ lõi của TAI được viết bằng ngôn ngữ Rust và C++ kết hợp tăng tốc phần cứng WebGPU. Bộ nhớ RAM tiêu thụ trung bình chỉ từ 120MB đến 180MB, mức chiếm dụng CPU dưới 3%, đảm bảo máy tính của bạn vận hành êm ái, mát mẻ ngay cả khi vừa xem stream 4K vừa chơi game.",
  },
  {
    question: "Cơ chế AI Terminology Lock hoạt động ra sao? Tôi có thể tự thêm từ điển riêng không?",
    answer:
      "AI Terminology Lock sử dụng thuật ngữ vector kết hợp regex ràng buộc chặt chẽ với mô hình LLM. Bạn có thể chọn sẵn các bộ từ điển có sẵn (Lập trình IT, Trí tuệ nhân tạo, Y học - Dược phẩm, Kinh tế - Chứng khoán) hoặc tự nhập danh sách từ khóa riêng (ví dụ: 'Kubernetes Cluster' -> không dịch, 'Backpropagation' -> Lan truyền ngược) một cách không giới hạn trên gói Pro.",
  },
  {
    question: "Tôi có cần cài đặt thêm Extension vào Chrome hoặc Edge không?",
    answer:
      "Không cần thiết. TAI là ứng dụng Desktop độc lập (Native Desktop App). TAI thu nhận tín hiệu âm thanh hệ thống (System Audio Hook) và vẽ lớp phụ đề nổi (Floating Overlay) trong suốt đè lên bất kỳ trình duyệt hoặc ứng dụng phát video nào mà không can thiệp vào mã nguồn web hay vi phạm chính sách của trình duyệt.",
  },
  {
    question: "TAI có hỗ trợ dịch thuật khi không có kết nối Internet (Offline) không?",
    answer:
      "Có! TAI cung cấp tùy chọn tải mô hình Whisper Edge nhỏ gọn (~480MB) để xử lý hoàn toàn Offline trên thiết bị của bạn. Khi có mạng Internet, TAI tự động kết nối với mạng lưới Cloud Edge để tăng tốc độ phản hồi xuống dưới 150ms và kích hoạt tính năng lồng tiếng Neural Audio Dubbing chất lượng cao.",
  },
  {
    question: "Chính sách dùng thử và hoàn tiền hoạt động như thế nào?",
    answer:
      "Bạn có thể bắt đầu với gói Free Starter trọn đời mà không cần nhập thẻ tín dụng. Khi đăng ký gói Pro Creator, bạn được dùng thử miễn phí 7 ngày với đầy đủ quyền năng. Ngoài ra, TAI cam kết hoàn tiền 100% không cần lý do trong vòng 14 ngày nếu sản phẩm không đáp ứng đúng kỳ vọng của bạn.",
  },
  {
    question: "Làm thế nào để xuất phụ đề sang Notion và tạo thẻ ghi nhớ Anki?",
    answer:
      "Tại thanh công cụ của bảng transcript, bạn chỉ cần bấm nút 'Xuất Notion' để sao chép toàn bộ văn bản song ngữ đã định dạng Markdown kèm mốc thời gian. Hoặc bấm 'Tạo thẻ Anki' để xuất file .apkg tự động phân loại từ mới, câu ví dụ ngữ cảnh và phiên âm phát âm.",
  },
];

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
