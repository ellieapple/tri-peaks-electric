const faqs = [
  {
    q: "How quickly can Tri Peaks respond to service calls?",
    a: "Most requests in Bailey, Conifer, and Evergreen can be scheduled quickly, and same-day service is available for many jobs.",
  },
  {
    q: "Do you handle permits and code-compliant installations?",
    a: "Yes. Tri Peaks performs licensed, code-compliant work and handles permitting when required for your project.",
  },
  {
    q: "Can you install EV chargers and panel upgrades together?",
    a: "Absolutely. We evaluate your existing service, recommend upgrades if needed, and install a dedicated EV charging circuit.",
  },
  {
    q: "Do you provide upfront pricing and free estimates?",
    a: "Yes. You can review posted specials and request a free estimate for custom projects before scheduling work.",
  },
  {
    q: "What areas do you serve?",
    a: "Tri Peaks serves Bailey, Conifer, Evergreen, Indian Hills, Pine, Morrison, Fairplay, Jefferson County, Park County, and West Metro Denver.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#eea603] text-sm font-extrabold uppercase tracking-[0.2em]">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#082933] mt-3 mb-3">
            Common Questions
          </h2>
          <p className="text-[#393939]/70 text-lg">
            Quick answers to the most common service and scheduling questions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-gray-200 bg-white p-5 open:border-[#eea603]"
            >
              <summary className="list-none cursor-pointer flex items-start justify-between gap-4">
                <span className="text-[#082933] font-bold text-lg">{item.q}</span>
                <span className="text-[#eea603] font-black text-2xl leading-none group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-[#393939]/80 mt-4 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
