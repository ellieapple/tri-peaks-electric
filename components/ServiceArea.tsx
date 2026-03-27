const areas = [
  "Bailey", "Conifer", "Evergreen", "Indian Hills", "Pine", "Morrison",
  "Fairplay", "Jefferson County", "Park County", "West Metro Denver",
];

export default function ServiceArea() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#082933] mb-3">
            Service Area
          </h2>
          <p className="text-[#393939]/70 text-base max-w-lg mx-auto">
            Based in Bailey, CO. We serve mountain communities and West Metro Denver.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {areas.map((area) => (
            <span
              key={area}
              className="bg-white border border-gray-200 text-[#082933] text-sm font-medium px-4 py-2 rounded-lg"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-[#393939]/60 text-sm mb-4">Most quotes returned within 24 hours</p>
          <a
            href="tel:7204365746"
            className="text-[#082933] font-medium text-sm hover:text-[#eea603] transition-colors"
          >
            Call your local electrician →
          </a>
        </div>
      </div>
    </section>
  );
}
