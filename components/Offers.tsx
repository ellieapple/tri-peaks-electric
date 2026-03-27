const offers = [
  {
    title: "Veterans & Military",
    discount: "10% Off",
    description: "Active duty, veterans & military families. Thank you for your service.",
    pdf: "/assets/Offer - Military.pdf",
    icon: "🎖️",
    badge: "MILITARY",
  },
  {
    title: "New Customers",
    discount: "$40 Off",
    description: "First-time customers — save $40 on any electrical service.",
    pdf: "/assets/Offer - New Customer.pdf",
    icon: "⭐",
    badge: "NEW",
  },
  {
    title: "First Responders, Teachers & Seniors",
    discount: "10% Off",
    description:
      "Firefighters, EMTs, police, teachers & seniors — your community discount.",
    pdf: "/assets/Offer - Seniors.pdf",
    icon: "🏅",
    badge: "COMMUNITY",
  },
  {
    title: "Welcome Back",
    discount: "$25 Off",
    description: "Returning customers — save $25 on any service. We appreciate your loyalty.",
    pdf: "/assets/Offer - Welcome Back.pdf",
    icon: "🔄",
    badge: "LOYALTY",
  },
];

export default function Offers() {
  return (
    <section id="offers" className="py-20 bg-[#082933]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#eea603] text-sm font-semibold uppercase tracking-widest">
            Save Money
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
            Save With Our Special Offers
          </h2>
          <p className="text-[#b7b6b6] text-lg">
            Click any offer to view &amp; book — mention at time of service.
            Cannot be combined.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <a
              key={offer.title}
              href={offer.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#0a3444] border-2 border-[#eea603]/50 hover:border-[#eea603] rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#eea603]/20 cursor-pointer"
            >
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#eea603] text-[#082933] text-xs font-extrabold px-3 py-1 rounded-full tracking-wider">
                  {offer.badge}
                </span>
              </div>

              <div className="text-4xl mb-3 mt-2">{offer.icon}</div>
              <div className="text-[#eea603] font-extrabold text-3xl mb-2">
                {offer.discount}
              </div>
              <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                {offer.title}
              </h3>
              <p className="text-[#b7b6b6] text-sm leading-relaxed mb-4">
                {offer.description}
              </p>
              <span className="inline-block bg-[#eea603] group-hover:bg-yellow-400 text-[#082933] font-bold text-sm px-5 py-2 rounded-lg transition-colors">
                Claim Offer →
              </span>
            </a>
          ))}
        </div>

        <p className="text-center text-[#b7b6b6] text-sm mt-8">
          Must mention offer when booking. One offer per service visit. Call{" "}
          <a href="tel:7204365746" className="text-[#eea603] hover:underline">
            (720) 436-5746
          </a>{" "}
          to schedule.
        </p>
      </div>
    </section>
  );
}
