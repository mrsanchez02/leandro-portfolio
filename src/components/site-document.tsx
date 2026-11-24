import { Geist, Geist_Mono, Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/locales";
import "@/app/globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  preload: false,
});

export function SiteDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <html lang={locale} className={`${geist.variable} ${inter.variable} ${mono.variable}`}>
      <body className="flex min-h-svh flex-col bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
