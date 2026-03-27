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
    title: "Residential Panel Upgrade",
    location: "Conifer, CO",
    tag: "Residential",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#eea603] text-sm font-extrabold uppercase tracking-[0.2em]">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082933] mt-3 mb-4">
            Featured Projects
          </h2>
          <p className="text-[#393939]/70 text-lg max-w-xl mx-auto">
            See the quality electrical work we&apos;ve completed across the 285 Corridor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="group relative rounded-2xl overflow-hidden bg-gray-100 shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#eea603] text-[#082933] text-xs font-extrabold px-3 py-1 rounded-full">
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
      </div>
    </section>
  );
}
