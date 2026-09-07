import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VibeVaults Residences | Seafront apartments",
    template: "%s | VibeVaults Residences",
  },
  description:
    "Twenty-two seafront apartments on the old harbour. Studios, sea view apartments, family suites and a rooftop penthouse.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} flex min-h-screen flex-col`}>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <script src="https://www.vibe-vaults.com/widget.js" data-key="47b1f7cbd8152a86aa095b44e5bbff13" async></script>
      </body>
    </html>
  );
}
