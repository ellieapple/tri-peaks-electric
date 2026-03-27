import Image from "next/image";

const trustPoints = [
  {
    title: "Licensed & Insured in Colorado",
    description:
      "Fully licensed electrical contractor. All work performed to code with proper permitting when required.",
  },
  {
    title: "Ranked #1 Electrician in Bailey",
    description:
      "Top-ranked on Google for Bailey, CO. Trusted by homeowners and businesses across Park & Jefferson County.",
  },
  {
    title: "Residential & Commercial",
    description:
      "Whether it's a mountain cabin or a commercial office, we handle electrical for all property types.",
  },
  {
    title: "Creative Outdoor & Mountain Solutions",
    description:
      "Saunas, hot tubs, outdoor living, generators — we specialize in the unique electrical needs of Colorado mountain properties.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-[#0a3444]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — trust points */}
          <div>
            <span className="text-[#eea603] text-sm font-semibold uppercase tracking-widest">
              Why Tri Peaks
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-8">
              Why Choose Tri Peaks Electric?
            </h2>

            <div className="space-y-6">
              {trustPoints.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#eea603]/20 rounded-lg flex items-center justify-center">
                      <Image
                        src="/assets/yellow bolt.PNG"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5 object-contain"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">
                      {point.title}
                    </h3>
                    <p className="text-[#b7b6b6] text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Yeti + pull quote */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/TPEYetii.png"
              alt="Tri Peaks Electric Yeti mascot — Bailey CO licensed electrician"
              width={320}
              height={380}
              className="w-64 sm:w-72 h-auto drop-shadow-2xl mb-8"
            />
            <blockquote className="bg-[#082933] border-l-4 border-[#eea603] rounded-xl p-6 text-left w-full max-w-sm">
              <p className="text-[#eea603] font-extrabold text-xl mb-2">
                &ldquo;Powering Projects — Even in Winter&rdquo;
              </p>
              <footer className="text-[#b7b6b6] text-sm">
                — David Martinez, Owner &amp; Master Electrician
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
