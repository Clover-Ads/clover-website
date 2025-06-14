import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Get in Touch with Clover",
  description: "Contact Clover for questions about our event-driven ad management platform. Get support, schedule a demo, or learn more about how we can help optimize your SMB advertising campaigns.",
  keywords: [
    "contact clover",
    "customer support",
    "ad management support",
    "demo request",
    "advertising help",
    "SMB marketing consultation",
    "event-driven ads contact",
    "clover support team",
    "business inquiries",
    "platform demo"
  ],
  openGraph: {
    title: "Contact - Get in Touch with Clover",
    description: "Contact Clover for questions about our event-driven ad management platform. Get support, schedule a demo, or learn more about optimizing your advertising campaigns.",
    url: "https://clover-ads.com/contact",
    type: "website",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Clover - Ad Management Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Get in Touch with Clover",
    description: "Contact Clover for questions about our event-driven ad management platform. Get support or schedule a demo.",
    images: ["/og-contact.jpg"],
  },
  alternates: {
    canonical: "https://clover-ads.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 