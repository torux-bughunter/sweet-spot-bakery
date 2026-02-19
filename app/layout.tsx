import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Quicksand, Patrick_Hand } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "The Sweet Spot | Where Every Bite Hits the Spot",
  description:
    "Homemade desserts that put a smile on your face with every bite. Order online for pickup or delivery in Prosper, TX.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${patrickHand.variable} font-sans`}>
        <div className="flex min-h-screen flex-col decoration-stars">
          <Navbar />
          <main className="flex-1 overflow-x-clip">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  )
}
