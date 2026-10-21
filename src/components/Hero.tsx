"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2,
  Droplets,
  Star,
  Flame,
} from "lucide-react";

export default function Hero() {
  const [activeShowcase, setActiveShowcase] = useState<number>(0);

  const showcaseSlides = [
    {
      id: "amg",
      name: "AMG GT Studio Bay",
      badge: "Flagship Detailing Bay",
      image: "/images/hero_amg_detailing.jpg",
      tag: "10H Matrix Ceramic Infusion",
    },
    {
      id: "porsche",
      name: "Porsche 9H Ceramic",
      badge: "Surgical Application",
      image: "/images/service_ceramic.jpg",
      tag: "Dust-Free Clean Room Bay",
    },
    {
      id: "mirror",
      name: "Mirror Paint Correction",
      badge: "Zero Holograms",
      image: "/images/mirror_after.jpg",
      tag: "True Mirror Reflection",
    },
  ];

  const numberedFeatures = [
    {
      num: "01",
      title: "CERTIFIED 9H MATRIX",
      subtitle: "Aerospace-grade nano ceramic glass barrier",
      icon: ShieldCheck,
    },
    {
      num: "02",
      title: "MASTER DETAILERS",
      subtitle: "10+ years precision paint restoration craft",
      icon: Award,
    },
    {
      num: "03",
      title: "ISO DUST-FREE BAY",
      subtitle: "Climate & humidity controlled clean rooms",
      icon: Clock,
    },
    {
      num: "04",
      title: "10-YEAR WARRANTY",
      subtitle: "Nationwide guaranteed anti-yellowing PPF",
      icon: Flame,
    },
  ];

  return (
    <section className="relative pt-6 pb-16 overflow-hidden bg-gradient-to-b from-[#EDF3F8] via-[#E4EDF5] to-[#EDF3F8]">
      {/* Background Ambient Glows & Grid Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#0077EE]/15 via-[#00A3FF]/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#0077EE_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Header & Copy */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-4 sm:space-y-5">
          {/* Studio Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-slate-300/80 shadow-xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#0077EE] animate-pulse" />
            <span className="text-[11px] font-heading font-extrabold uppercase tracking-widest text-slate-800">
              Islamabad&apos;s #1 Detailing Studio • G-6 Markaz
            </span>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1 text-amber-500 text-[11px] font-bold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="text-slate-700">4.9★ (500+ Exotics)</span>
            </div>
          </div>

          {/* Master Display Headline */}
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-slate-900 leading-[0.92]">
            SURGICAL PRECISION.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077EE] via-[#00A3FF] to-[#0055CC]">
              MIRROR FINISH.
            </span>
          </h1>

          {/* Luxury Description */}
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Multi-stage paint correction, self-healing PPF, and certified 9H ceramic glass coatings engineered for Islamabad&apos;s premier luxury, executive, and exotic vehicles.
          </p>

          {/* High-Impact Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#booking"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full font-heading font-black text-xs uppercase tracking-wider bg-gradient-to-r from-[#0077EE] to-[#0066cc] hover:from-[#0066cc] hover:to-[#0055bb] text-white shadow-[0_8px_25px_rgba(0,119,238,0.38)] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Reserve Detailing Bay</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#packages"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-xs hover:border-slate-400 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-[#0077EE]" />
              <span>Explore Studio Packages</span>
            </a>
          </div>

          {/* Mini Guarantee Strip */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-heading font-bold text-slate-500 uppercase tracking-wider">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0077EE]" />
              Dust-Free ISO Bay
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0077EE]" />
              10-Year PPF Warranty
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0077EE]" />
              Free Paint Depth Scan
            </span>
          </div>
        </div>

        {/* Centerpiece Showcase Stage */}
        <div className="mt-8 sm:mt-10 relative">
          {/* Studio Frame Card */}
          <div className="relative rounded-3xl overflow-hidden bg-[#070B10] border border-slate-800/80 shadow-[0_25px_60px_-15px_rgba(0,119,238,0.28)]">
            {/* Top Interactive Selector Pill */}
            <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3">
              {/* Studio Live Badge */}
              <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[11px] font-heading font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Detailing Studio • Islamabad</span>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center gap-1 p-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 mx-auto sm:mx-0">
                {showcaseSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveShowcase(idx)}
                    className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] font-heading font-bold uppercase tracking-wider transition-all duration-200 ${
                      activeShowcase === idx
                        ? "bg-[#0077EE] text-white shadow-[0_2px_10px_rgba(0,119,238,0.5)]"
                        : "text-slate-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {slide.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Showcase Image with smooth transition */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[580px] overflow-hidden">
              <Image
                src={showcaseSlides[activeShowcase].image}
                alt={showcaseSlides[activeShowcase].name}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-center transition-all duration-700 scale-100 hover:scale-105"
              />

              {/* Subtle Gradient Vignette to ground lighting */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B10] via-transparent to-black/40 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none" />
            </div>

            {/* Floating Glassmorphic Badges on the Car Stage */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
              {/* Bottom Left: Ceramic / PPF Spec */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-white shadow-lg pointer-events-auto">
                <div className="w-8 h-8 rounded-xl bg-[#0077EE]/20 flex items-center justify-center shrink-0 border border-[#0077EE]/40 text-[#0077EE]">
                  <Droplets className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-heading font-black uppercase tracking-wider text-white">
                    {showcaseSlides[activeShowcase].tag}
                  </p>
                  <p className="text-[10px] text-slate-300 font-medium">
                    110° Water Beading • 9H Hardness Test Passed
                  </p>
                </div>
              </div>

              {/* Bottom Right: Quick Book Button on Stage */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#0077EE]/90 backdrop-blur-md border border-white/20 text-white shadow-[0_4px_16px_rgba(0,119,238,0.4)] pointer-events-auto">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-heading font-bold uppercase tracking-wider">
                  Mirror Gloss Level: 99.8%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Numbered Features Strip */}
        <div className="mt-8 pt-8 border-t border-slate-300/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {numberedFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.num}
                className="bg-white/80 backdrop-blur-xs p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#0077EE]/40 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-heading font-black text-2xl text-slate-900 group-hover:text-[#0077EE] transition-colors">
                    {feat.num}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-[#0077EE]/10 flex items-center justify-center transition-colors">
                    <Icon className="w-4 h-4 text-slate-700 group-hover:text-[#0077EE] transition-colors" />
                  </div>
                </div>
                <h3 className="font-heading font-extrabold text-sm tracking-wide text-slate-900 leading-snug">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                  {feat.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
