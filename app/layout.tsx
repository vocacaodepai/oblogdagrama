import type { Metadata, Viewport } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { AdSenseLoader } from "@/components/AdSenseLoader";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { site } from "@/lib/articles";
import { author } from "@/lib/author";
import { safeJsonLd } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
// Google Analytics 4. O ID do blog é o padrão; NEXT_PUBLIC_GA_ID na Vercel sobrescreve, e
// definir a variável vazia desliga o Analytics. Só carrega depois do aceite do aviso de cookies.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-Q5HXEVFZEJ";
// Google Search Console, verificação por meta tag (propriedade "prefixo do URL"). É opcional:
// a verificação por domínio usa registro TXT no DNS e não passa pelo código. Para usar a tag,
// defina NEXT_PUBLIC_GSC_VERIFICATION na Vercel com o token (sem o prefixo "google-site-verification=").
const SEARCH_CONSOLE_TOKEN = process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "";

// Aplica o tema salvo antes da primeira pintura (evita "flash" ao trocar de tema).
const THEME_INIT = `(function(){try{var t=localStorage.getItem("obdg-theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...(SEARCH_CONSOLE_TOKEN ? { verification: { google: SEARCH_CONSOLE_TOKEN } } : {}),
  title: {
    default: `${site.name}: ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: author.name, url: `${site.url}${author.url}` }],
  creator: author.name,
  publisher: site.name,
  category: "home and garden",
  keywords: [
    "grama",
    "gramado",
    "tipos de grama",
    "grama esmeralda",
    "como plantar grama",
    "como cuidar da grama",
    "adubo para grama",
    "grama amarelada",
    "grama sintética",
    "cortador de grama",
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: `${site.name}: ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}: ${site.tagline}`,
    description: site.description,
  },
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
  alternates: {
    types: { "application/rss+xml": `${site.url}/feed.xml` },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f9f1" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1a11" },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: {
    "@type": "ImageObject",
    url: `${site.url}/logo-icon-dark.svg`,
    width: 512,
    height: 512,
  },
  founder: {
    "@type": "Person",
    name: author.name,
    url: `${site.url}${author.url}`,
    image: `${site.url}${author.image}`,
  },
  foundingDate: String(site.foundingYear),
  email: author.email,
  inLanguage: "pt-BR",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  description: site.description,
  inLanguage: "pt-BR",
  publisher: { "@id": `${site.url}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${site.url}/busca?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${nunito.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        {ADSENSE_CLIENT && <meta name="google-adsense-account" content={ADSENSE_CLIENT} />}
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent enabled={Boolean(ADSENSE_CLIENT || GA_ID)} />
        <AdSenseLoader client={ADSENSE_CLIENT} />
        <GoogleAnalytics id={GA_ID || undefined} />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd([organizationJsonLd, websiteJsonLd]) }}
        />
      </body>
    </html>
  );
}
