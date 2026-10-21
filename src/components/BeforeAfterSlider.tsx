"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Sparkles, SlidersHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  className?: string;
}

export default function BeforeAfterSlider({ className = "" }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const width = rect.width;
      const position = Math.max(0, Math.min(100, (x / width) * 100));
      setSliderPosition(position);
    },
    []
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleInteractionEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleInteractionEnd);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleInteractionEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleInteractionEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleInteractionEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleInteractionEnd]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div className={`relative select-none ${className}`}>
      {/* Outer Glow & Bezel */}
      <div className="relative rounded-2xl p-1 bg-gradient-to-b from-[#7fd6e8]/30 via-slate-800/40 to-[#e0bd7c]/20 shadow-2xl">
        <div
          ref={containerRef}
          role="slider"
          aria-label="Before and after paint correction comparison"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(sliderPosition)}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
          className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-xl bg-slate-950 cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-[#7fd6e8]"
        >
          {/* AFTER Image (Flawless Mirror Finish - Bottom Layer) */}
          <div className="absolute inset-0">
            <Image
              src="/images/mirror_after.jpg"
              alt="After ABJ Ceramic Coating and Paint Correction - Flawless Mirror Reflection"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 650px"
              className="object-cover"
            />
            {/* After Tag */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0b1016]/85 border border-[#7fd6e8]/40 backdrop-blur-md text-xs font-semibold tracking-wide text-[#7fd6e8] shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#7fd6e8] animate-pulse" />
              <span>AFTER • 9H CERAMIC</span>
            </div>
          </div>

          {/* BEFORE Image (Dull Swirled Paint - Clipped Top Layer) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <Image
              src="/images/swirled_before.jpg"
              alt="Before ABJ Detailing - Heavy Swirls, Scratches, and Clear Coat Oxidation"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 650px"
              className="object-cover"
            />
            {/* Before Tag */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0b1016]/85 border border-slate-700/60 backdrop-blur-md text-xs font-semibold tracking-wide text-slate-300 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
              <span>BEFORE • SWIRL MARKS</span>
            </div>
          </div>

          {/* Divider Line & Handle */}
          <div
            className="absolute top-0 bottom-0 z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Vertical Laser Beam */}
            <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-gradient-to-b from-transparent via-[#7fd6e8] to-transparent shadow-[0_0_12px_#7fd6e8]"></div>

            {/* Draggable Chrome Knob */}
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0f151e] border-2 border-[#7fd6e8] shadow-[0_0_20px_rgba(127,214,232,0.6)] flex items-center justify-center pointer-events-auto transition-transform hover:scale-110 active:scale-95">
              <SlidersHorizontal className="w-4 h-4 text-[#7fd6e8]" />
            </div>
          </div>

          {/* Drag instruction overlay on bottom */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-[#0b1016]/80 backdrop-blur-md border border-white/10 text-[11px] text-slate-400 pointer-events-none flex items-center gap-2">
            <span>◀ Drag slider to inspect paint restoration ▶</span>
          </div>
        </div>
      </div>

      {/* Quick Stat Bar Below Slider */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
          <p className="text-slate-400">Defect Removal</p>
          <p className="text-[#7fd6e8] font-bold text-sm">95%+ Restored</p>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
          <p className="text-slate-400">Gloss Level</p>
          <p className="text-[#e0bd7c] font-bold text-sm">+85 Gloss Units</p>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
          <p className="text-slate-400">Surface Shield</p>
          <p className="text-emerald-400 font-bold text-sm">9H Nano-Matrix</p>
        </div>
      </div>
    </div>
  );
}
