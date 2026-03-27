import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#082933] text-white pt-28 md:pt-36 pb-16 sm:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(238,166,3,0.2),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(8,41,51,0.98)_0%,rgba(8,41,51,0.9)_45%,rgba(8,41,51,0.55)_100%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 xl:gap-16 items-center">
          <div>
            <p className="inline-flex items-center rounded-full bg-[#eea603] text-[#082933] text-xs font-extrabold uppercase tracking-[0.18em] px-4 py-2 mb-6">
              Ranked #1 Electrician in Bailey
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-6">
              Built for Safety.
              <br />
              Priced for Peace of Mind.
            </h1>

            <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl mb-8">
              Tri Peaks Electric Service delivers licensed residential and commercial electrical work with fast response, clear pricing, and clean workmanship across Bailey and the 285 Corridor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:7204365746"
                className="bg-[#eea603] text-[#082933] font-extrabold text-lg px-8 py-4 rounded-full text-center transition-all duration-200 hover:bg-[#d99400] hover:-translate-y-0.5 shadow-xl"
              >
                Get Free Estimate
              </a>
              <a
                href="#offers"
                className="border-2 border-white/40 text-white font-bold text-lg px-8 py-4 rounded-full text-center transition-all duration-200 hover:border-[#eea603] hover:text-[#eea603]"
              >
                View Current Offers
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 max-w-2xl">
              {[
                "Licensed and Insured",
                "Same-Day Availability",
                "No-Surprise Pricing",
              ].map((item) => (
                <div key={item} className="rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-sm font-semibold text-white/90">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[#eea603]/25 blur-3xl rounded-[2rem]" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/15 shadow-2xl">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/assets/Outside_Sauna.png"
                  alt="Outdoor electrical hookup project in Bailey Colorado"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082933] via-transparent to-transparent" />
              </div>

              <div className="absolute left-4 right-4 bottom-4 rounded-2xl bg-white text-[#082933] p-4 shadow-lg">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#eea603] mb-1">
                  Recent Project
                </p>
                <p className="font-black text-lg leading-tight">Outdoor Sauna Electrical Hookup</p>
                <p className="text-sm text-[#393939]/80">Completed in Bailey, CO with permit-ready wiring and safety upgrades.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "500+", label: "Projects Completed" },
            { number: "100%", label: "Licensed Work" },
            { number: "24h", label: "Fast Response Window" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white border border-white/15 text-center px-4 py-5">
              <p className="text-[#eea603] text-3xl font-black">{stat.number}</p>
              <p className="text-[#082933] font-semibold text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
