import Image from "next/image";

export default function Footer() {
  const links = [
    { label: "Services", href: "#services" },
    { label: "Offers", href: "#offers" },
    { label: "Pricing", href: "#pricing" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#051e26] pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/assets/TriPeaksService_CircleLogo.png"
              alt="Tri Peaks Electric Service Inc."
              width={80}
              height={80}
              className="w-20 h-20 object-contain mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Licensed &amp; insured electrical contractor serving Bailey, CO
              and the 285 Corridor. Residential, commercial &amp; outdoor
              electrical — done right.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#eea603] font-bold text-xs uppercase tracking-[0.2em] mb-4">
              Contact
            </h3>
            <div className="space-y-2 text-white/60 text-sm">
              <a href="tel:7204365746" className="block text-white font-bold text-lg hover:text-[#eea603] transition-colors">
                (720) 436-5746
              </a>
              <a href="mailto:David@TPEService.net" className="block hover:text-[#eea603] transition-colors">
                David@TPEService.net
              </a>
              <p>Bailey, CO — 285 Corridor</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[#eea603] font-bold text-xs uppercase tracking-[0.2em] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/60 hover:text-[#eea603] transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-xs">
          <p>&copy; 2026 Tri Peaks Electric Service Inc. — Licensed &amp; Insured</p>
          <p className="flex items-center gap-1">
            <Image
              src="/assets/yellow_bolt.png"
              alt=""
              width={14}
              height={14}
              className="w-3.5 h-3.5 object-contain opacity-60"
              aria-hidden
            />
            Serving the 285 Corridor &amp; West Metro Denver
          </p>
        </div>
      </div>
    </footer>
  );
}
