"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Menu,
  X,
  Clock,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "SERVICES", href: "#services" },
    { name: "GALLERY", href: "#gallery" },
    { name: "PRICING", href: "#packages" },
    { name: "ABOUT", href: "#vision" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="w-full z-50 bg-[#EDF3F8]">
      {/* Top Info & Social Bar matching reference */}
      <div className="border-b border-slate-300/70 text-[11px] text-slate-600 font-medium py-1.5 px-4 sm:px-8 max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="tel:+923161616253"
            className="flex items-center gap-1.5 hover:text-[#0077EE] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#0077EE]" />
            <span>+92 316 161 6253</span>
          </a>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-[#0077EE]" />
            <span>G-6 Markaz, Islamabad</span>
          </span>
          <span className="hidden md:inline text-slate-300">•</span>
          <span className="hidden md:flex items-center gap-1.5 text-slate-500">
            <Clock className="w-3 h-3 text-[#0077EE]" />
            <span>Mon - Sun: 09:00 - 21:00</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0077EE] transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0077EE] transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.833C10.5 0 9 1.5 9 4.667V8z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0077EE] transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3">
        <div className="flex items-center justify-between bg-white rounded-2xl px-5 py-2.5 shadow-sm border border-slate-200/80">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center group py-0.5">
            <Image
              src="/logo-dark.png"
              alt="ABJ Car Detailing"
              width={52}
              height={50}
              className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-heading text-sm font-bold tracking-wider text-slate-700 hover:text-[#0077EE] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Electric Blue Pill + Cart Icon */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-heading font-bold text-xs uppercase tracking-wider bg-[#0077EE] hover:bg-[#0066cc] text-white shadow-[0_4px_14px_rgba(0,119,238,0.35)] transition-all duration-200 hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Detailing</span>
            </a>

            <div className="relative w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
              <span>0</span>
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full text-[9px] text-white flex items-center justify-center font-bold">
                1
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-100 text-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-sm font-bold tracking-wider text-slate-800 hover:text-[#0077EE] py-1.5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0077EE] text-white font-heading font-bold text-xs uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4" />
              Book Detailing Bay
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
