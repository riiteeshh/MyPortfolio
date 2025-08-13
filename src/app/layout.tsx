import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LogoRotating from "@/components/ui/logo-rotating";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ritesh Pandey",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <meta name="google-site-verification" content="X2y5WnVb6HVAzQCznZqiLnNOW1-_0phqzn2rOf9IXmE" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-accent-foreground `}
      >
        <LogoRotating/>
        {children}
        <SpeedInsights />
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
