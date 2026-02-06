import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { appConfig } from "@/lib/app-config";
import { Providers } from "@/components/Providers";
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground transition-colors duration-300",
          inter.className
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
