"use client";

import {
  Sparkles,
  Shield,
  RefreshCw,
  Car,
  Settings,
  Flame,
  ArrowRight,
} from "lucide-react";

interface ServicesProps {
  onSelectPackage?: (pkgId: string) => void;
}

export default function Services({ onSelectPackage }: ServicesProps) {
  const serviceCards = [
    {
      num: "01",
      title: "INTERIOR STEAM & OZONE",
      tag: "SERVICE - 01",
      icon: Car,
      description: "140°C vapor extraction, German leather feeding, and 99.9% ozone sterilization.",
      packageTarget: "essential",
    },
    {
      num: "02",
      title: "PAINT PROTECTION (PPF)",
      tag: "SERVICE - 02",
      icon: Shield,
      description: "8.5-Mil self-healing aliphatic TPU film guarding against motorway rock chips and abrasions.",
      packageTarget: "armor",
    },
    {
      num: "03",
      title: "9H & 10H CERAMIC MATRIX",
      tag: "SERVICE - 03",
      icon: Sparkles,
      description: "Sacrificial quartz glass layer delivering extreme hydrophobics and deep liquid mirror gloss.",
      packageTarget: "showroom",
    },
    {
      num: "04",
      title: "PRECISION PAINT CORRECTION",
      tag: "SERVICE - 04",
      icon: RefreshCw,
      description: "Multi-stage rotary jewelling eliminating up to 98% of swirl marks, scratches, and haze.",
      packageTarget: "showroom",
    },
    {
      num: "05",
      title: "ENGINE BAY RESTORATION",
      tag: "SERVICE - 05",
      icon: Settings,
      description: "Safe electrical decontam, citrus degrease, and OEM factory satin plastic dressing.",
      packageTarget: "essential",
    },
    {
      num: "06",
      title: "WINDOW & WHEEL ARMOR",
      tag: "SERVICE - 06",
      icon: Flame,
      description: "Ceramic glass rain-repellent and 800°C heat-resistant brake caliper and barrel coating.",
      packageTarget: "showroom",
    },
  ];

  const handleBooking = (packageTarget: string) => {
    if (onSelectPackage) {
      onSelectPackage(packageTarget);
    }
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading matching reference layout */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900">
            ABJ SERVICES
          </h2>
          <div className="w-12 h-1 bg-[#0077EE] mx-auto mt-2 rounded-full" />
        </div>

        {/* 6 Grid Cards (3 columns x 2 rows) matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceCards.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.num}
                onClick={() => handleBooking(service.packageTarget)}
                className="group p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#0077EE]/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Icon Box in soft light blue matching reference */}
                  <div className="w-14 h-14 rounded-2xl bg-[#E8F2FA] text-[#0077EE] flex items-center justify-center mb-5 group-hover:bg-[#0077EE] group-hover:text-white transition-colors duration-200 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  <p className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#0077EE]">
                    {service.tag}
                  </p>

                  <h3 className="font-heading font-extrabold text-lg text-slate-900 mt-1 mb-2 group-hover:text-[#0077EE] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-heading font-bold text-slate-400 group-hover:text-[#0077EE] transition-colors">
                  <span>SELECT TREATMENT</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Pill Action Button matching reference */}
        <div className="mt-12 text-center">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-heading font-black text-xs uppercase tracking-wider bg-[#0077EE] hover:bg-[#0066cc] text-white shadow-[0_6px_20px_rgba(0,119,238,0.35)] transition-all hover:scale-105"
          >
            <span>Reserve A Treatment Slot</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
