'use client'

import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header/header"
import { RequestCallback } from "@/components/request-callback/request-callback"
import ErrorPageWrapper from "./components/error-page-wrapper/error-page-wrapper";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <Header />
        <RequestCallback />
        <ErrorPageWrapper errorCode="500" message="This page you are looking for does not exist" />
      </body>
    </html>
  )
}
