import { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import { twMerge } from "tailwind-merge";
import Header from "@/ui/header/header";
import Footer from "@/ui/footer/footer";
import { APP_ENV, SITE_URL } from "@/config";
import "@/app/globals.css";

export const metadata = {
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  title: {
    template: "%s | Roqqet Media",
    default: "Roqqet Media",
  },
  description: "NextJS starter template",
  keywords: ["Roqqet Media", "Nextjs", "Starter", "App Router"],
  themeColor: "white",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Roqqet Media",
    description: "NextJS starter template",
    url: SITE_URL,
    siteName: "Roqqet Media",
    images: [
      {
        url: "/images/og.png",
        width: 2800,
        height: 1600,
        alt: "Roqqet Media",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roqqet Media",
    description: "NextJS starter template",
    site: "@roqqetmedia",
    images: ["/images/og.png"],
  },
  robots: {
    index: APP_ENV === "production",
    follow: APP_ENV === "production",
    "max-image-preview": "large",
    "max-video-preview": -1,
    "max-snippet": -1,
    googleBot: {
      index: APP_ENV === "production",
      follow: APP_ENV === "production",
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          montserrat.variable,
          "font-sans",
          "flex h-screen flex-col justify-between",
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
