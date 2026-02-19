import Image from "next/image"
import Link from "next/link"
import { readdir } from "node:fs/promises"
import path from "node:path"
import { Button } from "@/components/ui/button"
import { getFeaturedProducts } from "@/lib/products"
import ProductCard from "@/components/product-card"
import { ArrowDown, Heart, Cookie, Cake } from "lucide-react"

const GALLERY_DIR = path.join(process.cwd(), "public", "gallery")
const GALLERY_FILE_REGEX = /\.(avif|gif|jpe?g|png|webp)$/i

async function getGalleryItems() {
  try {
    const fileNames = await readdir(GALLERY_DIR)
    const imageNames = fileNames
      .filter((fileName) => GALLERY_FILE_REGEX.test(fileName))
      .sort((left, right) => left.localeCompare(right))

    return imageNames.map((fileName, index) => ({
      src: `/gallery/${fileName}`,
      alt: `The Sweet Spot gallery image ${index + 1}`,
      label: `Gallery ${index + 1}`,
    }))
  } catch {
    return []
  }
}

export default async function Home() {
  const featured = getFeaturedProducts()
  const galleryItems = await getGalleryItems()

  return (
    <div className="flex flex-col">
      {/* ─── HERO ─── Full-width, centered, with background image + gradient overlay */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/brownies.jpg"
            alt="Freshly baked treats"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/70 via-charcoal-dark/50 to-charcoal-dark/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          {/* Pill Badge */}
          <span className="inline-block bg-rose/80 backdrop-blur-sm text-white text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
            Handcrafted in Prosper, TX
          </span>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-4 leading-tight">
            Baked With <span className="text-rose-light">Heart</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
            Homemade brownies, cookies, and treats — made from scratch by students
            who believe every bite can make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-charcoal hover:bg-blush-100 shadow-lg">
              <Link href="/order">Order Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
              <Link href="/shop">See Our Menu</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-float">
          <ArrowDown className="h-6 w-6" />
        </div>
      </section>

      {/* ─── WHY US ─── Alternating background, feature cards */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="inline-block bg-blush-200 text-charcoal text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
              Why The Sweet Spot
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal">
              More Than Just Desserts
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature Card 1 */}
            <div className="relative group rounded-3xl overflow-hidden min-h-[320px] flex items-end">
              <Image
                src="/cookies1.png"
                alt="Fresh cookies"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-charcoal-dark/30 to-transparent" />
              <div className="relative z-10 p-8">
                <Cookie className="h-8 w-8 text-rose-light mb-3" />
                <h3 className="font-heading text-2xl text-white mb-2">Made From Scratch</h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  Every recipe is handcrafted with premium ingredients — no shortcuts,
                  no preservatives, just real homemade flavor.
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="relative group rounded-3xl overflow-hidden min-h-[320px] flex items-end">
              <Image
                src="/brownies.jpg"
                alt="Community impact"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-charcoal-dark/30 to-transparent" />
              <div className="relative z-10 p-8">
                <Heart className="h-8 w-8 text-rose-light mb-3" />
                <h3 className="font-heading text-2xl text-white mb-2">Baking For Good</h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  Run by students who want to give back — every treat you buy
                  supports our mission to make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── IMPACT STATS ─── Dark contrast section */}
      <section className="py-20 md:py-24 px-4 bg-charcoal">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Treats Baked" },
              { number: "100+", label: "Happy Customers" },
              { number: "2", label: "Signature Items" },
              { number: "1", label: "Big Mission" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-4xl md:text-5xl text-rose-light mb-2">
                  {stat.number}
                </p>
                <div className="w-8 h-0.5 bg-rose mx-auto mb-3" />
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── Light background with horizontal cards */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block bg-blush-200 text-charcoal text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
              Our Menu
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal">
              Fresh From the Oven
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline">
              <Link href="/shop">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section className="py-20 md:py-24 px-4 bg-charcoal">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block bg-rose/80 text-white text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
              Gallery
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-white">
              A Peek Into Our Kitchen
            </h2>
          </div>

          {galleryItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {galleryItems.map((item, index) => (
                <div
                  key={`${item.label}-${index}`}
                  className="group hover-lift relative overflow-hidden rounded-2xl border border-white/10 min-h-[220px]"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/75 via-charcoal-dark/30 to-transparent" />
                  <p className="absolute left-4 bottom-4 text-sm font-medium tracking-wide text-white">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-white/70">Gallery images will appear here soon.</p>
          )}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 md:py-28 px-4 bg-blush-200">
        <div className="container mx-auto max-w-2xl text-center">
          <Cake className="h-10 w-10 text-rose-dark mx-auto mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
            Ready to Order?
          </h2>
          <p className="text-charcoal-light text-lg mb-8 leading-relaxed">
            Every treat is baked fresh for you. Place your order today and taste
            the difference homemade makes.
          </p>
          <Button asChild size="lg">
            <Link href="/order">Start Your Order</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
