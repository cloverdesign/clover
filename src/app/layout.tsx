import type { Metadata } from "next";
import { Unbounded, Lexend } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/global/nav";
import { Footer } from "@/components/global/footer";
import Preloader from "@/components/global/preloader";
import ScrollToTop from "@/components/global/scrollToTop";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-unbounded",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Clover | Timeless Designs",
    template: "%s | Clover",
  },
  description: "Elevating African businesses into timeless brands.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} ${lexend.variable}`}>
        <div className="relative">
          <Preloader />
          <ScrollToTop />
          <main className="font-body">
            <Nav />
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
