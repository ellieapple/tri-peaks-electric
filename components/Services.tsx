import Image from "next/image";

const services = [
  {
    title: "Electrical Repairs & Troubleshooting",
    description: "Outlet/switch repairs, breaker issues, diagnostics & electrical fault-finding.",
    image: "/assets/Yeti_Meter.png",
    imageAlt: "Electrician diagnostics — electrical troubleshooting Bailey CO",
  },
  {
    title: "Panel Upgrades & Replacements",
    description: "Full panel replacements, 200A service upgrades & subpanel installation.",
    image: "/assets/Yeti_Electrical_Panel.png",
    imageAlt: "Panel upgrade electrician — service upgrade Bailey CO",
  },
  {
    title: "EV Charger Installation",
    description: "Level 2 chargers, 50A 240V outlets — Tesla, Ford, Rivian & all EV brands.",
    image: "/assets/Yeti_EV_Charger.png",
    imageAlt: "EV charger installation — electric vehicle charging Colorado",
  },
  {
    title: "Lighting Installation",
    description: "Indoor/outdoor, recessed, LED upgrades, security & landscape lighting.",
    image: null,
    imageAlt: "",
  },
  {
    title: "Backup Power & Generators",
    description: "Standby/portable generators, transfer switches, whole-home backup power.",
    image: null,
    imageAlt: "",
  },
  {
    title: "Remodels & Additions",
    description: "Basement finishing, kitchen remodels, additions — full wiring rough-in to finish.",
    image: "/assets/Yeti_Electrical_Cord.png",
    imageAlt: "Electrical remodel wiring — home addition electrician Colorado",
  },
  {
    title: "General Installations",
    description: "Ceiling fans, surge protection, smoke detectors, hot tub wiring & more.",
    image: null,
    imageAlt: "",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#082933] mb-3">
            What We Do
          </h2>
          <p className="text-[#393939]/70 text-base">
            From diagnostics to full service upgrades — licensed, code-compliant electrical work for homes and businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href="tel:7204365746"
              className="group bg-gray-50 hover:bg-white border border-gray-200 hover:border-[#eea603]/60 rounded-xl p-6 transition-colors flex flex-col"
            >
              {service.image ? (
                <div className="flex justify-center mb-4">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={100}
                    height={100}
                    className="h-24 w-auto object-contain"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#082933]/5 group-hover:bg-[#eea603]/10 mb-4 transition-colors">
                  <svg className="w-8 h-8 text-[#eea603]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                </div>
              )}
              <h3 className="text-[#082933] font-bold text-lg mb-2 group-hover:text-[#eea603] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#393939]/70 text-sm leading-relaxed flex-1">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center text-[#eea603] text-sm font-medium">
                Request Estimate →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
