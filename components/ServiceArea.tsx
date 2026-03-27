const areas = [
  "Bailey",
  "Conifer",
  "Evergreen",
  "Indian Hills",
  "Pine",
  "Morrison",
  "Fairplay",
  "Jefferson County",
  "Park County",
  "West Metro Denver",
  "Platte Canyon",
  "Shawnee",
];

export default function ServiceArea() {
  return (
    <section className="py-20 bg-[#082933]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div>
            <span className="text-[#eea603] text-sm font-semibold uppercase tracking-widest">
              Where We Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
              Serving the 285 Corridor &amp; Beyond
            </h2>
            <p className="text-[#b7b6b6] text-lg mb-8 leading-relaxed">
              Based in Bailey, CO, we serve the entire 285 Corridor from West
              Metro Denver to Park County. Whether you&apos;re in a mountain
              community or the foothills, Tri Peaks Electric is your local
              licensed electrician.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {areas.map((area) => (
                <span
                  key={area}
                  className="bg-[#0a3444] border border-[#eea603]/30 text-white text-sm font-medium px-4 py-2 rounded-full hover:border-[#eea603] hover:bg-[#eea603]/10 transition-colors cursor-default"
                >
                  📍 {area}
                </span>
              ))}
            </div>

            <a
              href="tel:7204365746"
              className="bg-[#eea603] hover:bg-yellow-400 text-[#082933] font-bold text-lg px-8 py-4 rounded-xl inline-block transition-all duration-200 shadow-xl hover:-translate-y-0.5"
            >
              📞 Call Your Local Electrician
            </a>
          </div>

          {/* Right — mountain graphic */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm aspect-square bg-[#0a3444] rounded-3xl border border-[#eea603]/30 flex flex-col items-center justify-center p-8">
              <svg
                viewBox="0 0 300 200"
                className="w-full opacity-70"
                aria-label="Colorado mountain range representing service area"
              >
                {/* Stars */}
                {[
                  [30, 20], [80, 10], [140, 25], [200, 8], [260, 18], [50, 40], [180, 30],
                ].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="1.5" fill="#eea603" opacity="0.8" />
                ))}
                {/* Mountains */}
                <path
                  d="M0 160 L60 60 L100 100 L160 20 L220 90 L270 50 L300 80 L300 200 L0 200 Z"
                  fill="#082933"
                  stroke="#eea603"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M0 180 L40 120 L80 150 L130 80 L180 140 L240 100 L300 130 L300 200 L0 200 Z"
                  fill="#0a3444"
                />
                {/* Snow caps */}
                <path d="M160 20 L140 55 L180 55 Z" fill="white" opacity="0.6" />
                <path d="M270 50 L255 75 L285 75 Z" fill="white" opacity="0.4" />
              </svg>
              <p className="text-[#eea603] font-bold text-lg mt-2">
                285 Corridor
              </p>
              <p className="text-[#b7b6b6] text-sm">
                Bailey, CO &amp; Surrounding Areas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
