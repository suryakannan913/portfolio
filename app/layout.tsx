import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { profile } from "@/content";
import { siteUrl } from "@/site";
import InteractiveBackground from "./components/InteractiveBackground";
import Nav from "./components/Nav";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s`,
  },
  description: profile.tagline,
  alternates: {
    canonical: "/",
  },
  keywords: [
    profile.name,
    "Software Engineer",
    "Data Science",
    "UC Berkeley",
    "Full-Stack",
    "AI",
    "RAG",
    "Machine Learning",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    url: siteUrl,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${instrumentSerif.variable} antialiased`}
      >
        <InteractiveBackground />
        <Nav />
        {children}
      </body>
    </html>
  );
}
