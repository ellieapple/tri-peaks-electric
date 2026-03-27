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
    <section className="py-20 sm:py-28 bg-[#082933]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why people call Tri Peaks
            </h2>
            <div className="space-y-6">
              {trustPoints.map((point) => (
                <div key={point.title}>
                  <h3 className="text-white font-semibold text-lg mb-1">{point.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <Image
              src="/assets/TPEYetii.png"
              alt="Tri Peaks Electric Yeti mascot"
              width={320}
              height={380}
              className="w-48 sm:w-56 h-auto"
            />
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {[
                { n: "10+", l: "Years Experience" },
                { n: "500+", l: "Jobs Completed" },
              ].map((s) => (
                <div key={s.l} className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-[#eea603] font-bold text-2xl">{s.n}</div>
                  <div className="text-white/55 text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
