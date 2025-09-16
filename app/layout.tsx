import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"
import FloatingChatButton from "@/components/floating-chat-button"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Panel Pro - AI for Body Repair Assessment",
  description: "AI-powered vehicle damage assessment platform for body repair shops and automotive professionals",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        <Suspense fallback={<div className="min-h-screen bg-gray-900" />}>
          <PageTransition>
            <main className="min-h-screen">{children}</main>
          </PageTransition>
        </Suspense>
        <Suspense fallback={null}>
          <FloatingChatButton />
        </Suspense>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
