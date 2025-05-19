import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import localFont from "next/font/local"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

// Add Horizon font
const horizon = localFont({
  src: [
    {
      path: "../public/fonts/horizon.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-horizon",
})

export const metadata: Metadata = {
  title: "ADULTING - Your Daily Admin. Sorted.",
  description:
    "The one app that simplifies your daily adult admin. Organize documents, meal prep, emergency info, pet care, reminders, travel, and more.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${horizon.variable}`}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
