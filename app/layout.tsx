import type React from "react";
import "@/app/globals.css";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";
import { GoogleTagManager } from "@next/third-parties/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "600", "700"],
  display: "swap",
});

// The Google Tag Manager ID
const GOOGLE_TAG_MANAGER = process.env.GOOGLE_TAG_MANAGER_ID as string;

export const metadata = {
  title:
    "James Mete - 12+ Years of AI/ML, Data, and Digital Transformation Leadership",
  description:
    "Portfolio of James Mete, Data & AI/ML Director | Data Products, ML Platforms, Governance/Risk | 12+ years experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId={GOOGLE_TAG_MANAGER} />
      <body
        className={`${manrope.variable} ${cormorant.variable} font-sans`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
