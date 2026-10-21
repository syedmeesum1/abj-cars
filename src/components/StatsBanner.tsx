"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Play, Sparkles, CheckCircle2, SlidersHorizontal } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function StatsBanner() {
  const [showSlider, setShowSlider] = useState(false);

  const stats = [
    { num: "7K+", label: "CARS DETAILED" },
    { num: "3K+", label: "CERAMIC APPLIED" },
    { num: "5K+", label: "PPF WRAPPED" },
    { num: "8K+", label: "HAPPY CLIENTS" },
  ];

  const quickReviews = [
    {
      name: "HAMZA TARIQ",
      car: "Porsche Macan GTS",
      comment: "Flawless mirror finish. Removed every swirl mark on my Macan under direct sun.",
      rating: 5,
    },
    {
      name: "MALIK USMAN",
      car: "Toyota Land Cruiser 300",
      comment: "Full PPF installed for motorway driving. Laser-cut computer templates with wrapped edges.",
      rating: 5,
    },
    {
      name: "DR. AYESHA SIDDIQUI",
      car: "Audi A5 Sportback",
      comment: "Interior steam sterilization brought back the factory matte feel. Water beading is incredible.",
      rating: 5,
    },
  ];

  return (
    <section id="inspection" className="relative py-16 bg-[#0c1219] text-white overflow-hidden">
      {/* Soft blue ambient glow in dark background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#0077EE]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Widescreen Multimedia Card */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-heading font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0077EE] animate-ping" />
              Studio Detailing In Action
            </span>
            <button
              onClick={() => setShowSlider(!showSlider)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-[#0077EE] hover:text-white transition-colors text-[11px] font-heading font-bold uppercase"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{showSlider ? "Show Action Photo" : "Inspect Paint Before/After"}</span>
            </button>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950">
            {showSlider ? (
              <div className="p-4 sm:p-6 bg-slate-900">
                <BeforeAfterSlider />
              </div>
            ) : (
              <div className="relative aspect-[16/9] w-full group cursor-pointer" onClick={() => setShowSlider(true)}>
                <Image
                  src="/images/detailing_brush_action.jpg"
                  alt="Professional Car Detailing Brush Action in Studio Bay"
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/25 group-hover:bg-slate-950/15 transition-colors" />

                {/* Center Blue Play/Action Icon matching reference */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0077EE] text-white flex items-center justify-center shadow-[0_0_30px_rgba(0,119,238,0.7)] group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>

                <div className="absolute bottom-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-xs font-heading font-semibold text-white border border-white/15">
                  Click to inspect before/after restoration
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4 Big Bold Stats matching reference */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-slate-800 text-center">
          {stats.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight">
                {item.num}
              </p>
              <p className="font-heading font-bold text-xs uppercase tracking-wider text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* 3 Customer Review Highlights matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {quickReviews.map((rev) => (
            <div
              key={rev.name}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/90 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-heading font-black text-sm text-white tracking-wide">
                    {rev.name}
                  </p>
                  <p className="text-[11px] text-[#0077EE] font-medium">
                    {rev.car}
                  </p>
                </div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                &ldquo;{rev.comment}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
