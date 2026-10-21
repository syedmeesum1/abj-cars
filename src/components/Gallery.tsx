"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X, Clock, Sparkles } from "lucide-react";

interface GalleryCard {
  id: string;
  title: string;
  category: string;
  image: string;
  duration: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryCard | null>(null);

  const galleryItems: GalleryCard[] = [
    {
      id: "foam-wash",
      title: "Snow Foam Chemical Decontam",
      category: "Paint Wash Prep",
      image: "/images/gallery_landcruiser.jpg",
      duration: "Studio Stage 01",
    },
    {
      id: "engine-detail",
      title: "Engine Bay & Caliper Detail",
      category: "Mechanical Bay",
      image: "/images/service_ppf.jpg",
      duration: "Studio Stage 02",
    },
    {
      id: "interior-steam",
      title: "140°C Vapor Steam Extraction",
      category: "Cockpit Sterilization",
      image: "/images/service_interior.jpg",
      duration: "Studio Stage 03",
    },
    {
      id: "ceramic-cure",
      title: "9H Nano Ceramic Coating Curing",
      category: "Infrared Curing",
      image: "/images/service_ceramic.jpg",
      duration: "Studio Stage 04",
    },
  ];

  return (
    <section id="gallery" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* 4 Tall Rounded Cards matching reference layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[3/4] sm:aspect-[2/3] rounded-3xl overflow-hidden bg-slate-900 shadow-md cursor-pointer border border-slate-200"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-750 group-hover:scale-108"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover:from-black/90 transition-colors" />

              {/* Blue Circular Icon in Center matching reference */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0077EE] text-white flex items-center justify-center shadow-[0_0_20px_rgba(0,119,238,0.6)] group-hover:scale-115 transition-transform duration-300">
                <Maximize2 className="w-5 h-5" />
              </div>

              {/* Bottom Card Title */}
              <div className="absolute bottom-0 inset-x-0 p-5 space-y-1">
                <p className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#0077EE]">
                  {item.category}
                </p>
                <h3 className="font-heading font-bold text-sm text-white leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-slate-950">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
            </div>

            <div className="p-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-heading font-bold uppercase tracking-wider text-[#0077EE]">
                  {selectedImage.category}
                </p>
                <h4 className="font-heading font-black text-xl text-white">
                  {selectedImage.title}
                </h4>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                <Clock className="w-3.5 h-3.5 text-[#0077EE]" />
                <span>{selectedImage.duration}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
