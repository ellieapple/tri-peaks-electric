import Image from "next/image";

const photos = [
  {
    src: "/assets/Outside_Sauna.png",
    alt: "Outdoor sauna electrical hookup — Tri Peaks Electric, Bailey CO",
    title: "Outdoor Sauna Hookup",
    location: "Bailey, CO",
    tag: "Outdoor",
  },
  {
    src: "/assets/hexigon_office.png",
    alt: "Commercial office electrical — Tri Peaks Electric Service",
    title: "Commercial Office Electrical",
    location: "Jefferson County, CO",
    tag: "Commercial",
  },
  {
    src: "/assets/ChatGPT_Image.png",
    alt: "Residential panel upgrade — licensed electrician Colorado",
    title: "Year-Round Electrical Service",
    location: "285 Corridor, CO",
    tag: "Residential",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#082933] mb-3">
            Recent Projects
          </h2>
          <p className="text-[#393939]/70 text-base">
            A few recent jobs across Bailey, Conifer, Evergreen, and the surrounding area.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="group relative rounded-xl overflow-hidden bg-gray-100"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-[#082933] text-xs font-semibold px-2.5 py-1 rounded">
                    {photo.tag}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-bold text-lg">{photo.title}</h3>
                <p className="text-white/70 text-sm">{photo.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="tel:7204365746"
            className="text-[#082933] font-medium text-sm hover:text-[#eea603] transition-colors"
          >
            Have a project like this? Let&apos;s talk →
          </a>
        </div>
      </div>
    </section>
  );
}
