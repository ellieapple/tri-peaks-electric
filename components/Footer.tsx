import Image from "next/image";

export default function Footer() {
  const footerLinks = [
    { label: "Services", href: "#services" },
    { label: "Offers", href: "#offers" },
    { label: "Pricing", href: "#pricing" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#051e26] border-t border-[#eea603]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-4">
            <Image
              src="/assets/TriPeaksService_CircleLogo.png"
              alt="Tri Peaks Electric Service Inc. — Bailey CO"
              width={100}
              height={100}
              className="w-24 h-24 object-contain"
            />
            <p className="text-[#b7b6b6] text-sm leading-relaxed max-w-xs">
              Licensed &amp; insured electrical contractor serving Bailey, CO
              and the 285 Corridor. Residential, commercial &amp; outdoor
              electrical — done right.
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-[#eea603] font-bold text-sm uppercase tracking-widest mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-[#b7b6b6] text-sm">
              <div>
                <a
                  href="tel:7204365746"
                  className="text-white font-bold text-lg hover:text-[#eea603] transition-colors"
                >
                  (720) 436-5746
                </a>
              </div>
              <div>
                <a
                  href="mailto:David@TPEService.net"
                  className="hover:text-[#eea603] transition-colors"
                >
                  David@TPEService.net
                </a>
              </div>
              <div>📍 Bailey, CO — 285 Corridor</div>
              <div className="pt-1">
                <a
                  href="tel:7204365746"
                  className="bg-[#eea603] hover:bg-yellow-400 text-[#082933] font-bold text-sm px-5 py-2.5 rounded-lg inline-block transition-colors"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-[#eea603] font-bold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#b7b6b6] hover:text-[#eea603] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#eea603]/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#b7b6b6] text-xs">
          <p>
            Licensed &amp; Insured | Bailey, CO |{" "}
            <strong className="text-[#b7b6b6]">
              &copy; 2026 Tri Peaks Electric Service Inc.
            </strong>
          </p>
          <p className="flex items-center gap-1">
            <Image
              src="/assets/yellow bolt.PNG"
              alt=""
              width={14}
              height={14}
              className="w-3.5 h-3.5 object-contain opacity-80"
              aria-hidden
            />
            Serving the 285 Corridor &amp; West Metro Denver
          </p>
        </div>
      </div>
    </footer>
  );
}
