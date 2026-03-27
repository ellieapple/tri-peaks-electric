const areas = [
  "Bailey", "Conifer", "Evergreen", "Indian Hills", "Pine", "Morrison",
  "Fairplay", "Jefferson County", "Park County", "West Metro Denver",
];

export default function ServiceArea() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#eea603] text-sm font-extrabold uppercase tracking-[0.2em]">
            Service Area
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082933] mt-3 mb-4">
            Serving the 285 Corridor &amp; Beyond
          </h2>
          <p className="text-[#393939]/70 text-lg max-w-xl mx-auto">
            Based in Bailey, CO — we serve the entire 285 Corridor from West Metro Denver to Park County.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {areas.map((area) => (
            <span
              key={area}
              className="bg-white border border-gray-200 hover:border-[#eea603] text-[#082933] text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm hover:shadow-md"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="tel:7204365746"
            className="bg-[#eea603] hover:bg-[#d99400] text-[#082933] font-extrabold text-lg px-8 py-4 rounded-full inline-block transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            Call Your Local Electrician
          </a>
        </div>
      </div>
    </section>
  );
}
