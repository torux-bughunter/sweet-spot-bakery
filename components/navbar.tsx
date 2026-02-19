"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/shop", label: "Menu" },
    { href: "/cause", label: "Our Cause" },
  ]
  const darkHeroRoutes = ["/", "/about", "/shop", "/cause", "/order"]

  const hasDarkHero = useMemo(
    () => darkHeroRoutes.some((route) => pathname === route),
    [pathname]
  )

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0
      setIsScrolled(scrollTop > 12)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [pathname])

  const navIsSolid = isScrolled
  const transparentTextClass = hasDarkHero ? "text-white" : "text-charcoal"

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${navIsSolid
        ? "bg-white/95 backdrop-blur-md shadow-md border-b border-rose-light/40 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo — left */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-rose-light transition-transform duration-300 group-hover:scale-[1.03]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sweet_spot_logo.jpg-TpODahRJrYB0673FrEocoWSlZJNUFl.jpeg"
                alt="The Sweet Spot Logo"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <span
              className={`text-lg font-heading tracking-wide transition-colors ${navIsSolid ? "text-charcoal" : transparentTextClass}`}
            >
              The Sweet Spot
            </span>
          </Link>

          {/* Desktop Navigation — center */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-all duration-300 motion-safe:hover:-translate-y-px after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:rounded-full after:bg-current after:transition-transform after:duration-300 ${pathname === link.href
                  ? navIsSolid
                    ? "text-rose-dark after:scale-x-100"
                    : hasDarkHero
                      ? "text-rose-light after:scale-x-100"
                      : "text-rose-dark after:scale-x-100"
                  : navIsSolid
                    ? "text-charcoal-light hover:text-rose-dark after:scale-x-0 hover:after:scale-x-100"
                    : hasDarkHero
                      ? "text-white/85 hover:text-white after:scale-x-0 hover:after:scale-x-100"
                      : "text-charcoal-light hover:text-rose-dark after:scale-x-0 hover:after:scale-x-100"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile — right */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="hidden md:inline-flex rounded-full bg-rose text-white hover:bg-rose-dark shadow-md px-6"
            >
              <Link href="/order">Order Now</Link>
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={navIsSolid ? "text-charcoal" : transparentTextClass}
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] bg-blush-100">
                  <div className="flex flex-col h-full pt-8">
                    <Link href="/" className="flex items-center gap-2 mb-8">
                      <div className="relative h-8 w-8 overflow-hidden rounded-full border border-rose-light">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sweet_spot_logo.jpg-TpODahRJrYB0673FrEocoWSlZJNUFl.jpeg"
                          alt="The Sweet Spot Logo"
                          width={32}
                          height={32}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="text-base font-heading text-charcoal">
                        The Sweet Spot
                      </span>
                    </Link>

                    <nav className="flex flex-col gap-5">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`text-base font-medium transition-colors hover:text-rose-dark ${pathname === link.href
                            ? "text-rose-dark"
                            : "text-charcoal"
                            }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>

                    <div className="mt-8">
                      <Button asChild className="w-full rounded-full bg-rose text-white hover:bg-rose-dark">
                        <Link href="/order">Order Now</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
