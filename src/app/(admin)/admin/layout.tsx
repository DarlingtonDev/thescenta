import { Viewport } from "next";
import "../../globals.css";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { Noto_Sans_Old_Persian } from "next/font/google";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";

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
const Adminlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${noto_sans.variable}`}
    >
      <body>
        <Header />
        <main className="flex relative">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default Adminlayout;
