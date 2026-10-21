"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Award,
  Clock,
  Car,
  Star,
  CheckCircle2,
  Phone,
  Calendar,
} from "lucide-react";

export default function Hero() {
  const [carInput, setCarInput] = useState("");

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
      const carInputEl = document.getElementById("vehicle-model") as HTMLInputElement;
      if (carInputEl && carInput) {
        carInputEl.value = carInput;
      }
    }
  };

  const numberedFeatures = [
    {
      num: "01",
      title: "CERTIFIED 9H MATRIX",
      subtitle: "Aerospace-grade nano ceramic glass",
      icon: ShieldCheck,
    },
    {
      num: "02",
      title: "MASTER DETAILERS",
      subtitle: "10+ years precision restoration",
      icon: Award,
    },
    {
      num: "03",
      title: "ISO DUST-FREE BAY",
      subtitle: "Climate & humidity controlled bays",
      icon: Clock,
    },
    {
      num: "04",
      title: "10-YEAR WARRANTY",
      subtitle: "Nationwide guaranteed PPF barrier",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="relative pt-4 sm:pt-8 pb-16 overflow-hidden bg-[#EDF3F8]">
      {/* Subtle floor grid pattern matching reference isometric studio floor */}
      <div className="absolute inset-0 bg-[radial-gradient(#0077EE_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none" />
      <div className="absolute top-0 right-0 w-3/5 h-full bg-gradient-to-l from-white/60 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main 2-Column Split Layout matching Reference Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[520px] lg:min-h-[580px]">
          
          {/* Left Column: Big Bold Typography & Pill Input */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6 z-10">
            {/* Top Micro Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-xs border border-slate-200/90 text-slate-700 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#0077EE] animate-pulse" />
              <span>Islamabad Studio • G-6 Markaz</span>
              <span className="text-slate-300">•</span>
              <span className="text-amber-500 font-bold flex items-center gap-1">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                4.9★
              </span>
            </div>

            {/* Main Display Headline matching reference style */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] text-[#0A1628] leading-[1.02] tracking-tight uppercase">
              Book your <br />
              <span className="text-[#0077EE]">car detailing</span> <br />
              bay now!
            </h1>

            {/* Subtitle paragraph matching reference typography */}
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-md">
              With ABJ Cars, anyone can give their vehicle a flawless showroom mirror finish. Just pick your service and let Islamabad&apos;s certified master detailers handle the rest.
            </p>

            {/* Quick Action Pill Bar matching reference design: [ 🏠 Icon Label | Input ... (→) ] */}
            <form
              onSubmit={handleBookingSubmit}
              className="relative max-w-md bg-white rounded-full p-1.5 shadow-[0_8px_30px_rgba(0,119,238,0.12)] border border-slate-200/90 flex items-center justify-between gap-2 transition-all duration-200 focus-within:border-[#0077EE] focus-within:shadow-[0_8px_30px_rgba(0,119,238,0.22)]"
            >
              {/* Left Label with Icon */}
              <div className="flex items-center gap-2 pl-3 sm:pl-4 text-xs font-heading font-bold uppercase tracking-wider text-slate-800 shrink-0">
                <Car className="w-4 h-4 text-[#0077EE]" />
                <span className="hidden sm:inline">My Vehicle</span>
                <span className="text-slate-300 font-normal">|</span>
              </div>

              {/* Text Input */}
              <input
                type="text"
                value={carInput}
                onChange={(e) => setCarInput(e.target.value)}
                placeholder="Enter car name (e.g. Land Cruiser, Civic)"
                className="w-full bg-transparent text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden py-2"
              />

              {/* Action Circular Button with Arrow (→) */}
              <button
                type="submit"
                aria-label="Book Bay"
                className="w-10 h-10 rounded-full bg-[#0077EE] hover:bg-[#0066cc] text-white flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(0,119,238,0.4)] transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500 pt-1">
              <span className="inline-flex items-center gap-1.5 text-slate-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0077EE]" />
                Dust-Free ISO Bay
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0077EE]" />
                10-Year Warranty
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0077EE]" />
                Free Paint Scan
              </span>
            </div>
          </div>

          {/* Right Column: Isometric 3D Car Showcase matching Reference Composition */}
          <div className="lg:col-span-7 xl:col-span-7 relative">
            {/* Soft Ambient Glow behind the car */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-tr from-[#0077EE]/20 via-[#00D2FF]/10 to-amber-200/20 blur-3xl pointer-events-none -z-10" />

            {/* Container for Isometric Car */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,119,238,0.15)] border border-slate-200/80 bg-white/40 backdrop-blur-xs group">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/images/hero_isometric_car.jpg"
                  alt="ABJ Car Detailing Centerpiece - Yellow Mercedes AMG GT in Isometric Studio"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 750px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Subtle soft gradient fade at the edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Glassmorphic Spec Badge 1 (Top Left) */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.06)] text-slate-800 transition-transform duration-300 hover:scale-105">
                <div className="w-7 h-7 rounded-xl bg-[#0077EE]/10 flex items-center justify-center text-[#0077EE] shrink-0 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[11px] font-heading font-black uppercase tracking-wider text-slate-900 leading-none">
                    9H Matrix Ceramic
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">
                    100% Mirror Gloss
                  </p>
                </div>
              </div>

              {/* Floating Glassmorphic Spec Badge 2 (Bottom Right) */}
              <div className="absolute bottom-4 right-4 inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.06)] text-slate-800 transition-transform duration-300 hover:scale-105">
                <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-heading font-black uppercase tracking-wider text-slate-900 leading-none">
                    Self-Healing PPF
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">
                    10-Year Anti-Yellowing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Numbered Features Strip */}
        <div className="mt-12 pt-8 border-t border-slate-300/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
