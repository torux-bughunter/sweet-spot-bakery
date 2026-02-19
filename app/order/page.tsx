"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function OrderPage() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin.includes("google.com")) {
        console.log("Message from Google Form:", event.data)
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  return (
    <div className="flex flex-col">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/brownies.jpg"
            alt="Order our treats"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/70 to-charcoal-dark/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <span className="inline-block bg-rose/80 backdrop-blur-sm text-white text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
            Easy & Quick
          </span>
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-4">
            Place Your Order
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Fill out the form below and we&apos;ll get back to you with confirmation and payment details.
          </p>
        </div>
      </section>

      {/* ─── FORM ─── */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="rounded-2xl border border-rose-light bg-card overflow-hidden shadow-sm">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScoPlbbY9iyNYURLuu9vO8e8LB4ETAdArPcf2TjgAtHM5hdFA/viewform?embedded=true"
              width="100%"
              height="1751"
              frameBorder="0"
              title="Sweet Spot Bakery Order Form"
              className="block"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </div>
  )
}