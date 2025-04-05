import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../components/Navbar.tsx";
import Navbar from "../components/Navbar";
import Footer from "@/components/footer";
import WelcomePopup from '../components/WelcomePopup';
import AccessAlert from "@/components/AccessAlert";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Painel Info-Saúde ES",
  description: "Painel Info-Saúde ES",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <WelcomePopup />
        <AccessAlert />
        {children}
        <Footer />
      </body>
    </html>
  );
}
