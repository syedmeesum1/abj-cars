"use client";

import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#0B1118] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Top Grid: Logo & Brand + Studio Info matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Logo & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 p-1 flex items-center justify-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="ABJ Car Detailing Official Logo"
                  width={42}
                  height={42}
                  className="object-contain filter drop-shadow-md"
                />
              </div>
              <div>
                <h3 className="font-heading font-black text-xl text-white tracking-tight">
                  ABJ CAR DETAILING
                </h3>
                <p className="text-xs text-[#0077EE] font-heading font-bold uppercase tracking-wider">
                  Islamabad Studio • G-6 Markaz
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-sm">
              Islamabad&apos;s premier automotive surface care studio specializing in 9H/10H ceramic coatings, self-healing PPF, and surgical paint correction.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-heading font-black text-sm text-white uppercase tracking-wider">
              Quick Navigation
            </p>
            <ul className="space-y-2 text-xs font-heading font-bold text-slate-400">
              <li>
                <a href="#services" className="hover:text-[#0077EE] transition-colors">
                  STUDIO SERVICES
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#0077EE] transition-colors">
                  PROJECT GALLERY
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#0077EE] transition-colors">
                  DETAILING PACKAGES
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#0077EE] transition-colors">
                  RESERVE A BAY
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <p className="font-heading font-black text-sm text-white uppercase tracking-wider">
              Studio Location
            </p>

            <div className="flex items-start gap-2.5 text-slate-400">
              <MapPin className="w-4 h-4 text-[#0077EE] shrink-0 mt-0.5" />
              <span>Melody Market, Civic Centre, G-6 Markaz, Islamabad</span>
            </div>

            <div className="flex items-center gap-2.5 text-slate-400">
              <Phone className="w-4 h-4 text-[#0077EE] shrink-0" />
              <a href="tel:+923161616253" className="hover:text-white transition-colors">
                +92 316 161 6253
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-slate-400">
              <Clock className="w-4 h-4 text-[#0077EE] shrink-0" />
              <span>Mon - Sun: 09:00 AM - 09:00 PM</span>
            </div>
          </div>
        </div>

        {/* Contact Info Pills Bar matching reference layout */}
        <div className="py-4 px-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-6 flex-wrap">
            <span className="flex items-center gap-2 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-[#0077EE]" />
              <span>+92 316 161 6253</span>
            </span>
            <span className="flex items-center gap-2 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-[#0077EE]" />
              <span>desk@abjdetailing.pk</span>
            </span>
            <span className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#0077EE]" />
              <span>Civic Centre G-6 Markaz, Islamabad</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-white transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.833C10.5 0 9 1.5 9 4.667V8z"/>
              </svg>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-white transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-[#0077EE] text-white transition-colors ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 font-medium">
          <p>© 2026 ABJ Car Detailing. All rights reserved. Islamabad, Pakistan.</p>
          <p>Precision Auto Restoration &amp; Ceramic Bay</p>
        </div>
      </div>
    </footer>
  );
}
