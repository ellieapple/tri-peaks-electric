const offers = [
  {
    title: "Veterans & Military",
    discount: "10% Off",
    subtitle: "Active duty, veterans & military families",
    pdf: "/assets/Offer_Military.pdf",
    badge: "MILITARY",
    color: "from-[#082933] to-[#0a3d52]",
  },
  {
    title: "New Customers",
    discount: "$40 Off",
    subtitle: "First-time customers — save on any service",
    pdf: "/assets/Offer_New_Customer.pdf",
    badge: "NEW CLIENT",
    color: "from-[#eea603] to-[#d99400]",
    featured: true,
  },
  {
    title: "First Responders, Teachers & Seniors",
    discount: "10% Off",
    subtitle: "Community heroes & seniors discount",
    pdf: "/assets/Offer_Seniors.pdf",
    badge: "COMMUNITY",
    color: "from-[#082933] to-[#0a3d52]",
  },
  {
    title: "Welcome Back",
    discount: "$25 Off",
    subtitle: "Returning customer loyalty discount",
    pdf: "/assets/Offer_Welcome_Back.pdf",
    badge: "LOYALTY",
    color: "from-[#082933] to-[#0a3d52]",
  },
];

export default function Offers() {
  return (
    <section id="offers" className="py-20 sm:py-28 bg-[#082933] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#eea603]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#eea603] text-sm font-extrabold uppercase tracking-[0.2em]">
            Current Discounts
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-3">
            Save on Your Next
            <span className="text-[#eea603]"> Electrical Project</span>
          </h2>
          <p className="text-white/60 text-lg">
            Download your coupon and mention it when booking.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {offers.map((offer) => (
            <a
              key={offer.title}
              href={offer.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer overflow-hidden ${
                offer.featured
                  ? "bg-gradient-to-br from-[#eea603] to-[#d99400] ring-2 ring-[#eea603] shadow-xl shadow-[#eea603]/20"
                  : "bg-white/5 border border-white/10 hover:border-[#eea603]/50"
              }`}
            >
              {/* badge */}
              <div className={`text-xs font-extrabold uppercase tracking-wider mb-4 ${
                offer.featured ? "text-[#082933]/70" : "text-[#eea603]"
              }`}>
                {offer.badge}
              </div>

              <div className={`font-black text-4xl mb-2 ${
                offer.featured ? "text-[#082933]" : "text-white"
              }`}>
                {offer.discount}
              </div>
              <h3 className={`font-bold text-base mb-2 leading-tight ${
                offer.featured ? "text-[#082933]" : "text-white"
              }`}>
                {offer.title}
              </h3>
              <p className={`text-sm mb-5 ${
                offer.featured ? "text-[#082933]/70" : "text-white/50"
              }`}>
                {offer.subtitle}
              </p>
              <span className={`inline-block font-extrabold text-sm px-5 py-2.5 rounded-full transition-all ${
                offer.featured
                  ? "bg-[#082933] text-white group-hover:bg-[#082933]/90"
                  : "bg-[#eea603] text-[#082933] group-hover:bg-[#d99400]"
              }`}>
                View Coupon →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="tel:7204365746"
            className="inline-flex items-center justify-center bg-[#eea603] text-[#082933] font-extrabold px-8 py-3 rounded-full hover:bg-[#d99400] transition-colors"
          >
            Call to Book and Apply Offer
          </a>
        </div>
      </div>
    </section>
  );
}
