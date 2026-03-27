import Image from "next/image";

const services = [
  {
    title: "Electrical Repairs & Troubleshooting",
    description: "Outlet/switch repairs, breaker issues, diagnostics & electrical fault-finding.",
    image: "/assets/Yeti_Meter.png",
    imageAlt: "Electrician diagnostics — electrical troubleshooting Bailey CO",
  },
  {
    title: "Lighting Installation",
    description: "Indoor/outdoor, recessed, LED upgrades, security & landscape lighting.",
    image: null,
    imageAlt: "",
  },
  {
    title: "Panel Upgrades & Replacements",
    description: "Full panel replacements, 200A service upgrades & subpanel installation.",
    image: "/assets/Yeti_Electrical_Panel.png",
    imageAlt: "Panel upgrade electrician — service upgrade Bailey CO",
  },
  {
    title: "Backup Power & Generators",
    description: "Standby/portable generators, transfer switches, whole-home backup power.",
    image: null,
    imageAlt: "",
  },
  {
    title: "EV Charger Installation",
    description: "Level 2 chargers, 50A 240V outlets — Tesla, Ford, Rivian & all EV brands.",
    image: "/assets/Yeti_EV_Charger.png",
    imageAlt: "EV charger installation — electric vehicle charging Colorado",
  },
  {
    title: "Remodels & Additions",
    description: "Basement finishing, kitchen remodels, additions — full wiring rough-in to finish.",
    image: "/assets/Yeti_Electrical_Cord.png",
    imageAlt: "Electrical remodel wiring — home addition electrician Colorado",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#eea603] text-sm font-extrabold uppercase tracking-[0.2em]">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082933] mt-3 mb-4">
            Our Electrical Services
          </h2>
          <p className="text-[#393939]/70 text-lg max-w-xl mx-auto">
            Full-service licensed electrician for homes &amp; businesses along the 285 Corridor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href="tel:7204365746"
              className="group bg-white border border-gray-200 shadow-md hover:border-[#eea603] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#eea603]/10 flex flex-col"
            >
              {service.image ? (
                <div className="flex justify-center mb-5">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={100}
                    height={100}
                    className="h-24 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center h-24 mb-5">
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[#082933]/5 group-hover:bg-[#eea603]/10 transition-colors">
                    <svg className="w-10 h-10 text-[#eea603]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                  </div>
                </div>
              )}
              <h3 className="text-[#082933] font-bold text-lg mb-2 group-hover:text-[#eea603] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#393939]/70 text-sm leading-relaxed flex-1">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center text-[#eea603] text-sm font-bold group-hover:gap-2 gap-1 transition-all">
                Get a Quote <span>→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
