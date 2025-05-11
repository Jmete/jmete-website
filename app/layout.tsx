import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// The Google Tag Manager ID
const GOOGLE_TAG_MANAGER = process.env.GOOGLE_TAG_MANAGER_ID as string;

export const metadata = {
  title:
    "James Mete - 10+ Years of Digital Transformation and Data Science Leadership",
  description:
    "Portfolio of James Mete, a data scientist with international business experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId={GOOGLE_TAG_MANAGER} />
      <body className={`${inter.variable} font-sans`} suppressHydrationWarning>
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
