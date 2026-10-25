import type { Metadata } from "next";
import type { Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import ContactFooter from "@/components/ContactFooter";
import { openSource, profile } from "@/data/resume";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const [o2, gix] = openSource.top;
const title = `${profile.name} — Software Engineer (Observability & Version Control)`;

// Sets data-theme on <html> before first paint: the saved choice, else the
// system setting. Runs inline so dark-mode visitors never see a light flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}var d=document.documentElement;d.dataset.theme=t;d.style.colorScheme=t}catch(e){}})()`;

// TODO: favicon
export const metadata: Metadata = {
  metadataBase: new URL("https://ameypawar.com"),
  title,
  description: `Software engineer working on observability and version control in Rust and TypeScript, with ${openSource.merged} merged open-source PRs, including ${o2.merged} in ${o2.name} and ${gix.merged} in ${gix.name}. Final-year BTech, graduating May 2027. Open to new-grad roles, internships and contract work.`,
  openGraph: {
    title,
    description: `${profile.headline} · ${openSource.merged} merged open-source PRs · graduating May 2027`,
    type: "website",
  },
  twitter: { card: "summary_large_image", creator: "@ameyypawr" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFDF8" },
    { media: "(prefers-color-scheme: dark)", color: "#16182E" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full bg-canvas text-on-surface font-sans">
        <div className="backdrop" aria-hidden="true" />
        <div className="sheet flex flex-col">
          <Nav />
          {children}
          <ContactFooter />
        </div>
      </body>
    </html>
  );
}
