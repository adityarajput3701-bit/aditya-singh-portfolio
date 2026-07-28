import type { Metadata } from "next";
import { siteContent } from "@/config/content";

// Set NEXT_PUBLIC_SITE_URL in your deployment environment (e.g. Vercel project
// settings) to your real domain once you have one. This fallback is intentionally
// obvious rather than a guessed real-looking URL.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

const { person, socials } = siteContent;
const fullName = `${person.firstName} ${person.lastName}`;
const title = `${fullName} — ${person.role}`;
const description = `${fullName} — ${person.role} at ${person.org}, Dubai. ${person.tagline}`;

export function buildMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s — ${fullName}`,
    },
    description,
    alternates: {
      canonical: SITE_URL,
    },
    openGraph: {
      title,
      description,
      url: SITE_URL,
      type: "website",
      images: [{ url: "/og-image.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function buildPersonJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: fullName,
    jobTitle: person.role,
    worksFor: { "@type": "Organization", name: person.org, url: person.orgHref },
    address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
    email: "mailto:adityarajput3701@gmail.com",
    url: SITE_URL,
    sameAs: socials.map((s) => s.href),
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Maharishi Markandeshwar (Deemed to be University)",
      },
    ],
  };
}
