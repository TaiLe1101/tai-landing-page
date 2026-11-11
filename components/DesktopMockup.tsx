"use client";

import React, { useState, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Settings,
  Languages,
  Shield,
  Zap,
  Sparkles,
  Search,
  Copy,
  Check,
  Bookmark,
  Share2,
  Cpu,
  Radio,
  Sliders,
  Globe,
} from "lucide-react";

interface ChannelData {
  langCode: string;
  langLabel: string;
  videoTitle: string;
  sourceCategory: string;
  speaker: string;
  latency: string;
  subtitles: {
    id: number;
    time: string;
    source: string;
    vi: string;
    termLocks: string[];
  }[];
}

const channelPresets: ChannelData[] = [
  {
    langCode: "EN-VI",
    langLabel: "English ➔ Tiếng Việt",
    videoTitle: "MIT 6.S191: Deep Learning & Attention Mechanism",
    sourceCategory: "MIT OpenCourseWare • Lecture 04",
    speaker: "Prof. Alexander Amini",
    latency: "142ms",
    subtitles: [
      {
        id: 1,
        time: "04:18",
        source: "In this section, we transition from Recurrent Neural Networks to the Transformer architecture.",
        vi: "Trong phần này, chúng ta chuyển từ Mạng Nơ-ron Hồi quy sang kiến trúc Transformer.",
        termLocks: ["Transformer", "Recurrent Neural Networks"],
      },
      {
        id: 2,
        time: "04:25",
        source: "The primary breakthrough is removing sequential dependencies via self-attention layers.",
        vi: "Đột phá cốt lõi là loại bỏ sự phụ thuộc tuần tự thông qua các lớp self-attention.",
        termLocks: ["Self-Attention", "Sequential Dependencies"],
      },
      {
        id: 3,
        time: "04:32",
        source: "Notice how the multi-head attention mechanism computes matrix representations in parallel across GPUs.",
        vi: "Hãy chú ý cách cơ chế multi-head attention tính toán biểu diễn ma trận song song trên nhiều GPU.",
        termLocks: ["Multi-Head Attention", "GPUs"],
      },
      {
        id: 4,
        time: "04:39",
        source: "This drastically mitigates the vanishing gradient problem when handling long context windows.",
        vi: "Điều này giảm thiểu triệt để vấn đề biến mất gradient (vanishing gradient) khi xử lý cửa sổ ngữ cảnh dài.",
        termLocks: ["Vanishing Gradient", "Context Windows"],
      },
      {
        id: 5,
        time: "04:46",
        source: "Let's benchmark the inference latency and token throughput on our local cluster.",
        vi: "Hãy cùng đo độ trễ suy luận (inference latency) và lưu lượng token trên cụm máy chủ cục bộ.",
        termLocks: ["Inference Latency", "Token Throughput"],
      },
    ],
  },
  {
    langCode: "JA-VI",
    langLabel: "日本語 ➔ Tiếng Việt",
    videoTitle: "NHK Science: 量子コンピューティングと超伝導回路",
    sourceCategory: "Tokyo Tech Research Keynote",
    speaker: "Dr. Kenjiro Nakamura",
    latency: "158ms",
    subtitles: [
      {
        id: 1,
        time: "02:10",
        source: "量子重ね合わせ状態を利用することで、従来のスーパーコンピュータを凌駕する計算速度を実現します。",
        vi: "Bằng cách tận dụng trạng thái chồng chập lượng tử (quantum superposition), chúng ta đạt tốc độ tính toán vượt trội siêu máy tính truyền thống.",
        termLocks: ["Quantum Superposition", "Supercomputer"],
      },
      {
        id: 2,
        time: "02:18",
        source: "極低温希釈冷凍機内において、超伝導量子ビットのコヒーレンス時間を測定しています。",
        vi: "Bên trong tủ lạnh pha loãng cực kỳ lạnh, chúng tôi đo thời gian kết hợp (coherence time) của các qubit siêu dẫn.",
        termLocks: ["Dilution Refrigerator", "Qubit", "Coherence Time"],
      },
      {
        id: 3,
        time: "02:26",
        source: "エラー訂正符号の実装により、量子優位性を産業レベルで実証可能になります。",
        vi: "Với việc triển khai mã sửa lỗi lượng tử (error-correcting code), ưu thế lượng tử có thể được chứng minh ở quy mô công nghiệp.",
        termLocks: ["Error-Correcting Code", "Quantum Supremacy"],
      },
    ],
  },
  {
    langCode: "KO-VI",
    langLabel: "한국어 ➔ Tiếng Việt",
    videoTitle: "KAIST: 차세대 HBM 반도체 패키징 기술",
    sourceCategory: "Seoul Semiconductor Symposium",
    speaker: "Prof. Min-ho Park",
    latency: "149ms",
    subtitles: [
      {
        id: 1,
        time: "01:45",
        source: "AI 가속기의 성능 병목 현상을 해결하기 위해 3D 적층 HBM 메모리가 필수적입니다.",
        vi: "Để giải quyết hiện tượng nghẽn cổ chai hiệu năng của bộ tăng tốc AI, bộ nhớ HBM xếp chồng 3D là yếu tố then chốt.",
        termLocks: ["AI Accelerator", "HBM", "3D Stacking"],
      },
      {
        id: 2,
        time: "01:52",
        source: "TSV 실리콘 관통 전극 기술을 통해 데이터 전송 대역폭을 획기적으로 개선했습니다.",
        vi: "Thông qua công nghệ điện cực xuyên silicon (TSV), băng thông truyền dữ liệu đã được cải thiện đột phá.",
        termLocks: ["TSV", "Bandwidth"],
      },
    ],
  },
];

export default function DesktopMockup() {
  const [selectedChannelIdx, setSelectedChannelIdx] = useState(0);
  const currentChannel = channelPresets[selectedChannelIdx];
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeSubtitleIndex, setActiveSubtitleIndex] = useState(0);
  const [isDubbingOn, setIsDubbingOn] = useState(true);
  const [copiedToast, setCopiedToast] = useState<string | null>(null);
  const [activeViewMode, setActiveViewMode] = useState<"dual" | "vi" | "dubbing">("dual");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveSubtitleIndex((prev) => (prev + 1) % currentChannel.subtitles.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, currentChannel]);

  const currentSub = currentChannel.subtitles[activeSubtitleIndex] || currentChannel.subtitles[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToast("Đã sao chép vào bộ nhớ tạm!");
    setTimeout(() => setCopiedToast(null), 2500);
  };

  return (
    <div className="relative w-full rounded-2xl bg-white border border-slate-200/90 shadow-2xl shadow-blue-500/10 overflow-hidden">
      {/* Toast Notification */}
      {copiedToast && (
        <div className="absolute top-4 right-4 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{copiedToast}</span>
        </div>
      )}

      {/* Decorative Outer Glow */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Desktop App Titlebar (Light Theme Window) */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100 border-b border-slate-200 text-xs text-slate-600 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block shadow-xs"></span>
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block shadow-xs"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block shadow-xs"></span>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded bg-white border border-slate-200">
            <span className="font-semibold text-slate-800">TAI Desktop Client</span>
            <span className="text-slate-300">|</span>
            <span className="text-blue-600 font-mono text-[11px] truncate max-w-[220px]">
              ▶ {currentChannel.videoTitle}
            </span>
          </div>
        </div>

        {/* Live Status Indicators & Language Pair Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1 p-0.5 bg-white rounded-lg border border-slate-200">
            {channelPresets.map((ch, idx) => (
              <button
                key={ch.langCode}
                onClick={() => {
                  setSelectedChannelIdx(idx);
                  setActiveSubtitleIndex(0);
                }}
                className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono transition-all cursor-pointer ${
                  selectedChannelIdx === idx
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {ch.langCode}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{currentChannel.latency}</span>
          </div>
        </div>
      </div>

      {/* App Toolbar / Modes */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-slate-50/80 border-b border-slate-200 gap-3 text-xs">
        <div className="flex items-center gap-1 p-1 bg-slate-200/60 rounded-xl border border-slate-200/80">
          <button
            onClick={() => setActiveViewMode("dual")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              activeViewMode === "dual"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-white"
            }`}
          >
            <Languages className="w-3.5 h-3.5" />
            <span>Song ngữ (Dual Sub)</span>
          </button>
          <button
            onClick={() => setActiveViewMode("vi")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              activeViewMode === "vi"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-white"
            }`}
          >
            <span>Tiếng Việt</span>
          </button>
          <button
            onClick={() => setActiveViewMode("dubbing")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              activeViewMode === "dubbing"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-white"
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>Thuyết minh AI</span>
          </button>
        </div>

        {/* Lock dictionary status & Dubbing toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 text-xs">
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-medium">AI Terminology Lock:</span>
            <span className="text-blue-700 font-bold">Tech Dictionary</span>
          </div>

          <button
            onClick={() => setIsDubbingOn(!isDubbingOn)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all duration-200 cursor-pointer ${
              isDubbingOn
                ? "bg-blue-50 border-blue-200 text-blue-700"
                : "bg-white border-slate-200 text-slate-500"
            }`}
            title="Bật/Tắt thuyết minh AI giọng tự nhiên"
          >
            {isDubbingOn ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-blue-600" />
                <span className="hidden xs:inline">Dubbing: BẬT</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Dubbing: TẮT</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Left Column: YouTube Video Player Screen */}
        <div className="lg:col-span-7 bg-slate-950 p-3 sm:p-4 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-slate-200 overflow-hidden">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex flex-col justify-between group shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center p-6">
              <div className="w-full h-full flex flex-col justify-center items-center text-center opacity-90">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center mb-3 shadow-md">
                  <Cpu className="w-7 h-7 text-blue-400 animate-pulse" />
                </div>
                <div className="text-[11px] uppercase tracking-widest text-indigo-300 font-semibold mb-1">
                  {currentChannel.sourceCategory}
                </div>
                <div className="text-base sm:text-lg font-bold text-white max-w-sm">
                  {currentChannel.videoTitle}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-mono">
                  {currentChannel.speaker}
                </div>

                <div className="mt-3 flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-[11px] text-blue-300">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
                  <span>Phụ đề nổi TAI đang đồng bộ khung hình</span>
                </div>
              </div>
            </div>

            {/* YouTube top badges */}
            <div className="relative z-10 flex items-center justify-between p-3 bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex items-center gap-2">
                <div className="px-2 py-0.5 rounded bg-red-600 text-white font-black text-[10px] tracking-wide">
                  YouTube
                </div>
                <span className="text-xs font-medium text-white truncate max-w-[200px] sm:max-w-xs drop-shadow">
                  {currentChannel.videoTitle}
                </span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/60 text-slate-300 border border-slate-800">
                4K 60fps
              </span>
            </div>

            {/* FLOATING REAL-TIME SUBTITLE OVERLAY */}
            <div className="relative z-20 px-3 pb-3">
              <div className="w-full bg-white/95 backdrop-blur-md rounded-xl p-3 border border-blue-300/80 shadow-2xl transition-all duration-300 text-slate-900">
                <div className="flex items-center justify-between mb-1 text-[10px] text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span className="text-blue-700 font-bold">TAI Real-time Overlay</span>
                    <span className="text-slate-400 font-mono">[{currentSub.time}]</span>
                  </div>
                  {isDubbingOn && (
                    <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      <Volume2 className="w-3 h-3 text-emerald-600" /> Dubbing: Giọng Nam Truyền Cảm
                    </span>
                  )}
                </div>

                {(activeViewMode === "dual" || activeViewMode === "vi") && (
                  <div className="space-y-1">
                    {activeViewMode === "dual" && (
                      <p className="text-xs text-slate-600 font-sans leading-relaxed">
                        {currentSub.source}
                      </p>
                    )}
                    <p className="text-sm font-bold text-slate-900 leading-relaxed flex flex-wrap items-center gap-1">
                      {currentSub.vi.split(" ").map((word, wIdx) => {
                        const isLocked = currentSub.termLocks.some((term) =>
                          word.toLowerCase().includes(term.toLowerCase().split(" ")[0])
                        );
                        return isLocked ? (
                          <span
                            key={wIdx}
                            className="bg-blue-100 text-blue-700 px-1 py-0.2 rounded border border-blue-200 font-bold"
                          >
                            {word}
                          </span>
                        ) : (
                          <span key={wIdx}>{word}</span>
                        );
                      })}
                    </p>
                  </div>
                )}
                {activeViewMode === "dubbing" && (
                  <div className="flex items-center justify-between pt-1">
                    <p className="text-xs text-slate-700 font-medium">
                      Đang thuyết minh âm thanh song song, không làm ngắt tiếng nền video.
                    </p>
                    <div className="flex items-center gap-1">
                      {[12, 24, 16, 28, 20, 32, 18, 22].map((height, i) => (
                        <span
                          key={i}
                          className="w-1 bg-blue-600 rounded-full animate-pulse"
                          style={{
                            height: `${height}px`,
                            animationDelay: `${i * 100}ms`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Video Controls Bar */}
            <div className="relative z-10 p-2.5 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-1.5">
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden cursor-pointer">
                <div className="bg-gradient-to-r from-red-600 via-blue-500 to-indigo-500 h-full w-[35%]" />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-white transition-colors cursor-pointer"
                    aria-label={isPlaying ? "Tạm dừng" : "Phát"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  </button>
                  <span className="font-mono text-[11px] text-slate-400">
                    {currentSub.time} / 48:15
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-blue-300 font-mono font-medium">
                    Độ trễ: {currentChannel.latency}
                  </span>
                  <Settings className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                  <Maximize2 className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono text-[10px]">
                  Alt+T
                </kbd>
                <span>Bật/Tắt phụ đề</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono text-[10px]">
                  Alt+D
                </kbd>
                <span>Bật/Tắt Audio Dubbing</span>
              </span>
            </div>
            <span className="text-emerald-400 font-medium">● YouTube Hook Active</span>
          </div>
        </div>

        {/* Right Column: Real-time Bilingual Transcript Panel */}
        <div className="lg:col-span-5 bg-white p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Bảng Phụ Đề Song Ngữ Real-Time
                </h4>
              </div>
              <span className="text-[11px] text-blue-700 font-mono font-bold bg-blue-50 px-2 py-0.5 rounded">
                {currentChannel.langLabel}
              </span>
            </div>

            <div className="my-3 relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm từ vựng, thuật ngữ hoặc mốc thời gian..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>

            <div className="space-y-2.5 max-h-[310px] overflow-y-auto pr-1">
              {currentChannel.subtitles.map((sub, idx) => {
                const isActive = idx === activeSubtitleIndex;
                return (
                  <div
                    key={sub.id}
                    onClick={() => setActiveSubtitleIndex(idx)}
                    className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-blue-50/80 border-blue-300 shadow-xs"
                        : "bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span
                        className={`font-mono font-bold ${
                          isActive ? "text-blue-700" : "text-slate-500"
                        }`}
                      >
                        {sub.time}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {sub.termLocks.map((lock, lIdx) => (
                          <span
                            key={lIdx}
                            className="text-[9px] px-1.5 py-0.2 rounded bg-blue-100 text-blue-700 border border-blue-200 font-semibold"
                          >
                            🔒 {lock}
                          </span>
                        ))}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(`${sub.source}\n${sub.vi}`);
                          }}
                          className="text-slate-400 hover:text-slate-600 transition-colors p-0.5 cursor-pointer"
                          title="Sao chép câu song ngữ"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 font-sans leading-snug">
                      {sub.source}
                    </p>

                    <p
                      className={`text-xs mt-1 font-semibold leading-snug ${
                        isActive ? "text-blue-900" : "text-slate-800"
                      }`}
                    >
                      {sub.vi}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 mt-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-[11px] font-medium text-slate-700">
                Whisper v3 Turbo Engine
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopy("Đã sao chép toàn bộ transcript song ngữ Markdown!")}
                className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-[11px] text-slate-700 border border-slate-200 transition-colors duration-150 cursor-pointer flex items-center gap-1 font-semibold"
              >
                <Bookmark className="w-3 h-3 text-blue-600" />
                <span>Xuất Notion</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
