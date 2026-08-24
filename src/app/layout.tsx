import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteNav } from "@/components/nav/site-nav";
import { SiteFooter } from "@/components/nav/site-footer";
import { SITE } from "@/lib/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = "Ritesh Pandey | Software Engineer & AI Enthusiast";
const DESCRIPTION =
  "Ritesh Pandey is a software engineer with a background in computer engineering, software systems, and AI applications. Currently working on conversational AI, and exploring knowledge representation and agentic AI systems.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: TITLE,
  description: DESCRIPTION,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE.domain,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
  verification: {
    google: "X2y5WnVb6HVAzQCznZqiLnNOW1-_0phqzn2rOf9IXmE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SiteNav />
          <main>{children}</main>
          <SiteFooter />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
