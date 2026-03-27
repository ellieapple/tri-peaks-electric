export default function CTA() {
  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #082933 0%, #0a3d52 50%, #082933 100%)" }}
    >
      {/* Gold bolt decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: "#eea603" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: "#eea603" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[#eea603] text-sm font-semibold uppercase tracking-widest">
          Get Started Today
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-[#b7b6b6] mb-10 max-w-2xl mx-auto">
          Call or book online today. We serve Bailey, Conifer, Evergreen, and
          the entire 285 Corridor. Fast response — licensed &amp; insured.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="tel:7204365746"
            className="bg-[#eea603] hover:bg-yellow-400 text-[#082933] font-extrabold text-xl px-10 py-5 rounded-xl transition-all duration-200 shadow-2xl hover:shadow-yellow-400/40 hover:-translate-y-1"
          >
            📞 Call (720) 436-5746
          </a>
          <a
            href="mailto:David@TPEService.net"
            className="border-2 border-[#eea603] text-[#eea603] hover:bg-[#eea603] hover:text-[#082933] font-extrabold text-xl px-10 py-5 rounded-xl transition-all duration-200 hover:-translate-y-1"
          >
            ✉️ Email Us
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-[#b7b6b6] text-sm">
          <span className="flex items-center gap-2">
            <span className="text-[#eea603]">✓</span> Free Estimates
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#eea603]">✓</span> Licensed & Insured
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#eea603]">✓</span> Same-Day Available
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#eea603]">✓</span> No Surprise Pricing
          </span>
        </div>
      </div>
    </section>
  );
}
