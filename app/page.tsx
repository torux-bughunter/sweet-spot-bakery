import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cake, FileText, Truck, Clock } from "lucide-react"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

export default function Home() {
  // Featured products to display on homepage
  const featuredProducts = products.slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brown-800 text-white">
        <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Where Every Bite Hits the Spot</h1>
            <p className="text-lg md:text-xl opacity-90">
              Homemade desserts that put a smile on your face with every bite. Our menu includes a variety of brownies,
              cookies, and banana bread, all carefully made with top-quality ingredients.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
                <Link href="/order">Order Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-brown-800 hover:bg-white hover:text-brown-800"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-pink-500/20 rounded-full blur-3xl"></div>
            <div className="relative bg-brown-800 p-8 rounded-full shadow-xl transform rotate-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sweet_spot_logo.jpg-TpODahRJrYB0673FrEocoWSlZJNUFl.jpeg"
                alt="The Sweet Spot Logo"
                width={500}
                height={500}
                className="mx-auto rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-pink-100 hero-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">Our Signature Treats</h2>
            <p className="text-lg text-brown-700 max-w-2xl mx-auto">
              Indulge in our most popular homemade desserts, crafted with love and the finest ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-brown-700 hover:bg-brown-800 text-white">
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">How It Works</h2>
            <p className="text-lg text-brown-700 max-w-2xl mx-auto">Ordering from The Sweet Spot is quick and easy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-pink-200">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold text-brown-800 mb-2">Fill Out Form</h3>
                <p className="text-brown-600">Complete our order form with your selection and details</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold text-brown-800 mb-2">Choose Pickup Time</h3>
                <p className="text-brown-600">Select a convenient time to collect your order</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cake className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold text-brown-800 mb-2">Freshly Baked</h3>
                <p className="text-brown-600">We prepare your order with care using quality ingredients</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold text-brown-800 mb-2">Pickup or Delivery</h3>
                <p className="text-brown-600">Collect your order or have it delivered to your doorstep</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Satisfy Your Sweet Tooth?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Order now and experience the delicious homemade treats that have everyone talking!
          </p>
          <Button asChild size="lg" className="bg-white text-pink-500 hover:bg-gray-100">
            <Link href="/order">Order Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

