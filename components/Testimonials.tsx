const testimonials = [
  {
    quote:
      "Quick response, clear pricing, and great work on our panel replacement. We finally feel safe with our electrical setup.",
    name: "M. Thompson",
    location: "Bailey, CO",
    service: "Panel Replacement",
  },
  {
    quote:
      "Tri Peaks wired our sauna and outdoor circuits exactly the way we needed. Professional from first call to final walkthrough.",
    name: "K. & R. Dawson",
    location: "Conifer, CO",
    service: "Outdoor Electrical",
  },
  {
    quote:
      "They installed our EV charger fast and explained everything clearly. Scheduling and communication were excellent.",
    name: "J. Herrera",
    location: "Evergreen, CO",
    service: "EV Charger Installation",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#082933] mb-3">
            What customers say
          </h2>
          <p className="text-[#393939]/70 text-base">
            Real feedback from homeowners across the 285 Corridor.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <article
              key={`${item.name}-${item.service}`}
              className="rounded-xl border border-gray-200 bg-gray-50 p-6"
            >
              <div className="mb-5 flex items-center gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg
                    key={idx}
                    className="w-5 h-5 text-[#eea603]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#393939] leading-relaxed mb-6">&ldquo;{item.quote}&rdquo;</p>
              <p className="text-[#082933] font-bold text-sm">{item.name}</p>
              <p className="text-[#393939]/60 text-sm">{item.location} &middot; {item.service}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
