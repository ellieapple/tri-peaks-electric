import Image from "next/image";

const trustPoints = [
  {
    title: "Local Bailey Experts",
    description: "Born & raised in Colorado. We understand mountain properties, weather, and local codes.",
  },
  {
    title: "Ranked #1 in Bailey",
    description: "Top-ranked on Google. Trusted by homeowners & businesses across Park & Jefferson County.",
  },
  {
    title: "Fast Same-Day Service",
    description: "Minimal disruption. Most jobs completed same-day or next-day. Emergency service available.",
  },
  {
    title: "Satisfaction Guaranteed",
    description: "We stand behind every project. Licensed, insured, and done right — guaranteed.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 sm:py-28 bg-[#082933] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZ2LTZoNnptMC0zMHY2aC02VjRoNnptMzAgMzB2NmgtNnYtNmg2ek02IDM0djZIMHYtNmg2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#eea603] text-sm font-extrabold uppercase tracking-[0.2em]">
            Why Tri Peaks
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            Why Homeowners Keep Choosing{" "}
            <span className="text-[#eea603]">Electrical Experts</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-[#eea603]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{point.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Stats + Yeti */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/assets/TPEYetii.png"
              alt="Tri Peaks Electric Yeti mascot"
              width={320}
              height={380}
              className="w-56 sm:w-64 h-auto drop-shadow-2xl"
            />
          </div>
          <div>
            <blockquote className="border-l-4 border-[#eea603] pl-6 mb-8">
              <p className="text-[#eea603] font-black text-2xl sm:text-3xl mb-3 leading-tight">
                &ldquo;Powering Projects - Even in Winter&rdquo;
              </p>
              <footer className="text-white/60 text-sm">
                David Martinez, Owner &amp; Master Electrician
              </footer>
            </blockquote>

            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "#1", l: "Ranked in Bailey" },
                { n: "10+", l: "Years Experience" },
                { n: "500+", l: "Jobs Completed" },
                { n: "100%", l: "Satisfaction Rate" },
              ].map((s) => (
                <div key={s.l} className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-[#eea603] font-black text-2xl">{s.n}</div>
                  <div className="text-white/60 text-xs font-medium">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
