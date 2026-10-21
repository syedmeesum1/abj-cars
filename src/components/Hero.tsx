"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const numberedFeatures = [
    {
      num: "01",
      title: "HIGHEST QUALITY",
      subtitle: "Certified 9H Matrix",
    },
    {
      num: "02",
      title: "EXPERT TEAM",
      subtitle: "Master Certified Detailers",
    },
    {
      num: "03",
      title: "QUICK PROCESS",
      subtitle: "Dust-Free ISO Bay",
    },
    {
      num: "04",
      title: "WARRANTY",
      subtitle: "10-Year PPF Guarantee",
    },
  ];

  return (
    <section className="relative pt-6 pb-12 overflow-hidden bg-[#EDF3F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Giant Ghost Typography & Centerpiece Car Frame */}
        <div className="relative flex flex-col items-center justify-center min-h-[460px] sm:min-h-[540px] lg:min-h-[600px] select-none">
          {/* Massive Ghost Letters in Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <span className="ghost-title uppercase tracking-tighter">
              ABJ CARS
            </span>
          </div>

          {/* Operating hours note on top-left of car */}
          <div className="absolute top-4 left-2 sm:left-6 z-10 hidden sm:flex items-center gap-2 text-xs font-heading font-bold text-slate-500 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#0077EE] animate-pulse" />
            <span>Mon - Sun: 09:00 - 21:00 • G-6 Markaz</span>
          </div>

          {/* Centerpiece Yellow Supercar */}
          <div className="relative z-10 w-full max-w-4xl aspect-[16/9] -mt-2 sm:-mt-6 transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/images/yellow_supercar.jpg"
              alt="ABJ Car Detailing Centerpiece Supercar - Yellow Mercedes AMG GT"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 950px"
              className="object-contain mix-blend-multiply drop-shadow-[0_20px_30px_rgba(0,119,238,0.25)]"
            />
          </div>

          {/* Floating Action Pill below car */}
          <div className="relative z-10 -mt-6 sm:-mt-10 flex items-center justify-center gap-3">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-heading font-black text-xs uppercase tracking-wider bg-[#0077EE] hover:bg-[#0066cc] text-white shadow-[0_6px_20px_rgba(0,119,238,0.4)] transition-all hover:scale-105"
            >
              <span>Reserve Detailing Slot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#inspection"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider bg-white/90 hover:bg-white text-slate-800 border border-slate-300/80 shadow-sm transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0077EE]" />
              <span>Inspect Paint Finish</span>
            </a>
          </div>
        </div>

        {/* 4-Column Numbered Features Strip */}
        <div className="mt-8 pt-8 border-t border-slate-300/60 grid grid-cols-2 md:grid-cols-4 gap-6">
          {numberedFeatures.map((feat) => (
            <div key={feat.num} className="flex items-start gap-3">
              <span className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tighter shrink-0 leading-none">
                {feat.num}
              </span>
              <div>
                <p className="font-heading font-extrabold text-xs sm:text-sm tracking-wide text-slate-900 leading-tight">
                  {feat.title}
                </p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  {feat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
