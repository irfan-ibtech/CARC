import type { Metadata } from "next";
import { Outfit, Sora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/animations/SmoothScroll";
import { GlowCursor } from "@/components/animations/GlowCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Loader } from "@/components/layout/Loader";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CARC | COMSATS Adventurer & Rovering Club",
  description: "Adventure Beyond Limits. Lead. Explore. Conquer. The official club for adventure and rovering at COMSATS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen font-sans antialiased selection:bg-primary/30 selection:text-primary",
          outfit.variable,
          sora.variable
        )}
      >
        <Loader />
        <ScrollProgress />
        <SmoothScroll>
          <GlowCursor />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
