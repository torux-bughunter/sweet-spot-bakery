import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* ─── HERO ─── Full-width with background image */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/brownies.jpg"
            alt="Our baked goods"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/70 to-charcoal-dark/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <span className="inline-block bg-rose/80 backdrop-blur-sm text-white text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
            Our Story
          </span>
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-4">
            Meet The Team
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            The people behind the treats — baking, creating, and giving back to the community.
          </p>
        </div>
      </section>

      {/* ─── MISSION ─── Light section */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <span className="inline-block bg-blush-200 text-charcoal text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
              Our Mission
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal mb-6">
              More Than Just Baking
            </h2>
          </div>

          <div className="space-y-6 text-charcoal-light text-lg leading-relaxed text-center">
            <p>
              The Sweet Spot began with a simple passion: creating delicious, homemade treats
              that bring joy to our community. What started as baking for family and friends
              quickly blossomed into something bigger as word spread about our desserts.
            </p>
            <p>
              Founded by students with a love for baking and entrepreneurship, we&apos;ve grown
              from a small home kitchen operation to serving the entire Prosper community.
              Our commitment to quality ingredients and thoughtful preparation ensures that
              every bite truly hits the spot.
            </p>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── Dark contrast section */}
      <section className="py-20 md:py-24 px-4 bg-charcoal">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Heart className="h-8 w-8 text-rose-light mx-auto mb-4" />
              <h3 className="font-heading text-xl text-white mb-2">Made With Love</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Every recipe is perfected with care and premium ingredients.
              </p>
            </div>
            <div>
              <Users className="h-8 w-8 text-rose-light mx-auto mb-4" />
              <h3 className="font-heading text-xl text-white mb-2">Community First</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                We believe in giving back and making a difference through baking.
              </p>
            </div>
            <div>
              <Sparkles className="h-8 w-8 text-rose-light mx-auto mb-4" />
              <h3 className="font-heading text-xl text-white mb-2">Quality Always</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                No shortcuts, no preservatives — just real homemade flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── Light section */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block bg-blush-200 text-charcoal text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
              The Bakers
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal">
              Who We Are
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                name: "Shivani Sankar",
                role: "Head Baker & Social Media Manager",
                bio: "Shivani brings creativity and precision to every recipe, ensuring consistent quality in every batch. With a keen eye for detail, she oversees our baking process while managing our social media presence.",
              },
              {
                name: "Yuvi Disawal",
                role: "Operations & Promotions Manager",
                bio: "Keeping everything running smoothly behind the scenes, Yuvi handles order tracking and promotional activities. He ensures every order is processed efficiently and accurately.",
              },
              {
                name: "Samiksha Menaka",
                role: "Packaging & Delivery Specialist",
                bio: "Adding a personal touch to every order, Samiksha ensures each treat is beautifully presented. She coordinates delivery so your treats arrive perfectly and on time.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-rose-light bg-card p-8 transition-all hover:shadow-md"
              >
                <h3 className="font-heading text-2xl text-charcoal mb-1">
                  {member.name}
                </h3>
                <p className="text-rose-dark text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-charcoal-light leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 md:py-28 px-4 bg-blush-200">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
            Ready to Try Our Treats?
          </h2>
          <p className="text-charcoal-light text-lg mb-8">
            Place your order today and taste the difference homemade makes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/order">Place an Order</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/shop">Browse Our Menu</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
