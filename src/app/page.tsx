"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Packages from "@/components/Packages";
import BookingSystem from "@/components/BookingSystem";
import VisionBrands from "@/components/VisionBrands";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<string>("showroom");

  const handleSelectPackage = (pkgId: string) => {
    setSelectedPackage(pkgId);
  };

  return (
    <main className="min-h-screen bg-[#EDF3F8] text-slate-900 selection:bg-[#0077EE]/20 selection:text-[#0077EE]">
      {/* 1. Top Bar & Navigation */}
      <Navbar />

      {/* 2. Hero: Ghost Typography + Yellow Supercar + 01-04 Numbered Features */}
      <Hero />

      {/* 3. Dark Contrast Band: Multimedia Detailing Brush Card + 4 Stats (7K+, 3K+, 5K+, 8K+) + Reviews */}
      <StatsBanner />

      {/* 4. ABJ Services: 6 Clean Grid Cards (3x2) with Light Blue Icon Boxes */}
      <Services onSelectPackage={handleSelectPackage} />

      {/* 5. Gallery Showcase: 4 Tall Rounded Action Cards */}
      <Gallery />

      {/* 6. ABJ Pricing: Category Tabs + 3 Pricing Columns */}
      <Packages
        selectedPackage={selectedPackage}
        onSelectPackage={handleSelectPackage}
      />

      {/* 7. Live Slot Reservation System */}
      <BookingSystem
        selectedPackage={selectedPackage}
        onPackageChange={setSelectedPackage}
      />

      {/* 8. Vision, Mission, Partner Brands & Widescreen Soap Wash Consultation Banner */}
      <VisionBrands />

      {/* 9. Dark Slate Studio Footer */}
      <Footer />
    </main>
  );
}
