export const metadata: Metadata = {
  ...buildMetadata(),
  metadataBase: new URL("https://aditya-singh-portfolio-three.vercel.app"),
  title: "Aditya Singh | Accounts Executive & Financial Analyst",
  description:
    "Portfolio of Aditya Singh - Financial statement analysis, ERP ledger management, UAE VAT compliance, and capital markets.",
  openGraph: {
    title: "Aditya Singh | Accounts Executive & Financial Analyst",
    description:
      "Financial statement analysis, ERP ledger flow, UAE VAT compliance, and capital markets.",
    url: "https://aditya-singh-portfolio-three.vercel.app",
    siteName: "Aditya Singh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aditya Singh - Portfolio Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Singh | Accounts Executive & Financial Analyst",
    description:
      "Financial statement analysis, ERP ledger flow, UAE VAT compliance, and capital markets.",
    images: ["/og-image.png"],
  },
};
