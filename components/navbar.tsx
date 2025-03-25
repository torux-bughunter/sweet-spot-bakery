"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/order", label: "Order" },
    { href: "/about", label: "About" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-brown-800">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sweet_spot_logo.jpg-TpODahRJrYB0673FrEocoWSlZJNUFl.jpeg"
                alt="The Sweet Spot Logo"
                width={60}
                height={60}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="ml-3 text-xl font-playfair font-bold text-brown-800">The Sweet Spot</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors hover:text-pink-500 ${
                  pathname === link.href ? "text-pink-500" : "text-brown-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-brown-800">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <Link href="/" className="flex items-center">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xBjKj02jROl78QSyqVcbMDogWQSj7a.png"
                        alt="The Sweet Spot Logo"
                        width={40}
                        height={40}
                      />
                      <span className="ml-2 text-lg font-playfair font-bold text-brown-800">The Sweet Spot</span>
                    </Link>
                  </div>
                  <nav className="flex flex-col space-y-6 pt-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`text-lg font-medium transition-colors hover:text-pink-500 ${
                          pathname === link.href ? "text-pink-500" : "text-brown-800"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto pt-6 border-t">
                    <Button asChild className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                      <Link href="/order">Order Now</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

