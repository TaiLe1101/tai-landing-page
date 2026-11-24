"use client";

import React, { useState } from "react";
import {
  Layers,
  Globe,
  FastForward,
  Sliders,
  Volume2,
  Users,
  Sparkles,
  Move,
} from "lucide-react";

const duckingModes = [
  {
    id: "light",
    label: "Nhẹ",
    originalVol: "45%",
    desc: "Giữ rõ âm thanh nền & nhạc video, giọng AI đọc nổi nhẹ phía trên.",
  },
  {
    id: "balanced",
    label: "Cân bằng",
    originalVol: "22%",
    desc: "Mức tối ưu mặc định cho phỏng vấn, bài giảng và vlog YouTube.",
  },
  {
    id: "focus",
    label: "Ưu tiên AI",
    originalVol: "10%",
    desc: "Tập trung rõ nét vào giọng thuyết minh tiếng Việt, giảm tối đa tạp âm gốc.",
  },
  {
    id: "mute",
    label: "Tắt tiếng gốc",
    originalVol: "0%",
    desc: "Chỉ nghe giọng đọc lồng tiếng AI hoàn toàn sạch và dễ theo dõi.",
  },
] as const;

export default function FeatureBento() {
  const [floatingOpacity, setFloatingOpacity] = useState(92);
  const [duckingIdx, setDuckingIdx] = useState(1);
  const currentDucking = duckingModes[duckingIdx];

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
            <span>Tính Năng Thực Tế Trên TAI Desktop</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Mọi công nghệ được xây dựng cho{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              trải nghiệm xem YouTube mượt mà.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Trình phát YouTube tích hợp ngay trên Windows 10/11 — kết hợp dịch phân đoạn,
            đồng bộ 3-cue lookahead và 42 ngôn ngữ Neural TTS mà không cần cài Extension.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Floating Bilingual Subtitles (Span 2 cols on lg) */}
          <div className="lg:col-span-2 group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  Phụ đề nổi &amp; Transcript
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Phụ đề song ngữ nổi trực tiếp trên video YouTube
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                Hiển thị đồng thời câu thoại gốc và bản dịch ngay trên khung phát YouTube.
                Kéo thả vị trí tự do, tự co kích thước chữ vừa khung nhìn và đi kèm bảng
                Transcript bên cạnh để bấm vào bất kỳ câu nào và tua tức thì.
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
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 mb-2">
                  <div className="flex items-center gap-2">
                    <Move className="w-3.5 h-3.5 text-blue-600" />
                    <span className="font-semibold text-slate-800">
                      Kéo thả vị trí &amp; tự co cỡ chữ trên khung video
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sliders className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-[11px] font-medium">
                      Độ mờ nền: {floatingOpacity}%
                    </span>
                    <input
                      type="range"
                      min="40"
                      max="100"
                      value={floatingOpacity}
                      onChange={(e) => setFloatingOpacity(Number(e.target.value))}
                      aria-label="Điều chỉnh độ mờ nền phụ đề nổi"
                      className="w-16 h-1 accent-blue-600 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-xs text-slate-500 font-sans">
                    &quot;Notice how the streaming pipeline prefetches upcoming cues so
                    playback stays seamless.&quot;
                  </p>
                  <p className="text-sm sm:text-base font-bold text-slate-900">
                    &quot;Hãy xem cách luồng xử lý tải trước các câu thoại kế tiếp để video
                    phát mượt mà không bị ngắt quãng.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 42 Languages & Neural TTS */}
          <div className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-indigo-300 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">
                  42 Ngôn ngữ
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Giọng đọc Neural TTS tự nhiên
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hỗ trợ 42 ngôn ngữ với các giọng đọc Neural TTS truyền cảm. Tự động bảo
                toàn cao độ giọng nói (<code className="font-mono text-xs">preservesPitch</code>)
                khi tăng giảm nhịp độ để giọng đọc không bị méo tiếng.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span>Ngôn ngữ phổ biến</span>
                <span className="text-indigo-600 font-mono font-bold">preservesPitch: ON</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Tiếng Việt", "English", "日本語", "한국어", "中文", "Français", "Deutsch", "+35"].map(
                  (lang) => (
                    <span
                      key={lang}
                      className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-medium text-slate-700"
                    >
                      {lang}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Card 3: Chunked ~45s Streaming + Prefetch */}
          <div className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <FastForward className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  Phát ngay &amp; Tua tức thì
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Dịch phân đoạn ~45s + Tải trước
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Không cần chờ tải hay dịch toàn bộ video dài nhiều tiếng. TAI chia đoạn ~45
                giây và tải trước 30 giây / 12 câu thoại tiếp theo — tua đến bất kỳ đâu là
                dịch ngay đoạn đó.
              </p>
            </div>

            <div className="mt-6 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono space-y-2">
              <div className="flex justify-between text-slate-700">
                <span>Đoạn đang phát</span>
                <span className="text-blue-700 font-bold">00:00 – 00:45</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden flex">
                <div className="w-[45%] bg-blue-600 h-full" />
                <div className="w-[30%] bg-cyan-400/80 h-full" />
              </div>
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>● Đã đồng bộ</span>
                <span className="text-cyan-700 font-semibold">Prefetch 30s / 12 cues</span>
              </div>
            </div>
          </div>

          {/* Card 4: 3-Cue Lookahead Sync */}
          <div className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-300 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <Sliders className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  3-Cue Lookahead
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Đồng bộ âm thanh – video mượt mà
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Nhìn trước 3 câu thoại kế tiếp để chủ động điều chỉnh tốc độ giọng đọc AI
                và tốc độ phát video nhịp nhàng, tránh chồng tiếng hoặc lệch khung hình khi
                người nói tăng tốc.
              </p>
            </div>

            <div className="mt-6 space-y-2 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between">
                <span className="text-emerald-800 font-semibold">Cue N+1 / N+2 / N+3</span>
                <span className="text-emerald-700 font-bold">Không chồng tiếng</span>
              </div>
              <div className="flex justify-between text-[11px] text-slate-500 px-1">
                <span>Tự điều chỉnh nhịp đọc</span>
                <span className="font-semibold text-slate-700">Giữ nguyên cao độ</span>
              </div>
            </div>
          </div>

          {/* Card 5: 4-Mode Audio Ducking */}
          <div className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-purple-300 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
                  <Volume2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
                  Ducking 4 chế độ
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Audio Ducking không giật âm lượng
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tự động hạ nhẹ âm thanh gốc của YouTube khi giọng đọc AI cất lên và nâng lại
                êm ái theo 4 chế độ linh hoạt — nghe lâu vẫn dễ chịu.
              </p>
            </div>

            <div className="mt-6 space-y-2.5">
              <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200">
                {duckingModes.map((mode, idx) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setDuckingIdx(idx)}
                    className={`py-1 text-[10px] font-semibold rounded cursor-pointer transition-all ${
                      duckingIdx === idx
                        ? "bg-white text-purple-700 shadow-xs border border-slate-200"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
                <div className="flex justify-between font-mono font-bold text-purple-700">
                  <span>Âm lượng gốc khi đọc:</span>
                  <span>{currentDucking.originalVol}</span>
                </div>
                <p>{currentDucking.desc}</p>
              </div>
            </div>
          </div>

          {/* Card 6: SaaS Account & Tenant */}
          <div className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  Cá nhân &amp; Đội nhóm
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Tài khoản SaaS &amp; Hạn mức đồng bộ
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Đăng ký tài khoản ngay trong ứng dụng để nhận gói Free hàng tháng. Theo dõi
                số phút đã dùng theo thời gian thực và hỗ trợ không gian dùng chung cho đội
                nhóm (Tenant).
              </p>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-slate-800">Hạn mức tháng hiện tại</span>
                <span className="font-mono font-bold text-blue-700">Đồng bộ realtime</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                <div className="w-[38%] h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
              </div>
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>Gói Free tự kích hoạt</span>
                <span>Nâng cấp ngay trong app</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
