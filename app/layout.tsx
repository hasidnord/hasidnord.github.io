import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import StickyVisitButton from "@/components/sticky-visit-button"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Provence Villa for Sale - Exceptional Property",
  description: "Magnificent Provençal villa for sale with panoramic views and Mediterranean garden",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-lato bg-cream">
        <Navigation />
        <main>{children}</main>
        <StickyVisitButton />
      </body>
    </html>
  )
}
