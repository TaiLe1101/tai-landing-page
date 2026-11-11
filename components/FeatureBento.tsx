"use client";

import React, { useState } from "react";
import {
  Layers,
  Languages,
  ShieldAlert,
  Cpu,
  Volume2,
  FileSpreadsheet,
  CheckCircle2,
  Sparkles,
  Move,
  Sliders,
  Eye,
  Key,
  BookOpen,
  ArrowRight,
  Zap,
} from "lucide-react";

export default function FeatureBento() {
  const [activeDictionary, setActiveDictionary] = useState<"it" | "med" | "finance">("it");
  const [floatingOpacity, setFloatingOpacity] = useState(95);

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-100/60 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-100/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kiến Trúc Đột Phá Cho Desktop</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Mọi tính năng được tối ưu cho{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              trải nghiệm xem video đỉnh cao.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Không còn phụ thuộc vào phụ đề tự động ngô nghê của YouTube. TAI kết hợp
            Whisper v3 và LLM cục bộ để mang lại chất lượng dịch thuật chuẩn học thuật.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Realtime Floating Subtitle (Span 2 cols on lg) */}
          <div className="lg:col-span-2 group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  Phụ đề nổi vô cực
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Realtime Floating Subtitle (Cửa sổ phụ đề nổi)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                Cửa sổ trong suốt đè lên bất kỳ trình duyệt (Chrome, Brave, Edge, Safari)
                hoặc app phát video nào. Tự do kéo thả, ghim luôn trên cùng (Always on
                top) và hỗ trợ phím tắt xuyên thấu chuột (Click-through mode).
              </p>
            </div>

            {/* Interactive Preview Element */}
            <div className="mt-6 pt-6 border-t border-slate-100 relative z-10">
              <div
                className="rounded-2xl p-4 sm:p-5 border border-blue-200 backdrop-blur-md shadow-md transition-all duration-200"
                style={{
                  backgroundColor: `rgba(248, 250, 252, ${floatingOpacity / 100})`,
                }}
              >
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <div className="flex items-center gap-2">
                    <Move className="w-3.5 h-3.5 text-blue-600" />
                    <span className="font-semibold text-slate-800">
                      Kéo thả vị trí tuỳ ý trên video
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sliders className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-[11px] font-medium">Độ rõ nét: {floatingOpacity}%</span>
                    <input
                      type="range"
                      min="40"
                      max="100"
                      value={floatingOpacity}
                      onChange={(e) => setFloatingOpacity(Number(e.target.value))}
                      className="w-16 h-1 accent-blue-600 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-xs text-slate-500 font-sans">
                    "Today we demonstrate how low-rank adaptation reduces fine-tuning
                    costs."
                  </p>
                  <p className="text-sm sm:text-base font-bold text-slate-900">
                    "Hôm nay chúng ta sẽ chứng minh phương pháp thích ứng bậc thấp (LoRA)
                    giảm thiểu chi phí tinh chỉnh mô hình như thế nào."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Dual Subtitles */}
          <div className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-indigo-300 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                  <Languages className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">
                  Song ngữ thông minh
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Dual Subtitles (Song ngữ tức thì)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hiển thị song song câu thoại gốc và bản dịch tiếng Việt. Bấm vào bất kỳ từ
                vựng nào để xem ngay phiên âm IPA, nghĩa chuyên ngành và ví dụ minh hoạ.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span>Tra từ vựng 1 chạm</span>
                <span className="text-blue-600 font-mono font-bold">Bấm: "Gradient"</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-blue-200 text-xs shadow-xs">
                <div className="flex items-center justify-between text-blue-800 font-bold">
                  <span>gradient /ˈɡreɪ.di.ənt/</span>
                  <span className="text-[10px] bg-blue-50 px-1.5 py-0.5 rounded text-blue-700 border border-blue-200">
                    Toán & AI
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 mt-1">
                  Độ dốc / Vector đạo hàm riêng chỉ hướng tăng mạnh nhất của hàm số.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: AI Terminology Lock */}
          <div className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  Không dịch sai thuật ngữ
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                AI Terminology Lock (Khoá Thuật Ngữ)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Giải quyết triệt để vấn đề AI dịch ngô nghê. Giữ nguyên 100% thuật ngữ IT,
                Y khoa, Tài chính hoặc tên hàm API mà bạn cài đặt.
              </p>
            </div>

            {/* Dictionary selector pill simulation */}
            <div className="mt-6 space-y-2.5">
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200">
                <button
                  onClick={() => setActiveDictionary("it")}
                  className={`flex-1 py-1 text-[11px] font-semibold rounded cursor-pointer transition-all ${
                    activeDictionary === "it"
                      ? "bg-white text-blue-700 shadow-xs border border-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  IT & DevOps
                </button>
                <button
                  onClick={() => setActiveDictionary("med")}
                  className={`flex-1 py-1 text-[11px] font-semibold rounded cursor-pointer transition-all ${
                    activeDictionary === "med"
                      ? "bg-white text-blue-700 shadow-xs border border-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Y khoa & Dược
                </button>
                <button
                  onClick={() => setActiveDictionary("finance")}
                  className={`flex-1 py-1 text-[11px] font-semibold rounded cursor-pointer transition-all ${
                    activeDictionary === "finance"
                      ? "bg-white text-blue-700 shadow-xs border border-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Kinh tế & Đầu tư
                </button>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono space-y-1">
                {activeDictionary === "it" && (
                  <>
                    <div className="text-emerald-700 font-medium">
                      ✓ "Kubernetes Cluster" ➔ Khóa nguyên dạng
                    </div>
                    <div className="text-emerald-700 font-medium">
                      ✓ "Race Condition" ➔ Trạng thái tranh chấp
                    </div>
                  </>
                )}
                {activeDictionary === "med" && (
                  <>
                    <div className="text-emerald-700 font-medium">
                      ✓ "Myocardial Infarction" ➔ Nhồi máu cơ tim
                    </div>
                    <div className="text-emerald-700 font-medium">
                      ✓ "mRNA Vaccine" ➔ Khóa nguyên dạng
                    </div>
                  </>
                )}
                {activeDictionary === "finance" && (
                  <>
                    <div className="text-emerald-700 font-medium">
                      ✓ "Yield Curve Inversion" ➔ Đảo ngược đường cong lợi suất
                    </div>
                    <div className="text-emerald-700 font-medium">
                      ✓ "EBITDA Margin" ➔ Khóa nguyên dạng
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Card 4: Lightweight Desktop Client */}
          <div className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-300 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Rust Core Engine
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Lightweight Client (Siêu tiết kiệm RAM)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Được viết bằng Rust và C++ với nhân xử lý WebGPU tối tân. Tiêu thụ dưới
                180MB RAM, không làm quạt máy tính hú to hay tụt pin khi làm việc liên tục.
              </p>
            </div>

            {/* RAM comparison bar */}
            <div className="mt-6 space-y-2">
              <div>
                <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                  <span className="text-emerald-700 font-bold font-mono">
                    TAI Desktop Client
                  </span>
                  <span className="font-mono text-emerald-700 font-bold">142 MB</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full w-[16%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                  <span>Extension trình duyệt thông thường</span>
                  <span className="font-mono font-medium">820 MB</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
                  <div className="bg-slate-300 h-full w-[65%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Neural Dubbing */}
          <div className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-purple-300 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
                  <Volume2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
                  Thuyết minh AI
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Real-time Audio Dubbing
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Vừa nghe vừa làm việc mà không cần dán mắt vào màn hình. Giọng đọc AI
                truyền cảm bằng tiếng Việt tự động hạ âm lượng video gốc khi có giọng nói.
              </p>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-ping"></span>
                <span className="text-xs font-semibold text-slate-800">
                  Giọng Nam Trầm Ấm (Studio)
                </span>
              </div>
              <span className="text-[11px] text-purple-700 font-mono font-bold">
                Ducking -12dB
              </span>
            </div>
          </div>

          {/* Card 6: 1-Click Sync to Anki & Notion */}
          <div className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  Tài liệu & Học tập
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Đồng bộ Notion & Anki 1 Cú Click
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sau khi xem xong bài giảng, xuất toàn bộ transcript song ngữ kèm mốc thời
                gian sang Notion hoặc tạo bộ thẻ Anki để ôn từ mới mỗi ngày.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <div className="flex-1 py-2 px-3 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 shadow-xs">
                <span>📓 Notion Export</span>
              </div>
              <div className="flex-1 py-2 px-3 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 shadow-xs">
                <span>🎴 Anki Flashcards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
