import type { Metadata, Viewport } from "next";
import { Oswald, Instrument_Sans } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ABJ Car Detailing | Premium Auto Detailing & Restoration Studio | Islamabad",
  description:
    "Islamabad's premier automotive detailing studio at Melody Market, Civic Centre, G-6 Markaz. Specializing in 9H/10H Ceramic Coating, Self-Healing PPF, Multi-Stage Paint Correction, and Bespoke Interior Detailing. 4.9★ Rated.",
  keywords: [
    "Car Detailing Islamabad",
    "Ceramic Coating Islamabad",
    "PPF Islamabad",
    "Paint Correction Islamabad",
    "ABJ Car Detailing",
    "G-6 Markaz Melody Market",
    "Auto Detailing Pakistan",
  ],
  authors: [{ name: "ABJ Car Detailing" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "ABJ Car Detailing | Showroom Precision Studio",
    description: "Flawless mirror finish paint correction, self-healing PPF, and ceramic coatings in Islamabad.",
    type: "website",
    locale: "en_PK",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1016",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${instrument.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#EDF3F8] text-[#1e293b] font-sans selection:bg-[#0077EE]/20 selection:text-[#0077EE]">
        {children}
      </body>
    </html>
  );
}
