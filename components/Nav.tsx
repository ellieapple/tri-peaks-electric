"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#082933]/98 shadow-xl" : "bg-[#082933]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/assets/TPEYeti.png"
              alt="Tri Peaks Electric Service — Bailey CO Electrician"
              width={48}
              height={48}
              className="h-12 w-auto"
              priority
            />
            <span className="hidden sm:block text-[#b7b6b6] font-bold text-sm leading-tight">
              TRI PEAKS<br />
              <span className="text-[#eea603]">ELECTRIC SERVICE</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#b7b6b6] hover:text-[#eea603] transition-colors font-medium text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA button — always visible */}
          <div className="flex items-center gap-3">
            <a
              href="tel:7204365746"
              className="bg-[#eea603] hover:bg-yellow-400 text-[#082933] font-bold px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              📞 <span className="hidden sm:inline">Call </span>(720) 436-5746
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
              <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#0a3444] border-t border-[#eea603]/30 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-[#b7b6b6] hover:text-[#eea603] hover:bg-[#082933] transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
