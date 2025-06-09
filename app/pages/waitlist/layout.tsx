import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Waitlist - Early Access to Clover",
  description: "Join Clover's waitlist for early access to our event-driven ad management platform. Be among the first SMBs to experience AI-powered advertising automation starting at $25/month.",
  keywords: [
    "clover waitlist",
    "early access",
    "ad management beta",
    "event-driven ads signup",
    "SMB advertising platform",
    "AI ad automation waitlist",
    "beta testing",
    "exclusive access",
    "advertising automation signup",
    "clover early access"
  ],
  openGraph: {
    title: "Join the Waitlist - Early Access to Clover",
    description: "Join Clover's waitlist for early access to our event-driven ad management platform. Be among the first SMBs to experience AI-powered advertising automation.",
    url: "https://clover-ads.com/waitlist",
    type: "website",
    images: [
      {
        url: "/og-waitlist.jpg",
        width: 1200,
        height: 630,
        alt: "Join Clover Waitlist - Early Access",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Waitlist - Early Access to Clover",
    description: "Join Clover's waitlist for early access to our event-driven ad management platform. Be among the first to experience AI-powered advertising automation.",
    images: ["/og-waitlist.jpg"],
  },
  alternates: {
    canonical: "https://clover-ads.com/waitlist",
  },
};

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 