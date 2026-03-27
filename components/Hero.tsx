import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#082933] text-white pt-28 md:pt-36 pb-16 sm:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(238,166,3,0.12),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 xl:gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-6">
              Your Local Electrician
              <br />
              <span className="text-[#eea603]">in Bailey, Colorado</span>
            </h1>

            <p className="text-white/75 text-lg leading-relaxed max-w-xl mb-8">
              Licensed residential and commercial electrical work across
              Bailey and the 285 Corridor. Clear pricing, clean work, fast
              scheduling.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="tel:7204365746"
                className="bg-[#eea603] text-[#082933] font-bold text-base px-7 py-3.5 rounded-lg text-center transition-colors hover:bg-[#d99400]"
              >
                (720) 436-5746
              </a>
              <a
                href="#offers"
                className="border border-white/30 text-white font-medium text-base px-7 py-3.5 rounded-lg text-center transition-colors hover:border-white/60"
              >
                View Current Offers
              </a>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-white/60">
              <li>Licensed &amp; Insured</li>
              <li>Same-Day Available</li>
              <li>Upfront Pricing</li>
            </ul>
          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/assets/Outside_Sauna.png"
                  alt="Outdoor electrical hookup completed by Tri Peaks Electric in Bailey, Colorado"
                  fill
                  className="object-cover"
                  priority
                  sizes="40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082933]/60 via-transparent to-transparent" />
              </div>
              <div className="absolute left-4 right-4 bottom-4 rounded-xl bg-white/95 backdrop-blur text-[#082933] p-4">
                <p className="font-semibold leading-snug">Outdoor Sauna Electrical Hookup</p>
                <p className="text-sm text-[#393939]/70 mt-0.5">Bailey, CO — permit-ready wiring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
