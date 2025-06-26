import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700", "800"]
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
    <html lang="en" className={plusJakartaSans.variable} suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/assets/fonts/horizon.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/horizon.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <body className={plusJakartaSans.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
