"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Offers", href: "#offers" },
    { label: "Pricing", href: "#pricing" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#082933] ${scrolled ? "shadow-lg shadow-black/30" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <Image
                src="/assets/TPEYeti.png"
                alt="Tri Peaks Electric Service — Bailey CO Electrician"
                width={44}
                height={44}
                className="h-10 lg:h-11 w-auto"
                priority
              />
              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-extrabold text-xs tracking-wider text-white">
                  TRI PEAKS
                </span>
                <span className="text-[#eea603] font-bold text-[10px] tracking-widest">
                  ELECTRIC SERVICE
                </span>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold transition-colors hover:text-[#eea603] text-white/90"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="tel:7204365746"
                className="bg-[#eea603] hover:bg-[#d99400] text-[#082933] font-extrabold px-4 py-2.5 lg:px-6 lg:py-3 rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap animate-pulse-gold"
              >
                <span className="hidden sm:inline">(720) 436-5746</span>
                <span className="sm:hidden">Call Now</span>
              </a>
              <button
                className="lg:hidden p-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-80" : "max-h-0"
          }`}
        >
          <div className="px-4 py-3 space-y-1 bg-[#082933] border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 font-semibold text-sm transition-colors text-white/80 hover:text-[#eea603]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile sticky bottom CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#082933] border-t border-[#eea603]/30 p-3 flex gap-2">
        <a
          href="tel:7204365746"
          className="flex-1 bg-[#eea603] text-[#082933] font-extrabold text-center py-3 rounded-lg text-sm"
        >
          Call (720) 436-5746
        </a>
        <a
          href="#contact"
          className="flex-1 border-2 border-[#eea603] text-[#eea603] font-bold text-center py-3 rounded-lg text-sm"
        >
          Free Estimate
        </a>
      </div>
    </>
  );
}
