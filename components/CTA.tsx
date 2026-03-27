export default function CTA() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#082933] relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#eea603]/5 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
          Don&apos;t Wait Until It&apos;s an <span className="text-[#eea603]">Emergency</span>
        </h2>
        <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
          Get a free estimate today — fast response from your local licensed electrician on the 285 Corridor.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="tel:7204365746"
            className="bg-[#eea603] hover:bg-[#d99400] text-[#082933] font-extrabold text-lg px-10 py-5 rounded-full transition-all duration-200 shadow-lg shadow-[#eea603]/20 hover:-translate-y-0.5"
          >
            📞 (720) 436-5746
          </a>
          <a
            href="mailto:David@TPEService.net"
            className="border-2 border-white/30 text-white hover:border-[#eea603] hover:text-[#eea603] font-bold text-lg px-10 py-5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
          >
            ✉️ Email for Free Estimate
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-white/60 text-sm font-medium">
          {["Free Estimates", "Licensed & Insured", "Same-Day Available", "No Surprise Pricing"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="text-[#eea603]">✓</span> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
