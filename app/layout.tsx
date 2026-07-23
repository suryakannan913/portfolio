import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/content";
import { siteUrl } from "@/site";
import { themeInitScript } from "@/theme-script";
import InteractiveBackground from "./components/InteractiveBackground";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Sets data-theme before paint to avoid a flash of the wrong theme. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        <InteractiveBackground />
        <Nav />
        <CommandPalette />
        {children}
        <div className="mx-auto max-w-4xl px-6">
          <Footer />
        </div>
      </body>
    </html>
  );
}
