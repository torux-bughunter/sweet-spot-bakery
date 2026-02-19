import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div className="space-y-4">
            <Link href="/" className="group flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full border border-rose/30 transition-transform duration-300 group-hover:scale-[1.03]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sweet_spot_logo.jpg-TpODahRJrYB0673FrEocoWSlZJNUFl.jpeg"
                  alt="The Sweet Spot Logo"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-heading text-base text-white">
                The Sweet Spot
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed">
              A home baking business in Prosper, TX — making homemade treats
              that put a smile on your face with every bite.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading text-base text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/shop", label: "Menu" },
                { href: "/gallery", label: "Gallery" },
                { href: "/cause", label: "Our Cause" },
                { href: "/order", label: "Order" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-rose-light transition-all duration-300 motion-safe:hover:translate-x-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-base text-white mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-rose-light transition-all duration-300 motion-safe:hover:translate-x-0.5"
              >
                <Instagram className="h-4 w-4 flex-shrink-0" />
                @thesweetspot
              </a>
              <a
                href="mailto:theofficial.sweetspot1@gmail.com"
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-rose-light transition-all duration-300 motion-safe:hover:translate-x-0.5"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                theofficial.sweetspot1@gmail.com
              </a>
              <div className="flex items-center gap-2.5 text-sm text-white/50">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                Prosper, TX
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} The Sweet Spot. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-white/40 hover:text-white/60 transition-all duration-300 motion-safe:hover:-translate-y-0.5">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-white/40 hover:text-white/60 transition-all duration-300 motion-safe:hover:-translate-y-0.5">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
