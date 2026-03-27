const specials = [
  {
    title: "30A 240V Inlet",
    description: "Generator inlet for backup power during outages",
    pdf: "/assets/Special_30A_240V_Inlet.pdf",
  },
  {
    title: "50A 240V Inlet",
    description: "Heavy-duty generator inlet for larger homes",
    pdf: "/assets/Special_50A_240V_Inlet.pdf",
  },
  {
    title: "50A 240V EV Charger Outlet",
    description: "Dedicated EV charging — all brands compatible",
    pdf: "/assets/Special_50A_240V_EV_Charger_Outlet.pdf",
    popular: true,
  },
  {
    title: "Hot Tub Hookup",
    description: "Complete electrical with dedicated circuit & GFCI",
    pdf: "/assets/Special_Hot_Tub.pdf",
  },
  {
    title: "Panel Replacement",
    description: "Full panel replacement, updated breakers & wiring",
    pdf: "/assets/Special_Panel_Replacement.pdf",
    popular: true,
  },
  {
    title: "Service Upgrade",
    description: "Upgrade to 200A/400A for modern power demands",
    pdf: "/assets/Special_Service_Upgrade.pdf",
  },
];

export default function Specials() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#082933] mb-3">
            Pricing Specials
          </h2>
          <p className="text-[#393939]/70 text-base">
            No surprises. Click any card to see fixed pricing on popular electrical projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {specials.map((special) => (
            <a
              key={special.title}
              href={special.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-white rounded-xl p-6 transition-colors ${
                special.popular
                  ? "ring-2 ring-[#eea603]"
                  : "border border-gray-200 hover:border-[#eea603]/60"
              }`}
            >
              {special.popular && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-[#eea603] text-[#082933] text-[10px] font-bold px-2.5 py-0.5 rounded text-xs">
                    Popular
                  </span>
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#082933]/5 group-hover:bg-[#eea603]/10 rounded-xl flex items-center justify-center transition-colors">
                  <svg className="w-6 h-6 text-[#eea603]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#082933] font-bold text-lg mb-1 group-hover:text-[#eea603] transition-colors">
                    {special.title}
                  </h3>
                  <p className="text-[#393939]/60 text-sm leading-relaxed mb-3">
                    {special.description}
                  </p>
                  <span className="inline-flex items-center text-[#eea603] text-sm font-medium">
                    See Pricing →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 bg-[#082933] rounded-xl py-10 px-6 text-center">
          <h3 className="text-white font-semibold text-lg mb-2">
            Don&apos;t see your project?
          </h3>
          <p className="text-white/55 text-sm mb-5">
            We handle all electrical work — call for a free estimate.
          </p>
          <a
            href="tel:7204365746"
            className="bg-[#eea603] hover:bg-[#d99400] text-[#082933] font-bold px-7 py-3 rounded-lg inline-block transition-colors"
          >
            (720) 436-5746
          </a>
        </div>
      </div>
    </section>
  );
}
