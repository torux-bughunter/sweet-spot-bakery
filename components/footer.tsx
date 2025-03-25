import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-brown-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-brown-800">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sweet_spot_logo.jpg-TpODahRJrYB0673FrEocoWSlZJNUFl.jpeg"
                  alt="The Sweet Spot Logo"
                  width={50}
                  height={50}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="ml-2 text-lg font-playfair font-bold text-white">The Sweet Spot</span>
            </Link>
            <p className="text-gray-300">
              A home dessert business in Prosper, TX, committed to making high-quality, homemade desserts that put a
              smile on your face with every bite.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-pink-300 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-pink-300 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white hover:text-pink-300 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-playfair">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-pink-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-pink-300 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-pink-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/order" className="text-gray-300 hover:text-pink-300 transition-colors">
                  Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-playfair">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Prosper, TX</li>
              <li className="text-gray-300">Email: theofficial.sweetspot1@gmail.com</li>
              <li className="text-gray-300">Hours: Tue-Sat, 10am-6pm</li>
            </ul>
          </div>

          {/* Newsletter */}

        </div>

        <div className="border-t border-brown-700 mt-12 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} The Sweet Spot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

