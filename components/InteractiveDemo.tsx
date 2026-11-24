"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Volume2,
  VolumeX,
  FileCode,
  Mic,
  GraduationCap,
  Sliders,
} from "lucide-react";

interface Scenario {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  title: string;
  originalEn: string;
  translatedVi: string;
  syncRate: string;
  chunkWindow: string;
}

const scenarios: Scenario[] = [
  {
    id: "tech",
    name: "Công nghệ & Lập trình",
    category: "YouTube Tech Talk",
    icon: FileCode,
    title: "System Design & Distributed Architecture Walkthrough",
    originalEn:
      "When traffic spikes suddenly, partitioning the stream into short segments lets workers prefetch ahead and keep latency predictable.",
    translatedVi:
      "Khi lưu lượng tăng đột ngột, việc chia luồng thành các phân đoạn ngắn giúp hệ thống tải trước mượt mà và giữ trải nghiệm ổn định.",
    syncRate: "1.06x (preservesPitch)",
    chunkWindow: "Đoạn 01:30 – 02:15 (~45s)",
  },
  {
    id: "podcast",
    name: "Podcast & Phỏng vấn",
    category: "YouTube Interview",
    icon: Mic,
    title: "Founder Conversation: Building Products for Global Learners",
    originalEn:
      "The best learning tools disappear into the background so you can stay focused on the speaker's story without pausing every ten seconds.",
    translatedVi:
      "Công cụ học tập tốt nhất sẽ vận hành âm thầm phía sau để bạn tập trung trọn vẹn vào câu chuyện của diễn giả mà không phải dừng video liên tục.",
    syncRate: "1.02x (preservesPitch)",
    chunkWindow: "Đoạn 12:00 – 12:45 (~45s)",
  },
  {
    id: "science",
    name: "Bài giảng & Khoa học",
    category: "YouTube Lecture",
    icon: GraduationCap,
    title: "Introduction to Modern Neural Speech Synthesis",
    originalEn:
      "Modern neural text-to-speech models capture natural intonation and pacing, making long-form technical lectures comfortable to listen to.",
    translatedVi:
      "Các mô hình chuyển văn bản thành giọng nói Neural hiện đại tái tạo ngữ điệu và nhịp ngắt tự nhiên, giúp bạn nghe bài giảng dài rất thoải mái.",
    syncRate: "1.00x (preservesPitch)",
    chunkWindow: "Đoạn 05:15 – 06:00 (~45s)",
  },
];

const duckingPresets = [
  { id: "light", name: "Nhẹ (45%)", badge: "Giữ âm nền rõ" },
  { id: "balanced", name: "Cân bằng (22%)", badge: "Mặc định mượt mà" },
  { id: "focus", name: "Ưu tiên AI (10%)", badge: "Nổi rõ giọng đọc" },
  { id: "mute", name: "Tắt gốc (0%)", badge: "Chỉ nghe lồng tiếng" },
] as const;

export default function InteractiveDemo() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(scenarios[0]);
  const [duckingIndex, setDuckingIndex] = useState(1);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const currentDucking = duckingPresets[duckingIndex];

  const handlePlayVoice = () => {
    if (isPlayingAudio) {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlayingAudio(false);
      return;
    }

    const textToSpeak = selectedScenario.translatedVi;

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = "vi-VN";
      utterance.rate = 1.04;

      utterance.onstart = () => setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      window.speechSynthesis.speak(utterance);
    } else {
      setIsPlayingAudio(true);
      setTimeout(() => setIsPlayingAudio(false), 4000);
    }
  };

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [selectedScenario]);

  return (
    <section id="demo" className="py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mô Phỏng Tương Tác</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trải nghiệm luồng{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              lồng tiếng AI &amp; đồng bộ 3-Cue Lookahead
            </span>
          </h2>
          <p className="text-base text-slate-600">
            Chọn kịch bản YouTube và thử chuyển đổi 4 chế độ Audio Ducking hoặc bấm nghe thử
            bản dịch tiếng Việt.
          </p>
        </div>

        {/* Demo Controller Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 shadow-xl p-6 sm:p-8">
          {/* Scenario Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pb-6 border-b border-slate-200">
            {scenarios.map((sc) => {
              const Icon = sc.icon;
              const isSelected = sc.id === selectedScenario.id;
              return (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => {
                    if (isPlayingAudio && typeof window !== "undefined") {
                      window.speechSynthesis.cancel();
                      setIsPlayingAudio(false);
                    }
                    setSelectedScenario(sc);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{sc.name}</span>
                </button>
              );
            })}
          </div>

          {/* Video Title & Sync Meta */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
            <div>
              <span className="text-[10px] font-mono text-blue-600 uppercase tracking-wider font-bold">
                {selectedScenario.category} • {selectedScenario.chunkWindow}
              </span>
              <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                {selectedScenario.title}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-bold">
                Nhịp đọc: {selectedScenario.syncRate}
              </span>
            </div>
          </div>

          {/* 4-Mode Audio Ducking Selector */}
          <div className="mt-4 bg-white p-3.5 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <Sliders className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Chế độ Audio Ducking:</span>
              <span className="text-[11px] font-normal text-slate-500">
                ({currentDucking.badge})
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {duckingPresets.map((preset, idx) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setDuckingIndex(idx)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                    duckingIndex === idx
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>

          {/* Subtitle Comparison Box */}
          <div className="mt-6 space-y-4">
            {/* Original English */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Câu thoại gốc từ YouTube (Original Cue):
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Prefetch 30s / 12 cues</span>
              </div>
              <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                &quot;{selectedScenario.originalEn}&quot;
              </p>
            </div>

            {/* Translation & Dubbing Output */}
            <div className="p-5 rounded-2xl bg-white border-2 border-blue-500 shadow-md shadow-blue-500/5 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    Bản dịch song ngữ &amp; Lồng tiếng Neural TTS (Tiếng Việt):
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handlePlayVoice}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isPlayingAudio
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100"
                  }`}
                  title="Nghe thử câu dịch tiếng Việt qua trình duyệt"
                >
                  {isPlayingAudio ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5" />
                      <span>Dừng đọc thử</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Nghe thử câu dịch</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-semibold">
                &quot;{selectedScenario.translatedVi}&quot;
              </p>

              {/* Animated Audio Equalizer Wave if playing */}
              {isPlayingAudio && (
                <div className="mt-3 py-2 px-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span>
                      Đang phát mẫu giọng nói (Ducking: {currentDucking.name})...
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[12, 22, 16, 28, 18, 24, 14, 26, 12].map((h, i) => (
                      <span
                        key={i}
                        className="w-1 bg-emerald-600 rounded-full animate-pulse"
                        style={{
                          height: `${h}px`,
                          animationDelay: `${i * 90}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-[11px] text-slate-500 font-mono">
                <span className="px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-blue-700 font-semibold">
                  3-Cue Lookahead Sync
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
                  Ducking: {currentDucking.name}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold">
                  preservesPitch: ON
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
