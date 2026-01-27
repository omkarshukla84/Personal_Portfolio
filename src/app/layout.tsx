import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google"; // Import the Mario-style font
import "./globals.css";
import { PixelCursorTrail } from "@/components/ui/pixel-trail";
import SmoothScroller from "@/components/smooth-scroller";

const pressStart2P = Press_Start_2P({
  weight: "400",
  variable: "--font-press-start",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mario Portfolio",
  description: "A Mario-themed portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.variable} antialiased`}
      >
        <SmoothScroller />
        <PixelCursorTrail />
        {children}
      </body>
    </html>
  );
}
