const specials = [
  {
    title: "30A 240V Inlet",
    description:
      "Generator inlet installation — power your home during outages with a 30-amp 240V connection.",
    pdf: "/assets/Special - 30A 240V Inlet.pdf",
    icon: "🔌",
  },
  {
    title: "50A 240V Inlet",
    description:
      "Heavy-duty generator inlet for larger homes and equipment. 50-amp 240V installation.",
    pdf: "/assets/Special - 50A 240V Inlet.pdf",
    icon: "⚡",
  },
  {
    title: "50A 240V EV Charger Outlet",
    description:
      "Dedicated EV charging outlet — compatible with all major electric vehicle brands.",
    pdf: "/assets/Special - 50A 240V EV Charger Outlet.pdf",
    icon: "🚗",
  },
  {
    title: "Hot Tub Hookup",
    description:
      "Complete hot tub and spa electrical installation including dedicated circuit, GFCI & permits.",
    pdf: "/assets/Special - Hot Tub.pdf",
    icon: "♨️",
  },
  {
    title: "Panel Replacement",
    description:
      "Full electrical panel replacement with updated breakers, wiring and code compliance.",
    pdf: "/assets/Special - Panel Replacement.pdf",
    icon: "🔧",
  },
  {
    title: "Service Upgrade",
    description:
      "Upgrade your electrical service to 200A or 400A for modern power demands and EV readiness.",
    pdf: "/assets/Special - Service Upgrade.pdf",
    icon: "⬆️",
  },
];

export default function Specials() {
  return (
    <section id="pricing" className="py-20 bg-[#0a3444]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#eea603] text-sm font-semibold uppercase tracking-widest">
            Transparent Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
            Transparent Pricing Specials
          </h2>
          <p className="text-[#b7b6b6] text-lg max-w-2xl mx-auto">
            No surprises. Click any card to see our special pricing on the most
            common electrical projects we do. Know what to expect before you
            call.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specials.map((special) => (
            <a
              key={special.title}
              href={special.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#082933] border border-[#eea603]/30 hover:border-[#eea603] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#eea603]/10"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#eea603]/15 rounded-xl flex items-center justify-center text-2xl group-hover:bg-[#eea603]/25 transition-colors">
                  {special.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {special.title}
                  </h3>
                  <p className="text-[#b7b6b6] text-sm leading-relaxed mb-3">
                    {special.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#eea603] text-sm font-semibold group-hover:gap-2 transition-all">
                    Click for details <span>→</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center bg-[#082933] border border-[#eea603]/30 rounded-2xl p-8">
          <h3 className="text-white font-bold text-xl mb-2">
            Don&apos;t see your project?
          </h3>
          <p className="text-[#b7b6b6] mb-6">
            We handle all electrical work. Call for a free estimate — no
            commitment, no pressure.
          </p>
          <a
            href="tel:7204365746"
            className="bg-[#eea603] hover:bg-yellow-400 text-[#082933] font-bold text-lg px-10 py-4 rounded-xl inline-block transition-all duration-200 shadow-xl hover:-translate-y-0.5"
          >
            📞 Call (720) 436-5746
          </a>
        </div>
      </div>
    </section>
  );
}
