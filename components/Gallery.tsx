import Image from "next/image";

const photos = [
  {
    src: "/assets/Outside Sauna.png",
    alt: "Outdoor sauna electrical hookup — Tri Peaks Electric Service, Bailey CO",
    caption: "Outdoor Sauna Electrical Hookup",
    location: "Bailey, CO",
  },
  {
    src: "/assets/hexigon office.png",
    alt: "Commercial office electrical installation — Tri Peaks Electric Service",
    caption: "Commercial Office Electrical",
    location: "Jefferson County, CO",
  },
  {
    src: "/assets/ChatGPT Image Feb 20, 2026, 12_40_33 PM.png",
    alt: "Tri Peaks Electric Service job site — licensed electrician Colorado",
    caption: "Residential Panel Upgrade",
    location: "Conifer, CO",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-[#082933]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#eea603] text-sm font-semibold uppercase tracking-widest">
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
            Real Work. Real Results.
          </h2>
          <p className="text-[#b7b6b6] text-lg max-w-2xl mx-auto">
            Every job done right — from mountain cabins to commercial
            properties. See what Tri Peaks Electric delivers across the 285
            Corridor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="group relative rounded-2xl overflow-hidden border border-[#eea603]/20 hover:border-[#eea603]/60 transition-all duration-300"
            >
              <div className="aspect-[4/3] relative bg-[#0a3444]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082933]/80 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-base">{photo.caption}</p>
                <p className="text-[#eea603] text-sm flex items-center gap-1">
                  📍 {photo.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-[#b7b6b6] mb-4">
            Want to see more? Follow us or call to discuss your project.
          </p>
          <a
            href="tel:7204365746"
            className="border-2 border-[#eea603] text-[#eea603] hover:bg-[#eea603] hover:text-[#082933] font-bold px-8 py-3 rounded-xl inline-block transition-all duration-200"
          >
            📞 (720) 436-5746
          </a>
        </div>
      </div>
    </section>
  );
}
