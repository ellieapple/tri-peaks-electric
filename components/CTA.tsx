export default function CTA() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#082933]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to get started?
        </h2>
        <p className="text-base text-white/65 mb-8 max-w-lg mx-auto">
          Call or email and we&apos;ll scope your project, walk through options, and get you scheduled.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:7204365746"
            className="bg-[#eea603] hover:bg-[#d99400] text-[#082933] font-bold text-base px-8 py-3.5 rounded-lg transition-colors"
          >
            (720) 436-5746
          </a>
          <a
            href="mailto:David@TPEService.net"
            className="border border-white/30 text-white hover:border-white/60 font-medium text-base px-8 py-3.5 rounded-lg transition-colors"
          >
            David@TPEService.net
          </a>
        </div>
      </div>
    </section>
  );
}
