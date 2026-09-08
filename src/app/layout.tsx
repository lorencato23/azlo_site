import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { site } from "@/data/site";

const fraunces = localFont({
  src: "./fonts/fraunces-latin.woff2",
  variable: "--font-fraunces",
  display: "swap",
});

const hanken = localFont({
  src: "./fonts/hanken-grotesk-latin.woff2",
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "AZLO | Engenharia para fluxos reais", template: "%s | AZLO" },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "AZLO | Engenharia para fluxos reais",
    description: site.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AZLO — engenharia para fluxos reais." }],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "AZLO | Engenharia para fluxos reais",
    description: site.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#052B57" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: "Alpha Zenith Life Optimization",
  url: site.url,
  logo: `${site.url}/logos/azlo-logo-real.png`,
  description: site.description,
  email: site.email,
  knowsAbout: ["Artificial intelligence", "Infrastructure", "Software engineering", "Automation", "Healthcare systems"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${hanken.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a className="skip-link" href="#main">Ir para o conteúdo principal</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
