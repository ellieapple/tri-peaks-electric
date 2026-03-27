import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#082933] overflow-hidden pt-20">
      {/* Mountain silhouette SVG background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-10">
        <svg
          viewBox="0 0 1440 400"
          className="absolute bottom-0 w-full"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <path
            d="M0 400 L200 150 L380 280 L520 80 L680 220 L820 50 L960 200 L1100 100 L1260 250 L1440 120 L1440 400 Z"
            fill="#eea603"
          />
        </svg>
      </div>

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, rgba(238,166,3,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#eea603]/20 border border-[#eea603]/40 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#eea603] text-sm font-semibold">
                ⚡ Ranked #1 Electrician in Bailey, CO
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Bailey&apos;s #1 Electrician —{" "}
              <span className="text-[#eea603]">
                Powering Homes &amp; Businesses Year-Round
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#b7b6b6] mb-8 leading-relaxed">
              Licensed &amp; insured electrical services in Bailey, Conifer,
              Evergreen &amp; West Metro Denver. From panel upgrades to EV
              chargers — done right, on time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="tel:7204365746"
                className="bg-[#eea603] hover:bg-yellow-400 text-[#082933] font-bold text-lg px-8 py-4 rounded-xl text-center transition-all duration-200 shadow-2xl hover:shadow-yellow-400/30 hover:-translate-y-0.5"
              >
                📞 Call Now: (720) 436-5746
              </a>
              <a
                href="#contact"
                className="border-2 border-[#eea603] text-[#eea603] hover:bg-[#eea603] hover:text-[#082933] font-bold text-lg px-8 py-4 rounded-xl text-center transition-all duration-200"
              >
                Book a Free Estimate →
              </a>
            </div>

            {/* Trust signals inline */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#b7b6b6]">
              {[
                "Licensed & Insured in Colorado",
                "Residential & Commercial",
                "Same-Day Service Available",
                "285 Corridor Specialist",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="text-[#eea603]">✓</span> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Yeti mascot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
                style={{ background: "#eea603" }}
              />
              <Image
                src="/assets/TPEYeti.png"
                alt="Tri Peaks Electric Service Yeti mascot — Bailey CO electrician"
                width={480}
                height={480}
                className="relative w-72 sm:w-96 lg:w-[420px] h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#eea603] py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 text-[#082933] font-bold text-sm">
            {[
              "⚡ Licensed & Insured",
              "⚡ Ranked #1 in Bailey",
              "⚡ Residential & Commercial",
              "⚡ Same-Day Service Available",
            ].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
