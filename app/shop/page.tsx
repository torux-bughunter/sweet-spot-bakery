import Image from "next/image"
import Link from "next/link"
import { getProductsByCategory } from "@/lib/products"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"

export default function ShopPage() {
  const brownies = getProductsByCategory("brownies")
  const cookies = getProductsByCategory("cookies")

  return (
    <div className="flex flex-col">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/cookies1.png"
            alt="Our goodies"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/70 to-charcoal-dark/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <span className="inline-block bg-rose/80 backdrop-blur-sm text-white text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
            Fresh Daily
          </span>
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-4">
            Our Menu
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Everything is made from scratch with love. Fresh, homemade, and meant to make
            your day a little sweeter.
          </p>
        </div>
      </section>

      {/* ─── BROWNIES ─── */}
      {brownies.length > 0 && (
        <section className="py-20 md:py-28 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-14">
              <span className="inline-block bg-blush-200 text-charcoal text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
                Rich & Fudgy
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-charcoal">
                Brownies
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {brownies.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── COOKIES ─── Dark contrast section */}
      {cookies.length > 0 && (
        <section className="py-20 md:py-28 px-4 bg-charcoal">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-14">
              <span className="inline-block bg-rose/80 text-white text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
                Soft & Chewy
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-white">
                Cookies
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {cookies.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA ─── */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
            Found Something You Like?
          </h2>
          <p className="text-charcoal-light text-lg mb-8">
            Place your order and we&apos;ll bake it fresh just for you.
          </p>
          <Button asChild size="lg">
            <Link href="/order">Order Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
