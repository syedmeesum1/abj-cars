"use client";

import { Star, ShieldCheck, CheckCircle2, MessageSquareQuote } from "lucide-react";

export default function Reviews() {
  const reviewsList = [
    {
      id: 1,
      name: "Hamza Tariq",
      car: "Porsche Macan GTS",
      treatment: "9H Ceramic Coating",
      rating: 5,
      date: "3 weeks ago",
      comment:
        "Removed every swirl mark on my Macan. Under direct sunlight it is a pure liquid obsidian mirror finish.",
      initials: "HT",
    },
    {
      id: 2,
      name: "Malik Usman",
      car: "Toyota Land Cruiser 300",
      treatment: "Full Body PPF Wrap",
      rating: 5,
      date: "1 month ago",
      comment:
        "Full PPF wrap before driving on the M2 motorway. Computer-cut edges and wrapping are factory-level perfection.",
      initials: "MU",
    },
    {
      id: 3,
      name: "Dr. Ayesha Siddiqui",
      car: "Audi A5 Sportback",
      treatment: "Ceramic & Interior",
      rating: 5,
      date: "2 months ago",
      comment:
        "The interior steam brought the leather back to its factory matte texture. Exterior water beading is incredible.",
      initials: "AS",
    },
    {
      id: 4,
      name: "Sarmad Bilal",
      car: "Honda Civic RS",
      treatment: "Essential Detail",
      rating: 5,
      date: "1 month ago",
      comment:
        "Removed scratches I thought were permanent. Delivered right on schedule within the reserved slot.",
      initials: "SB",
    },
    {
      id: 5,
      name: "Zain-ul-Abideen",
      car: "Mercedes-Benz E200",
      treatment: "3-Year Nano Ceramic",
      rating: 5,
      date: "3 months ago",
      comment:
        "Looks glossier than when I took delivery from Shahnawaz. The dust-free infrared curing makes all the difference.",
      initials: "ZA",
    },
    {
      id: 6,
      name: "Rao Fahad",
      car: "Hyundai Tucson AWD",
      treatment: "Paint Correction & Shield",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Inspected paint thickness with a digital gauge in front of me before touching the car. Total transparency.",
      initials: "RF",
    },
  ];

  return (
    <section id="reviews" className="relative py-20 bg-[#0b1016] overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#e0bd7c]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Overall Rating Badge */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#e0bd7c]/30 text-xs font-semibold text-white">
            <div className="flex items-center gap-1 text-[#e0bd7c]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#e0bd7c] text-[#e0bd7c]" />
              ))}
            </div>
            <span className="font-bold text-[#e0bd7c]">4.9 / 5.0</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">190 Reviews</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight">
            Client Reviews
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified ratings from luxury car owners across Islamabad &amp; Rawalpindi.
          </p>

          {/* Metric Pills */}
          <div className="flex flex-wrap items-center justify-center gap-5 pt-2 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7fd6e8]" />
              <span>190+ Reviews</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#e0bd7c]" />
              <span>98% Swirl Elimination</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#7fd6e8]" />
              <span>Verified Guarantee</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reviewsList.map((review) => (
            <div
              key={review.id}
              className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#111822] to-[#0c1219] border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-lg group"
            >
              <div className="space-y-3">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#e0bd7c]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#e0bd7c] text-[#e0bd7c]" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-4 h-4 text-slate-600 group-hover:text-[#7fd6e8] transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7fd6e8]/30 to-[#e0bd7c]/30 border border-slate-700 flex items-center justify-center text-xs font-bold text-white">
                    {review.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="font-heading font-bold text-xs text-white">
                        {review.name}
                      </p>
                      <CheckCircle2 className="w-3 h-3 text-[#7fd6e8]" />
                    </div>
                    <p className="text-[10px] text-[#e0bd7c] font-medium">
                      {review.car}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] text-slate-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
