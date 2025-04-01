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
  metadataBase: new URL('https://ashantitech.com'),
  title: {
    default: "Ashanti Technologies LTD | IT Solutions Company",
    template: "%s | Ashanti Technologies LTD"
  },
  description: "Innovative IT Solutions for a Digital Future - Software Development, Hardware & Networking, Cloud Computing, and IT Consulting services in Amrahia, Greater Accra.",
  keywords: "IT solutions, software development, hardware services, cloud computing, IT consulting, Amrahia, Greater Accra, Ghana technology company, IT services Ghana",
  authors: [{ name: "Ashanti Technologies LTD" }],
  creator: "Ashanti Technologies LTD",
  publisher: "Ashanti Technologies LTD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashantitech.com',
    siteName: 'Ashanti Technologies LTD',
    title: 'Ashanti Technologies LTD | IT Solutions Company',
    description: 'Innovative IT Solutions for a Digital Future - Software Development, Hardware & Networking, Cloud Computing, and IT Consulting services in Amrahia, Greater Accra.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ashanti Technologies LTD',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashanti Technologies LTD | IT Solutions Company',
    description: 'Innovative IT Solutions for a Digital Future - Software Development, Hardware & Networking, Cloud Computing, and IT Consulting services in Amrahia, Greater Accra.',
    images: ['/og-image.jpg'],
    creator: '@ashantitech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://ashantitech.com',
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
