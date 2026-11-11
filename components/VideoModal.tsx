"use client";

import React, { useState } from "react";
import { X, Play, Pause, Volume2, VolumeX, Sparkles } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-100 border-b border-slate-200 text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="font-bold text-slate-900">
              TAI Desktop - Video Demo Thực Tế (60 Giây)
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Đóng video demo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video bg-black flex flex-col justify-between overflow-hidden">
          {/* Simulated content video */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950 flex flex-col items-center justify-center text-center p-6">
            <div className="p-4 rounded-3xl bg-blue-500/10 border border-blue-400/30 text-blue-400 mb-4 animate-bounce">
              <Sparkles className="w-10 h-10" />
            </div>
            <div className="text-xs uppercase font-mono tracking-widest text-indigo-300 mb-1">
              Live Real-Time AI Translation Engine
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white max-w-lg mb-2">
              Deep Learning & Transformer Parallel Processing
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              Đang minh hoạ cách TAI nhận diện giọng nói tiếng Anh thời gian thực với độ trễ
              142ms, sinh phụ đề song ngữ và lồng tiếng tự nhiên.
            </p>

            {/* Simulated Live Subtitle Overlay */}
            <div className="mt-8 max-w-xl w-full bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-blue-300 text-left shadow-2xl text-slate-900">
              <div className="flex items-center justify-between text-[11px] text-blue-700 mb-1">
                <span className="font-mono font-bold">EN ➔ VI • Latency: 138ms</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-[10px] font-bold border border-blue-200">
                  🔒 Terminology Protected
                </span>
              </div>
              <p className="text-xs text-slate-600 font-sans">
                "We can scale transformer layers across thousands of distributed cluster nodes."
              </p>
              <p className="text-sm font-bold text-slate-900 mt-1">
                "Chúng ta có thể mở rộng các tầng transformer trên hàng ngàn nút cụm phân tán."
              </p>
            </div>
          </div>

          {/* Bottom Player Controls */}
          <div className="relative z-10 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-xs text-white">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="font-mono text-slate-300 text-xs">0:42 / 1:00</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30 text-[11px] font-mono">
                1080p 60fps
              </span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors cursor-pointer"
              >
                Tải App Ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
