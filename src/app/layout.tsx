import type { Metadata } from "next";
import { Rokkitt } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";

const rokkitt = Rokkitt({
  subsets: ["latin"],
  variable: "--font-rokkitt",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashanti Technologies LTD | IT Solutions Company",
  description: "Innovative IT Solutions for a Digital Future - Software Development, Hardware & Networking, Cloud Computing, and IT Consulting services in Amrahia, Greater Accra.",
  keywords: "IT solutions, software development, hardware services, cloud computing, IT consulting, Amrahia, Greater Accra",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rokkitt.variable} font-rokkitt antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </main>
        <Footer />
      </body>
    </html>
  );
}
