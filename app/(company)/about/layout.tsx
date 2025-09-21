import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/header/header';
import Footer from "@/components/footer/footer";
import Faq from "@/components/faq/faq";
import { FAQ_LIST } from "@/constants/faq.constants";
import { RequestCallback } from "@/components/request-callback/request-callback";
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
  title: "Yigim About",
  description: "Yigim About page description",
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
        <Header />
        <RequestCallback />
        {children}
        <Faq items={FAQ_LIST} />
        <Footer />
      </body>
    </html>
  );
}
