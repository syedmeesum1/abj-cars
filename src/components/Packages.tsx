"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

interface PackagesProps {
  selectedPackage: string;
  onSelectPackage: (packageId: string) => void;
}

export default function Packages({ selectedPackage, onSelectPackage }: PackagesProps) {
  const [vehicleType, setVehicleType] = useState<"sedan" | "suv" | "truck" | "exotic">("sedan");

  const vehicleMultiplier = {
    sedan: 1.0,
    suv: 1.15,
    truck: 1.25,
    exotic: 1.35,
  };

  const basePackages = [
    {
      id: "essential",
      name: "BASIC",
      subtitle: "Annual Reset",
      basePrice: 35000,
      features: [
        "Chemical foam decontam & clay bar",
        "1-Stage polish removing light swirls",
        "Deep cabin steam & leather feeding",
        "6-Month SiO2 hydrophobic sealant",
      ],
    },
    {
      id: "showroom",
      name: "STANDARD",
      subtitle: "3-Yr 9H Ceramic",
      basePrice: 75000,
      isPopular: true,
      features: [
        "2-Stage paint correction (90% swirl removal)",
        "Certified 3-Year 9H ceramic coating",
        "Exterior glass, plastics & wheel faces coated",
        "140°C interior steam sterilization & ozone",
      ],
    },
    {
      id: "armor",
      name: "PREMIUM",
      subtitle: "Self-Healing PPF",
      basePrice: 185000,
      features: [
        "Multi-stage correction prior to wrap",
        "8.5-Mil Self-Healing TPU PPF (wrapped edges)",
        "10H Ceramic top-coat applied over PPF",
        "10-Year anti-yellowing studio warranty",
      ],
    },
  ];

  const handleSelect = (pkgId: string) => {
    onSelectPackage(pkgId);
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="packages" className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading matching reference layout */}
        <div className="text-center mb-8">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900">
            ABJ PRICING
          </h2>
          <div className="w-12 h-1 bg-[#0077EE] mx-auto mt-2 rounded-full" />
        </div>

        {/* Vehicle Category Selector Bar matching reference */}
        <div className="max-w-xl mx-auto mb-12 flex items-center justify-center bg-[#F1F5F9] rounded-xl p-1.5 border border-slate-200">
          {(
            [
              { id: "sedan", label: "CARS / SEDANS" },
              { id: "suv", label: "SUVS" },
              { id: "truck", label: "TRUCKS / 4x4" },
              { id: "exotic", label: "EXOTICS" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setVehicleType(tab.id)}
              className={`flex-1 py-2 rounded-lg font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 ${
                vehicleType === tab.id
                  ? "bg-[#0077EE] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3 Pricing Columns matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {basePackages.map((pkg) => {
            const calculatedPrice = Math.round(pkg.basePrice * vehicleMultiplier[vehicleType]);
            const isSelected = selectedPackage === pkg.id;

            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-8 flex flex-col justify-between text-center transition-all duration-200 ${
                  pkg.isPopular
                    ? "bg-white border-2 border-[#0077EE] shadow-xl relative"
                    : "bg-[#F8FAFC] border border-slate-200 hover:border-slate-300"
                } ${isSelected ? "ring-2 ring-[#0077EE]" : ""}`}
              >
                <div>
                  <p className="font-heading font-extrabold text-sm uppercase tracking-wider text-slate-500">
                    {pkg.name}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{pkg.subtitle}</p>

                  <div className="my-6">
                    <span className="font-heading font-black text-3xl sm:text-4xl text-slate-900">
                      Rs {calculatedPrice.toLocaleString()}
                    </span>
                    <p className="text-[10px] uppercase font-bold text-slate-400 mt-1">
                      {vehicleType} rate
                    </p>
                  </div>

                  <div className="w-10 h-0.5 bg-slate-200 mx-auto mb-6" />

                  {/* 4 Clean Inclusions */}
                  <ul className="space-y-3 text-xs text-slate-600 text-left">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0077EE] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => handleSelect(pkg.id)}
                    className="font-heading font-bold text-xs uppercase tracking-wider text-slate-700 hover:text-[#0077EE] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{isSelected ? "✓ SELECTED FOR BOOKING" : "RESERVE THIS PACKAGE"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
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
            <span>Proceed To Bay Booking</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
