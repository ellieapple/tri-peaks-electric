import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Offers from "@/components/Offers";
import Specials from "@/components/Specials";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ServiceArea from "@/components/ServiceArea";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const faqItems = [
  {
    question: "How quickly can Tri Peaks respond to service calls?",
    answer:
      "Most requests in Bailey, Conifer, and Evergreen can be scheduled quickly, and same-day service is available for many jobs.",
  },
  {
    question: "Do you handle permits and code-compliant installations?",
    answer:
      "Yes. Tri Peaks performs licensed, code-compliant work and handles permitting when required for your project.",
  },
  {
    question: "Can you install EV chargers and panel upgrades together?",
    answer:
      "Absolutely. We evaluate your existing service, recommend upgrades if needed, and install a dedicated EV charging circuit.",
  },
  {
    question: "Do you provide upfront pricing and free estimates?",
    answer:
      "Yes. You can review posted specials and request a free estimate for custom projects before scheduling work.",
  },
];

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
        name: "Electrical Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Repairs & Troubleshooting" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Panel Upgrades & Replacements" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "EV Charger Installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lighting Installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Backup Power & Generators" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remodels & Additions" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hot Tub Wiring" } },
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
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
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
        <Services />
        <Offers />
        <Specials />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <ServiceArea />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
