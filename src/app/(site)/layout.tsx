import "../globals.css";
import Header from "./components/general/Header";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { Noto_Sans_Old_Persian } from "next/font/google";
import Footer from "./components/general/Footer";

import ResponsiveNavbar from "./components/general/Responsive";
import { Context } from "./contextApi/context";
import { Viewport } from "next";
import { icons } from "lucide-react";
export const metadata = {
  title: "Luxury Perfumes In Nigeria | Thescenta",
  description:
    "Shop original luxury perfumes for men, women, and unisex at Thescenta. Discover long-lasting fragrances, gift sets, and fast deliveries across Nigeria",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const noto_sans = Noto_Sans_Old_Persian({
  subsets: ["latin"],
  variable: "--font-nota-sans",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${noto_sans.variable}`}
    >
      <body className="relative">
        <Context>
          <ResponsiveNavbar />
          <Header />
          {children}
          {modal}
          <Footer />
        </Context>
      </body>
    </html>
  );
}
