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
  title: "Clover - Event-Driven Ad Management Platform",
  description: "Clover uses real-time event data (weather, holidays, news, sports) to automatically optimize short-video ads for SMBs. Run ads in the right place at the right time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Clover - Event-Driven Ad Management</title>
        <meta name="description" content="Clover uses real-time event data to automatically optimize short-video ads for SMBs" />
      </head>
      <body
        className={`${nunito.variable} ${playfairDisplay.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
