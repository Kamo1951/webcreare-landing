import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "./components/footer/Footer";
import ThemeSwitch from "./components/carousel/ThemeSwitch";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webcreare.de"),
  title: {
    default: "Webcreare – Webdesign & Entwicklung aus Tegernsee",
    template: "%s | Webcreare",
  },
  description:
    "Webcreare ist eine junge Agentur aus Tegernsee für schnelle, saubere Websites – Design, Entwicklung, Hosting, Wartung & Fotografie. Klar. Sicher. Leistungsstark.",
  applicationName: "Webcreare",
  category: "business",
  keywords: [
    "Webdesign Tegernsee",
    "Webentwicklung",
    "Website erstellen",
    "Hosting",
    "Wartung",
    "Fotografie",
    "SEO",
    "Webagentur",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://webcreare.de/",
    siteName: "Webcreare",
    title: "Webcreare – Webdesign & Entwicklung aus Tegernsee",
    description:
      "Individuelle Websites, klares Design und verlässliches Hosting. Für Gründer:innen, Handwerk & KMU.",
    images: [
      {
        url: "https://webcreare.de/og.jpg",
        width: 1200,
        height: 630,
        alt: "Webcreare – moderne Websites, die wirken",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webcreare – Webdesign & Entwicklung aus Tegernsee",
    description:
      "Moderne Websites, Hosting & Wartung – sauber gebaut, schnell und sicher.",
    images: ["https://webcreare.de/og.jpg"],
  },
  alternates: {
    canonical: "https://webcreare.de/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#3F5AF3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={jakartaSans.variable + " antialiased"}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={true}
        >
          <ThemeSwitch />
          {children}
        </ThemeProvider>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
