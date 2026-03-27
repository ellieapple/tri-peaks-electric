import Image from "next/image";

const photos = [
  // Original 3 — top row (clickable)
  {
    src: "/assets/Outside_Sauna.png",
    alt: "Outdoor sauna electrical hookup — Tri Peaks Electric, Bailey CO",
    title: "Outdoor Sauna Hookup",
    location: "Bailey, CO",
    tag: "Outdoor",
    link: true,
  },
  {
    src: "/assets/hexigon_office.png",
    alt: "Commercial office electrical — Tri Peaks Electric Service",
    title: "Commercial Office Electrical",
    location: "Jefferson County, CO",
    tag: "Commercial",
    link: true,
  },
  {
    src: "/assets/ChatGPT_Image.png",
    alt: "Residential panel upgrade — licensed electrician Colorado",
    title: "Residential Panel Upgrade",
    location: "Conifer, CO",
    tag: "Residential",
    link: true,
  },
  // New photos — bottom 6
  {
    src: "/assets/Panel_Multimeter_2.png",
    alt: "Electrician testing electrical panel with multimeter — Tri Peaks Electric, Bailey CO",
    title: "Panel Troubleshooting",
    location: "Bailey, CO",
    tag: "Residential",
  },
  {
    src: "/assets/Recessed_Lighting.png",
    alt: "Recessed lighting installation — licensed electrician Evergreen CO",
    title: "Recessed Lighting Install",
    location: "Evergreen, CO",
    tag: "Lighting",
  },
  {
    src: "/assets/Outlet_Wiring.png",
    alt: "Outlet wiring and junction box — Tri Peaks Electric Service",
    title: "Outlet & Junction Box Wiring",
    location: "Conifer, CO",
    tag: "Residential",
  },
  {
    src: "/assets/Roughin_Tools.png",
    alt: "Electrical rough-in tools and wiring — Tri Peaks Electric remodel",
    title: "Remodel Rough-In",
    location: "Jefferson County, CO",
    tag: "Remodel",
  },
  {
    src: "/assets/Roughin_Outlets.jpg",
    alt: "Rough-in wiring with outlets in open wall — Tri Peaks Electric",
    title: "Rough-In Outlet Wiring",
    location: "Conifer, CO",
    tag: "Remodel",
  },
  {
    src: "/assets/Roughin_Framing.jpg",
    alt: "Framing rough-in with outlet boxes — residential electrician Colorado",
    title: "Framing Stage Rough-In",
    location: "Bailey, CO",
    tag: "Remodel",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="pt-10 sm:pt-14 pb-20 sm:pb-28 bg-white">
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
          {photos.map((photo) => {
            const inner = (
              <>
                <div className="aspect-[4/3] relative">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#eea603] text-[#082933] text-xs font-extrabold px-3 py-1 rounded-full">
                      {photo.tag}
                    </span>
                  </div>
                </div>
                {photo.link && (
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-bold text-lg">{photo.title}</h3>
                    <p className="text-white/70 text-sm">{photo.location}</p>
                  </div>
                )}
              </> 
            );
            const cls = "group relative rounded-2xl overflow-hidden bg-gray-100 shadow-md hover:shadow-2xl transition-all duration-500";
            return photo.link ? (
              <a key={photo.src} href={photo.src} target="_blank" rel="noopener noreferrer" className={cls + " cursor-zoom-in"}>{inner}</a>
            ) : (
              <div key={photo.src} className={cls}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
