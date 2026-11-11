"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Lock,
  Unlock,
  Play,
  Pause,
  Volume2,
  VolumeX,
  FileCode,
  Stethoscope,
  Gamepad2,
  CheckCircle2,
} from "lucide-react";

interface Scenario {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  title: string;
  originalEn: string;
  withoutLockVi: string;
  withLockVi: string;
  lockedTerms: string[];
  latency: string;
}

const scenarios: Scenario[] = [
  {
    id: "tech",
    name: "Công nghệ & AI",
    category: "Computer Science",
    icon: FileCode,
    title: "Andrej Karpathy: Building LLMs from Scratch",
    originalEn:
      "When we implement the Multi-Head Attention layer, make sure to mask out future tokens so the auto-regressive property isn't violated during backpropagation.",
    withoutLockVi:
      "Khi chúng ta thực hiện lớp Chú Ý Nhiều Đầu, hãy đảm bảo che đi các mã thông báo tương lai để thuộc tính tự hồi quy không bị vi phạm trong quá trình lan truyền ngược.",
    withLockVi:
      "Khi chúng ta triển khai lớp Multi-Head Attention, hãy đảm bảo mask các token tương lai để không vi phạm tính chất auto-regressive trong quá trình backpropagation.",
    lockedTerms: ["Multi-Head Attention", "token", "auto-regressive", "backpropagation"],
    latency: "135ms",
  },
  {
    id: "med",
    name: "Y khoa & Sinh học",
    category: "Neuroscience",
    icon: Stethoscope,
    title: "Stanford Medicine: CRISPR Gene Editing & Clinical Trials",
    originalEn:
      "The viral vector delivers the Cas9 endonuclease and guide RNA directly into hematopoietic stem cells to correct the sickle cell mutation in vivo.",
    withoutLockVi:
      "Véc-tơ vi-rút đưa chất kết thúc cas9 và hướng dẫn axit ribonucleic trực tiếp vào tế bào gốc tạo máu để sửa đột biến tế bào hình liềm trong sự sống.",
    withLockVi:
      "Vector virus đưa enzyme cắt Cas9 endonuclease và guide RNA trực tiếp vào tế bào gốc tạo máu để sửa chữa đột biến tế bào hình liềm (sickle cell) in vivo.",
    lockedTerms: ["Cas9 endonuclease", "guide RNA", "hematopoietic stem cells", "in vivo"],
    latency: "152ms",
  },
  {
    id: "stream",
    name: "Livestream Gaming",
    category: "Esports & IRL",
    icon: Gamepad2,
    title: "Shroud: Tactical FPS Clutch & Map Rotations",
    originalEn:
      "They are stacking site B with double smokes! Let's rotate through mid, bait their ultimate ability, and save the economy for the next buy round.",
    withoutLockVi:
      "Họ đang xếp chồng địa điểm B với hai làn khói! Hãy xoay qua giữa, mồi khả năng tối thượng của họ, và tiết kiệm nền kinh tế cho vòng mua sắm tiếp theo.",
    withLockVi:
      "Họ đang dồn site B với 2 quả smoke! Anh em rotate qua mid, nhử họ dùng chiêu ulti và save tiền cho buy round sau.",
    lockedTerms: ["site B", "smoke", "rotate qua mid", "ulti", "save tiền", "buy round"],
    latency: "112ms",
  },
];

export default function InteractiveDemo() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(scenarios[0]);
  const [isLockEnabled, setIsLockEnabled] = useState(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Play audio voice reading out loud using browser SpeechSynthesis
  const handlePlayVoice = () => {
    if (isPlayingAudio) {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlayingAudio(false);
      return;
    }

    const textToSpeak = isLockEnabled
      ? selectedScenario.withLockVi
      : selectedScenario.withoutLockVi;

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = "vi-VN";
      utterance.rate = 1.05;

      utterance.onstart = () => setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      window.speechSynthesis.speak(utterance);
    } else {
      // Fallback timer simulation if SpeechSynthesis not available
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
            <span>Interactive Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Thử nghiệm trực tiếp:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Sức mạnh của AI Terminology Lock
            </span>
          </h2>
          <p className="text-base text-slate-600">
            Xem sự khác biệt một trời một vực giữa dịch thuật AI thông thường và bộ máy
            chuẩn thuật ngữ độc quyền của TAI Desktop.
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

          {/* Video Title & Meta */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
            <div>
              <span className="text-[10px] font-mono text-blue-600 uppercase tracking-wider font-bold">
                Nguồn phát: {selectedScenario.category}
              </span>
              <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                {selectedScenario.title}
              </h4>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-bold">
                Độ trễ: {selectedScenario.latency}
              </span>

              {/* Terminology Lock Toggle Switch */}
              <button
                onClick={() => {
                  if (isPlayingAudio && typeof window !== "undefined") {
                    window.speechSynthesis.cancel();
                    setIsPlayingAudio(false);
                  }
                  setIsLockEnabled(!isLockEnabled);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isLockEnabled
                    ? "bg-blue-50 text-blue-700 border border-blue-300 shadow-xs"
                    : "bg-rose-50 text-rose-700 border border-rose-300"
                }`}
              >
                {isLockEnabled ? (
                  <>
                    <Lock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Terminology Lock: BẬT</span>
                  </>
                ) : (
                  <>
                    <Unlock className="w-3.5 h-3.5 text-rose-600" />
                    <span>Terminology Lock: TẮT</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Subtitle Comparison Box */}
          <div className="mt-6 space-y-4">
            {/* Original English */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Âm thanh gốc (English Audio Stream):
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Whisper Input</span>
              </div>
              <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                "{selectedScenario.originalEn}"
              </p>
            </div>

            {/* Translation Output */}
            <div
              className={`p-5 rounded-2xl border transition-all duration-300 ${
                isLockEnabled
                  ? "bg-white border-2 border-blue-500 shadow-md shadow-blue-500/5"
                  : "bg-white border-2 border-rose-300"
              }`}
            >
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isLockEnabled ? "bg-blue-600" : "bg-rose-500"
                    }`}
                  />
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isLockEnabled ? "text-blue-700" : "text-rose-700"
                    }`}
                  >
                    {isLockEnabled
                      ? "Bản dịch TAI với AI Terminology Lock (Chuẩn chuyên môn):"
                      : "Bản dịch máy thông thường (Chưa khóa thuật ngữ - Ngô nghê):"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    {isLockEnabled ? "Độ chính xác: 99.8%" : "Độ chính xác: 64.2%"}
                  </span>
                  {/* Live Audio Dubbing Voice Test Button */}
                  <button
                    onClick={handlePlayVoice}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      isPlayingAudio
                        ? "bg-emerald-600 text-white shadow-xs"
                        : "bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100"
                    }`}
                    title="Phát thử giọng đọc AI thuyết minh bằng tiếng Việt"
                  >
                    {isPlayingAudio ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5" />
                        <span>Đang đọc...</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Nghe thuyết minh AI</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-semibold">
                "{isLockEnabled ? selectedScenario.withLockVi : selectedScenario.withoutLockVi}"
              </p>

              {/* Animated Audio Equalizer Wave if playing */}
              {isPlayingAudio && (
                <div className="mt-3 py-2 px-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span>AI Dubbing Engine đang phát giọng đọc tự nhiên...</span>
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

              {/* Highlighted locked terms */}
              {isLockEnabled && (
                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-slate-500 font-semibold text-[11px]">
                    Từ khoá được bảo toàn:
                  </span>
                  {selectedScenario.lockedTerms.map((term, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-mono font-bold"
                    >
                      <Lock className="w-2.5 h-2.5" />
                      {term}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
