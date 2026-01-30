import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { appConfig } from "@/lib/app-config";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: appConfig.name,
  description: appConfig.tagline ?? "Frontend-only Next.js starter template"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background text-foreground", inter.className)}>
        {children}
      </body>
    </html>
  );
}
