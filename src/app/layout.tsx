import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

const siteUrl = "https://azlo-site.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AZLO | Ideias que ganham forma",
  description:
    "AZLO desenvolve sistemas, ferramentas e experiências nas interseções entre saúde, tecnologia, educação e ciência.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "AZLO",
    title: "AZLO | Ideias que ganham forma",
    description:
      "Conhecimento complexo, organizado em sistemas, ferramentas e experiências úteis.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AZLO — Ideias que ganham forma.",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "AZLO | Ideias que ganham forma",
    description:
      "Saúde, tecnologia, educação e ciência conectadas por clareza, critério e construção.",
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
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#052B57",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Brand",
  "@id": `${siteUrl}/#brand`,
  name: "AZLO",
  alternateName: "Alpha Zenith Life Optimization",
  url: siteUrl,
  slogan: "Ideias que ganham forma.",
  description:
    "Sistemas, ferramentas e experiências nas interseções entre saúde, tecnologia, educação e ciência.",
  knowsAbout: ["Health", "Technology", "Education", "Science"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${hanken.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-azlo-ice text-azlo-graphite">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-azlo-teal focus:text-azlo-navy focus:rounded focus:text-sm focus:font-semibold"
        >
          Ir para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
