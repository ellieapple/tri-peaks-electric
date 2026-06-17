import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Specials from "@/components/Specials";
import Services from "@/components/Services";
import Offers from "@/components/Offers";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import ServiceArea from "@/components/ServiceArea";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ElectricalContractor"],
      "@id": "https://tpeservice.net/#business",
      name: "Tri Peaks Electric Service Inc.",
      alternateName: "TPE Service",
      description:
        "Licensed & insured electrician in Bailey, CO serving Conifer, Evergreen, West Metro Denver and the 285 Corridor. Specializing in panel upgrades, EV chargers, generators, and outdoor electrical.",
      url: "https://tpeservice.net",
      telephone: "+17204365746",
      email: "David@TPEService.net",
      image: "https://tpeservice.net/assets/TPEYeti.png",
      logo: "https://tpeservice.net/assets/TriPeaksService_CircleLogo.png",
      founder: {
        "@type": "Person",
        name: "David Martinez",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bailey",
        addressRegion: "CO",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Bailey" },
        { "@type": "City", name: "Conifer" },
        { "@type": "City", name: "Evergreen" },
        { "@type": "City", name: "Indian Hills" },
        { "@type": "City", name: "Pine" },
        { "@type": "City", name: "Morrison" },
        { "@type": "City", name: "Fairplay" },
        { "@type": "AdministrativeArea", name: "Jefferson County" },
        { "@type": "AdministrativeArea", name: "Park County" },
        { "@type": "City", name: "West Metro Denver" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Electrical Services & Specials",
        itemListElement: [
          {
            "@type": "Offer",
            name: "30A 240V Generator Inlet Installation Special",
            price: "1100",
            priceCurrency: "USD",
            availability: "https://schema.org/LimitedAvailability",
            itemOffered: {
              "@type": "Service",
              name: "30A 240V Generator Inlet Installation",
              provider: { "@id": "https://tpeservice.net/#business" },
            },
          },
          {
            "@type": "Offer",
            name: "50A 240V Generator Inlet Installation Special",
            price: "1300",
            priceCurrency: "USD",
            availability: "https://schema.org/LimitedAvailability",
            itemOffered: {
              "@type": "Service",
              name: "50A 240V Generator Inlet Installation",
              provider: { "@id": "https://tpeservice.net/#business" },
            },
          },
          {
            "@type": "Offer",
            name: "EV Charger Outlet Installation Special",
            price: "1000",
            priceCurrency: "USD",
            availability: "https://schema.org/LimitedAvailability",
            itemOffered: {
              "@type": "Service",
              name: "50A 240V EV Charger Outlet Installation",
              provider: { "@id": "https://tpeservice.net/#business" },
            },
          },
          {
            "@type": "Offer",
            name: "Hot Tub Hookup Special",
            price: "1300",
            priceCurrency: "USD",
            availability: "https://schema.org/LimitedAvailability",
            itemOffered: {
              "@type": "Service",
              name: "Hot Tub Electrical Hookup with Dedicated Circuit & GFCI",
              provider: { "@id": "https://tpeservice.net/#business" },
            },
          },
          {
            "@type": "Offer",
            name: "Panel Replacement Special",
            price: "2500",
            priceCurrency: "USD",
            availability: "https://schema.org/LimitedAvailability",
            itemOffered: {
              "@type": "Service",
              name: "100A Electrical Panel Replacement with Surge Protection",
              provider: { "@id": "https://tpeservice.net/#business" },
            },
          },
          {
            "@type": "Offer",
            name: "200A Service Upgrade Special",
            price: "5000",
            priceCurrency: "USD",
            availability: "https://schema.org/LimitedAvailability",
            itemOffered: {
              "@type": "Service",
              name: "200A Electrical Service Upgrade with Permit",
              provider: { "@id": "https://tpeservice.net/#business" },
            },
          },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Repairs & Troubleshooting" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lighting Installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remodels & Additions" } },
        ],
      },
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "18:00",
      },
      sameAs: ["https://tpeservice.net"],
    },
    {
      "@type": "WebSite",
      "@id": "https://tpeservice.net/#website",
      url: "https://tpeservice.net",
      name: "Tri Peaks Electric Service Inc.",
      publisher: { "@id": "https://tpeservice.net/#business" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://tpeservice.net/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does EV charger installation cost in Bailey CO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tri Peaks Electric Service offers EV charger outlet installation starting at $1,000. This includes a 50A 240V outlet and box, rated conduit, wire, and a dedicated breaker. Call (720) 436-5746 for details.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a panel replacement cost in Bailey CO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Panel replacement with Tri Peaks Electric Service starts at $2,500. This includes a new 100A panel, wiring up to 18 circuits, all new breakers, whole-home surge protection, and a 1-year parts & labor warranty.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can Tri Peaks respond to service calls?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most requests in Bailey, Conifer, and Evergreen can be scheduled quickly, and same-day service is available for many jobs.",
          },
        },
        {
          "@type": "Question",
          name: "Do you handle permits and code-compliant installations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Tri Peaks performs licensed, code-compliant work and handles permitting when required. The 200A service upgrade special includes the permit at no extra charge.",
          },
        },
        {
          "@type": "Question",
          name: "Can you install EV chargers and panel upgrades together?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We evaluate your existing service, recommend upgrades if needed, and install a dedicated EV charging circuit. Both are available as fixed-price specials.",
          },
        },
        {
          "@type": "Question",
          name: "What areas do you serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tri Peaks serves Bailey, Conifer, Evergreen, Indian Hills, Pine, Morrison, Fairplay, Jefferson County, Park County, and West Metro Denver.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Specials />
        <Services />
        <Offers />
        <Gallery />
        <WhyUs />
        <ServiceArea />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
