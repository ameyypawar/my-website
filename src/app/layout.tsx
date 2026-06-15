import type { Metadata } from "next";
import type { Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import ContactFooter from "@/components/ContactFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: favicon + OG image
export const metadata: Metadata = {
  metadataBase: new URL("https://ameypawar.com"),
  title: "Amey Pawar — Software Engineer",
  description:
    "Software engineer building developer tooling and AI-agent infrastructure in Rust and TypeScript. Maintainer of gfix and tubio. Final-year BTech, graduating May 2027.",
  openGraph: {
    title: "Amey Pawar — Software Engineer",
    description: "Software engineer · gfix · tubio · final-year BTech, graduating May 2027.",
    type: "website",
  },
  twitter: { card: "summary_large_image", creator: "@ameyypawr" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface font-sans">
        <Nav />
        {children}
        <ContactFooter />
      </body>
    </html>
  );
}
