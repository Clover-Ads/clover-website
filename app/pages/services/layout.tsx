import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Ad Management Solutions for SMBs",
  description: "Comprehensive event-driven ad management services including campaign management, content creation, and multi-platform optimization for TikTok, Instagram, Facebook, and YouTube Shorts.",
  keywords: [
    "ad management services",
    "campaign management",
    "content creation",
    "multi-platform advertising",
    "TikTok ads",
    "Instagram Reels",
    "Facebook video ads",
    "YouTube Shorts",
    "SMB advertising services",
    "event-driven campaigns",
    "AI ad creation",
    "real-time optimization"
  ],
  openGraph: {
    title: "Services - Ad Management Solutions for SMBs | Clover",
    description: "Comprehensive event-driven ad management services including campaign management, content creation, and multi-platform optimization for TikTok, Instagram, Facebook, and YouTube Shorts.",
    url: "https://clover-ads.com/services",
    type: "website",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Clover Ad Management Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Ad Management Solutions for SMBs | Clover",
    description: "Comprehensive event-driven ad management services including campaign management, content creation, and multi-platform optimization.",
    images: ["/og-services.jpg"],
  },
  alternates: {
    canonical: "https://clover-ads.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 