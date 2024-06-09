import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { AptabaseProvider } from "@aptabase/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "100 Days of Coding Challenge",
  description: "Join the challenge and level up your coding skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AptabaseProvider appKey="A-US-2780580883">{children}</AptabaseProvider>
        <Analytics />
      </body>
    </html>
  );
}
