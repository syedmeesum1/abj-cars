"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function VisionBrands() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const brandLogos = [
    { name: "XPEL", subtitle: "Self-Healing PPF" },
    { name: "CERAMIC PRO", subtitle: "9H Nano Quartz" },
    { name: "GYEON", subtitle: "Quartz Protection" },
    { name: "RUPES", subtitle: "Rotary Polishers" },
    { name: "KOCH-CHEMIE", subtitle: "German Detailing" },
    { name: "MEGUIAR'S", subtitle: "Mirror Glaze" },
  ];

  const handleQuickQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return;
    setSubmitted(true);
    const message = `Salam ABJ Detailing! I would like a quick detailing estimate for my vehicle. Contact: ${phoneNumber}`;
    window.open(`https://wa.me/923161616253?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="vision" className="pt-20 pb-16 bg-[#EDF3F8] text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Two Columns: Vision & Mission matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-3">
            <h3 className="font-heading font-black text-xl sm:text-2xl tracking-tight text-slate-900 uppercase">
              ABJ VISION
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              To be Islamabad&apos;s most trusted automotive preservation bay, restoring every vehicle to its absolute showroom glory using international nanotechnology standards.
            </p>
            <a
              href="#packages"
              className="inline-flex items-center gap-1.5 font-heading font-bold text-xs uppercase tracking-wider text-[#0077EE] hover:underline pt-1"
            >
              <span>Explore Treatments</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-3">
            <h3 className="font-heading font-black text-xl sm:text-2xl tracking-tight text-slate-900 uppercase">
              ABJ MISSION
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Providing surgical paint correction, certified 10-year TPU PPF installation, and hygienic interior steam sterilization in a dust-controlled studio in G-6 Markaz.
            </p>
            <a
              href="#booking"
              className="inline-flex items-center gap-1.5 font-heading font-bold text-xs uppercase tracking-wider text-[#0077EE] hover:underline pt-1"
            >
              <span>Reserve Detailing Bay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Brand Logos Strip matching reference layout */}
        <div className="pt-6 border-t border-slate-300/80">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center text-center">
            {brandLogos.map((brand) => (
              <div key={brand.name} className="space-y-0.5 group">
                <p className="font-heading font-black text-lg tracking-wider text-slate-800 group-hover:text-[#0077EE] transition-colors">
                  {brand.name}
                </p>
                <p className="text-[10px] uppercase font-bold text-slate-400">
                  {brand.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Widescreen Soap Wash Consultation Banner matching reference */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          <div className="relative aspect-[21/9] sm:aspect-[24/8] min-h-[180px] sm:min-h-[220px] w-full flex items-center justify-center p-6 sm:p-10">
            <Image
              src="/images/soap_wash_banner.jpg"
              alt="Luxury Foam Car Wash Detailing"
              fill
              sizes="(max-width: 1200px) 100vw, 1100px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

            <div className="relative z-10 max-w-xl w-full text-center space-y-4">
              <h4 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
                Get A Direct WhatsApp Estimate
              </h4>

              {submitted ? (
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 text-white font-heading font-bold text-xs uppercase">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Connecting to studio WhatsApp...</span>
                </div>
              ) : (
                <form
                  onSubmit={handleQuickQuote}
                  className="flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto"
                >
                  <input
                    type="tel"
                    required
                    placeholder="Enter phone number (e.g. 0316 1616253)"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full sm:flex-1 px-4 py-2.5 rounded-full bg-white text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0077EE] shadow-md"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#0077EE] hover:bg-[#0066cc] text-white font-heading font-black text-xs uppercase tracking-wider shadow-md transition-all whitespace-nowrap"
                  >
                    Quick Quote
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
