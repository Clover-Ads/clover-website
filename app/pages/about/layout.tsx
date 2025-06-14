import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Event-Driven Ad Management for SMBs",
  description: "Learn about Clover's mission to democratize AI-powered advertising for small and medium businesses. Discover how our event-driven platform revolutionizes ad management with real-time optimization and affordable pricing.",
  keywords: [
    "about clover",
    "company mission",
    "ad management company",
    "AI advertising startup",
    "SMB solutions",
    "event-driven advertising",
    "real-time optimization",
    "affordable ad platform",
    "advertising automation",
    "small business marketing"
  ],
  openGraph: {
    title: "About - Event-Driven Ad Management for SMBs | Clover",
    description: "Learn about Clover's mission to democratize AI-powered advertising for small and medium businesses with event-driven campaigns and real-time optimization.",
    url: "https://clover-ads.com/about",
    type: "website",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Clover - Event-Driven Ad Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Event-Driven Ad Management for SMBs | Clover",
    description: "Learn about Clover's mission to democratize AI-powered advertising for small and medium businesses.",
    images: ["/og-about.jpg"],
  },
  alternates: {
    canonical: "https://clover-ads.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 