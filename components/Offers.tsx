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


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Current Discounts
          </h2>
          <p className="text-white/60 text-base">
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
              className={`group relative rounded-xl p-6 text-center transition-colors cursor-pointer overflow-hidden ${
                offer.featured
                  ? "bg-gradient-to-br from-[#eea603] to-[#d99400] ring-2 ring-[#eea603] shadow-xl shadow-[#eea603]/20"
                  : "bg-white/5 border border-white/10 hover:border-[#eea603]/50"
              }`}
            >
              <div className={`text-xs font-bold uppercase tracking-wide mb-4 ${
                offer.featured ? "text-[#082933]/70" : "text-[#eea603]"
              }`}>
                {offer.badge}
              </div>

              <div className={`font-bold text-3xl mb-2 ${
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
              <span className={`inline-block font-bold text-sm px-5 py-2.5 rounded-lg transition-colors ${
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
            className="inline-flex items-center justify-center bg-[#eea603] text-[#082933] font-bold px-7 py-3 rounded-lg hover:bg-[#d99400] transition-colors"
          >
            Call to Book and Apply Offer
          </a>
        </div>
      </div>
    </section>
  );
}
