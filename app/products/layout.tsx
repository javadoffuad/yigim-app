import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/header/header';
import Faq from "@/app/components/faq/faq";
import Footer from "@/app/components/footer/footer";
import { FAQ_LIST } from "@/app/constants/faq.constants";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yigim Products",
  description: "Yigim Products page description",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header></Header>
        {children}
        <Faq items={FAQ_LIST} />
        <Footer />
      </body>
    </html>
  );
}
