import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#082933]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a3444] via-[#082933] to-[#051e26]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#eea603]/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-[#eea603] text-[#082933] rounded-full px-4 py-1.5 mb-6 text-sm font-extrabold shadow-lg">
              Trusted by Bailey, Conifer & Evergreen Homeowners
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Premium Electrical Service in{" "}
              <span className="text-[#eea603]">Bailey, Colorado</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-lg">
              Licensed &amp; insured. Panel upgrades, EV chargers, generators, lighting &amp;
              more. Ranked #1 electrician in Bailey — serving the entire 285 Corridor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="tel:7204365746"
                className="bg-[#eea603] hover:bg-[#d99400] text-[#082933] font-extrabold text-lg px-8 py-4 rounded-full text-center transition-all duration-200 shadow-2xl hover:shadow-[#eea603]/40 hover:-translate-y-1"
              >
                Get Your Free Quote
              </a>
              <a
                href="tel:7204365746"
                className="border-2 border-white/40 hover:border-[#eea603] text-white hover:text-[#eea603] font-bold text-lg px-8 py-4 rounded-full text-center transition-all duration-200"
              >
                (720) 436-5746
              </a>
            </div>

            {/* Trust signals row */}
            <div className="flex flex-wrap gap-6 text-white/70 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#eea603]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Licensed &amp; Insured
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#eea603]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                100% Satisfaction
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#eea603]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Same-Day Available
              </span>
            </div>
          </div>

          {/* Yeti mascot */}
          <div className="hidden lg:flex justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-[#eea603]/20 rounded-full blur-3xl" />
            </div>
            <Image
              src="/assets/TPEYeti.png"
              alt="Tri Peaks Electric Service Yeti mascot"
              width={440}
              height={440}
              className="relative w-96 h-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Stats bar — like epoxy site */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t-4 border-[#eea603]">
        <div className="max-w-5xl mx-auto px-4 py-4 sm:py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { number: "#1", label: "Ranked in Bailey" },
              { number: "10+", label: "Years Experience" },
              { number: "500+", label: "Jobs Completed" },
              { number: "100%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-[#eea603] font-black text-2xl sm:text-3xl">{stat.number}</div>
                <div className="text-[#393939] text-xs sm:text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
