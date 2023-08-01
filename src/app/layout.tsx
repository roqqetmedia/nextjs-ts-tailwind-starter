import { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import { twMerge } from "tailwind-merge";
import Header from "@/ui/header/header";
import Footer from "@/ui/footer/footer";
import "@/app/globals.css";

export const metadata = {
  title: "Roqqet Media",
  description: "NextJS starter template",
  keywords: ["Roqqet Media", "Nextjs", "Starter"],
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
