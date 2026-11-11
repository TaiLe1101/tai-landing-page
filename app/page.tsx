"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofTicker from "@/components/SocialProofTicker";
import FeatureBento from "@/components/FeatureBento";
import InteractiveDemo from "@/components/InteractiveDemo";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import DownloadSection from "@/components/DownloadSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyDownloadBar from "@/components/StickyDownloadBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-500/15 selection:text-blue-900">
      {/* Accessible Skip to Content Link (WCAG UX Standard) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-xl focus:font-bold focus:shadow-lg focus:outline-none"
      >
        Chuyển thẳng đến nội dung chính (Skip to Content)
      </a>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="flex-1 flex flex-col">
        {/* Hero Section with Live Desktop Mockup */}
        <Hero />

        {/* Social Proof & Metrics Ticker */}
        <SocialProofTicker />

        {/* Bento Grid Features */}
        <FeatureBento />

        {/* Interactive Live Subtitle & Terminology Simulator */}
        <InteractiveDemo />

        {/* 3-Step Workflow */}
        <HowItWorks />

        {/* Verified User Testimonials */}
        <Testimonials />

        {/* Interactive Pricing (Monthly / Yearly Switch) */}
        <Pricing />

        {/* Direct Download Options */}
        <DownloadSection />

        {/* FAQ Accordion */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Bottom Download Bar on Scroll */}
      <StickyDownloadBar />
    </div>
  );
}
