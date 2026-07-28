import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { buildMetadata, buildPersonJsonLd } from "@/lib/seo";
import { SkipLink } from "@/components/layout/SkipLink";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import CanvasRoot from "@/components/three/CanvasRootClient";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({ children }: { children: ReactNode }) {
  const personJsonLd = buildPersonJsonLd();

  return (
    <html 
      lang="en" 
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="font-body bg-[#050608] text-[#edeff3] antialiased min-h-screen relative overflow-x-hidden selection:bg-[#e8a94a] selection:text-[#050608]">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger -- structured data must be raw JSON
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SkipLink />
        <LoadingScreen />
        <CanvasRoot />
        <ScrollProgressBar />
        <CursorGlow />
        <Navbar />
        <main id="main-content" className="relative z-10 w-full min-h-screen">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
