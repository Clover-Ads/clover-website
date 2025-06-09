import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Clover - Event-Driven Ad Management Platform",
    template: "%s | Clover"
  },
  description: "Clover uses real-time event data (weather, holidays, news, sports) to automatically optimize short-video ads for SMBs. Run ads in the right place at the right time with AI-powered campaign management starting at $25/month.",
  keywords: [
    "event-driven advertising",
    "AI ad management",
    "SMB advertising",
    "short-video ads",
    "TikTok advertising",
    "Instagram Reels",
    "YouTube Shorts",
    "Facebook video ads",
    "real-time optimization",
    "automated campaigns",
    "ROI optimization",
    "small business marketing",
    "affordable ad platform",
    "weather-based advertising",
    "holiday advertising",
    "news-driven campaigns"
  ],
  authors: [{ name: "Clover Team" }],
  creator: "Clover",
  publisher: "Clover",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clover-ads.com",
    siteName: "Clover",
    title: "Clover - Event-Driven Ad Management Platform",
    description: "AI-powered ad management that uses real-time events to optimize short-video campaigns for SMBs. 2.5x better ROI starting at $25/month.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clover - Event-Driven Ad Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CloverAds",
    creator: "@CloverAds",
    title: "Clover - Event-Driven Ad Management Platform",
    description: "AI-powered ad management that uses real-time events to optimize short-video campaigns for SMBs. 2.5x better ROI starting at $25/month.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Business Software",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Clover",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#22c55e",
    "theme-color": "#22c55e",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Clover",
              "description": "Event-driven ad management platform for SMBs using AI to optimize short-video campaigns based on real-time data",
              "url": "https://clover-ads.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "25",
                "priceCurrency": "USD",
                "priceValidUntil": "2024-12-31",
                "availability": "https://schema.org/InStock"
              },
              "provider": {
                "@type": "Organization",
                "name": "Clover",
                "url": "https://clover-ads.com"
              },
              "featureList": [
                "Event-driven campaign triggers",
                "Real-time ROI optimization",
                "Multi-platform short-video ads",
                "AI-generated video content",
                "24/7 autonomous operation",
                "Weather-based targeting",
                "Holiday campaign automation"
              ]
            })
          }}
        />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Additional meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Canonical URL will be set by individual pages */}
        <link rel="canonical" href="https://clover-ads.com" />
      </head>
      <body
        className={`${nunito.variable} ${playfairDisplay.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
