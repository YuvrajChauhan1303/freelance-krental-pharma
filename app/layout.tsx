import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components_main/Navbar";
import Footer from "./_components_main/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // optional: include the weights you use
});

export const metadata: Metadata = {
  title: "Krenital Pharma",
  description: "Krenital Pharma offers a delicious range of healthy, gummy-based supplements designed to support a vibrant and healthy life for all ages. Discover our science-backed, tasty gummies for daily wellness and vitality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
