import type { Metadata } from "next";
import type { Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Amey Pawar — Independent Developer",
  description:
    "Independent developer building tubio and gitfix. Tools that make everyday software work less painful.",
  openGraph: {
    title: "Amey Pawar — Independent Developer",
    description: "Independent developer building tubio and gitfix.",
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
        {children}
      </body>
    </html>
  );
}
