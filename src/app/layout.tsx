import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { constructMetadata, getPersonJsonLd } from "@/lib/metadata";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { PageTransition } from "@/components/ui/PageTransition";
import { EasterEggs } from "@/components/ui/EasterEggs";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090a0c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getPersonJsonLd();

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/20 selection:text-white flex flex-col font-sans relative">
        {/* Skip to Content for WCAG Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-background focus:font-mono focus:text-xs focus:uppercase focus:font-bold focus:shadow-lg"
        >
          Skip to main content
        </a>

        {/* Global Precision Layers */}
        <SplashScreen />
        <CustomCursor />
        <NoiseOverlay />
        <EasterEggs />

        {/* Smooth Scroll Container */}
        <SmoothScrollProvider>
          <SiteHeader />
          <PageTransition>
            <main id="main-content" className="flex-1 w-full flex flex-col">
              {children}
            </main>
          </PageTransition>
          <SiteFooter />
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
