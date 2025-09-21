import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header/header"
import { RequestCallback } from "@/components/request-callback/request-callback"
import "@/app/globals.css";
import Link from "next/link";
import { PAGE_HOME } from "./constants/navigation.constants";
import styles from './not-found.module.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function NotFound() {
  return (
    <html>
      <body>
        <Header />
        <RequestCallback />
        <div className={styles.bg}>
          <div className={styles.container}>
            <p className={styles.message}>This page you are looking for does not exist</p>
            <h1 className={styles.code}>404</h1>
            <Link href={PAGE_HOME} className="button button-primary">Go home</Link>
          </div>
        </div>
      </body>
    </html>
  )
}

export const metadata = {
  title: 'Страница не найдена',
}