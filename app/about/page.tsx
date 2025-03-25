import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
      <div className="container mx-auto px-4 py-12">
        {/* Our Story Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-brown-800 text-center mb-8">Our Story</h1>
          <div className="bg-white p-8 rounded-lg border-2 border-pink-200">
            <p className="text-brown-600 text-lg leading-relaxed mb-6">
              The Sweet Spot began with a simple passion: creating delicious, homemade treats that bring joy to our
              community. What started as baking for family and friends quickly blossomed into something bigger as word
              spread about our delectable desserts.
            </p>
            <p className="text-brown-600 text-lg leading-relaxed">
              Founded by students with a love for baking and entrepreneurship, we've grown from a small home kitchen
              operation to serving the entire Prosper community. Our commitment to quality ingredients and thoughtful
              preparation ensures that every bite truly hits the spot.
            </p>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-brown-800 text-center mb-8">Meet the Team</h2>
          <div className="grid gap-6">
            <div className="bg-white p-8 rounded-lg border-2 border-pink-200">
              <h3 className="text-2xl font-bold text-brown-800 mb-3">Shivani Sankar</h3>
              <p className="text-pink-500 font-medium mb-3">Head Baker & Social Media Manager</p>
              <p className="text-brown-600 text-lg leading-relaxed">
                Shivani brings creativity and precision to every recipe, ensuring consistent quality in every batch. With
                a keen eye for detail and a passion for perfection, she oversees our baking process while also managing
                our social media presence, sharing the sweet journey with our community.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-pink-200">
              <h3 className="text-2xl font-bold text-brown-800 mb-3">Yuvi Disawal</h3>
              <p className="text-pink-500 font-medium mb-3">Operations & Promotions Manager</p>
              <p className="text-brown-600 text-lg leading-relaxed">
                Keeping everything running smoothly behind the scenes, Yuvi handles order tracking and promotional
                activities. He ensures that our customers never miss out on special deals and that every order is
                processed efficiently and accurately.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-pink-200">
              <h3 className="text-2xl font-bold text-brown-800 mb-3">Samiksha Menaka</h3>
              <p className="text-pink-500 font-medium mb-3">Packaging & Delivery Specialist</p>
              <p className="text-brown-600 text-lg leading-relaxed">
                Adding a personal touch to every order, Samiksha ensures that each treat is beautifully presented with
                thoughtful details and care. She also coordinates our delivery process, making sure your treats arrive
                perfectly and on time.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-brown-800 mb-6">Ready to Try Our Treats?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
              <Link href="/order">Place an Order</Link>
            </Button>
            <Button
                asChild
                variant="outline"
                size="lg"
                className="border-brown-800 text-brown-800 hover:bg-brown-800 hover:text-white"
            >
              <Link href="/shop">Browse Our Menu</Link>
            </Button>
          </div>
        </section>
      </div>
  )
}

