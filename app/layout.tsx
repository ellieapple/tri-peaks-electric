import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });
const sora = Sora({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Electrician Bailey CO | Tri Peaks Electric Service Inc.",
  description:
    "Licensed electrician in Bailey, CO serving Conifer, Evergreen, and West Metro Denver. Panel upgrades, EV chargers, generators, and residential or commercial electrical work.",
  keywords:
    "electrician Bailey CO, electrician Conifer CO, West Metro Denver electrician, EV charger installation Colorado, panel upgrade Bailey CO, 285 corridor electrician, residential electrician Park County, electrical service Jefferson County",
  metadataBase: new URL("https://tpeservice.net"),
  applicationName: "Tri Peaks Electric Service",
  category: "Home Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Tri Peaks Electric Service Inc. | Bailey Colorado Electrician",
    description:
      "Need a trusted electrician in Bailey, CO? Tri Peaks handles panel upgrades, EV chargers, generators, troubleshooting, and code-compliant installations.",
    url: "https://tpeservice.net",
    siteName: "Tri Peaks Electric Service Inc.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/TPEYeti.png",
        width: 1200,
        height: 630,
        alt: "Tri Peaks Electric Service Inc. — Bailey, CO Electrician",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tri Peaks Electric Service Inc.",
    description:
      "Local licensed electrician serving Bailey, Conifer, Evergreen, and the 285 Corridor.",
    images: ["/assets/Outside_Sauna.png"],
  },
  alternates: {
    canonical: "https://tpeservice.net",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

