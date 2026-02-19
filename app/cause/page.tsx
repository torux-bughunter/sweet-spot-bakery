import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, HandHeart, Users, Handshake } from "lucide-react"

export default function CausePage() {
    return (
        <div className="flex flex-col">
            {/* ─── HERO ─── */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/brownies.jpg"
                        alt="Spreading the sweetness"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/70 to-charcoal-dark/80" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                    <span className="inline-block bg-rose/80 backdrop-blur-sm text-white text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
                        Our Mission
                    </span>
                    <h1 className="font-heading text-5xl md:text-6xl text-white mb-4">
                        Spreading the Sweetness
                    </h1>
                    <p className="text-white/80 text-lg max-w-xl mx-auto">
                        Every treat we sell supports a bigger purpose — because baking is our way of giving back.
                    </p>
                </div>
            </section>

            {/* ─── 100% PROFITS ─── Light section */}
            <section className="py-20 md:py-28 px-4">
                <div className="container mx-auto max-w-3xl text-center">
                    <HandHeart className="h-12 w-12 text-rose mx-auto mb-6" />
                    <h2 className="font-heading text-4xl md:text-5xl text-charcoal mb-6">
                        100% of Profits Donated
                    </h2>
                    <p className="text-charcoal-light text-lg leading-relaxed mb-4">
                        The Sweet Spot isn&apos;t just a bakery — it&apos;s a mission. We donate
                        <strong className="text-charcoal"> 100% of our profits</strong> to local
                        foundations and community organizations making a real difference.
                    </p>
                    <p className="text-charcoal-light text-lg leading-relaxed">
                        When you order a brownie, a cookie, or any of our treats, you&apos;re not
                        just satisfying a sweet tooth — you&apos;re directly supporting the causes
                        that matter most to our community.
                    </p>
                </div>
            </section>

            {/* ─── HOW IT WORKS ─── Dark section */}
            <section className="py-20 md:py-24 px-4 bg-charcoal">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-14">
                        <span className="inline-block bg-rose/80 text-white text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
                            How It Works
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl text-white">
                            From Your Order to Our Community
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="w-14 h-14 rounded-full bg-rose/20 flex items-center justify-center mx-auto mb-4">
                                <Heart className="h-7 w-7 text-rose-light" />
                            </div>
                            <h3 className="font-heading text-xl text-white mb-2">You Order</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Pick your favorite treats from our menu and place an order.
                            </p>
                        </div>
                        <div>
                            <div className="w-14 h-14 rounded-full bg-rose/20 flex items-center justify-center mx-auto mb-4">
                                <Users className="h-7 w-7 text-rose-light" />
                            </div>
                            <h3 className="font-heading text-xl text-white mb-2">We Bake</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Everything is made fresh by our team with love and care.
                            </p>
                        </div>
                        <div>
                            <div className="w-14 h-14 rounded-full bg-rose/20 flex items-center justify-center mx-auto mb-4">
                                <Handshake className="h-7 w-7 text-rose-light" />
                            </div>
                            <h3 className="font-heading text-xl text-white mb-2">We Donate</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                100% of profit goes directly to local foundations and causes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── WHO WE SUPPORT ─── Light section */}
            <section className="py-20 md:py-28 px-4">
                <div className="container mx-auto max-w-3xl">
                    <div className="text-center mb-14">
                        <span className="inline-block bg-blush-200 text-charcoal text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
                            Our Impact
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl text-charcoal">
                            Supporting Local Foundations
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-2xl border border-rose-light bg-card p-8 transition-all hover:shadow-md">
                            <h3 className="font-heading text-2xl text-charcoal mb-2">
                                Local Community Organizations
                            </h3>
                            <p className="text-charcoal-light leading-relaxed">
                                We partner with foundations right here in Prosper and the surrounding
                                areas. Our goal is to keep the impact close to home, supporting the
                                people and programs that need it most.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-rose-light bg-card p-8 transition-all hover:shadow-md">
                            <h3 className="font-heading text-2xl text-charcoal mb-2">
                                Youth & Education Programs
                            </h3>
                            <p className="text-charcoal-light leading-relaxed">
                                As student-run business owners ourselves, we understand the value
                                of education and opportunity. We support programs that empower young
                                people in our community.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-rose-light bg-card p-8 transition-all hover:shadow-md">
                            <h3 className="font-heading text-2xl text-charcoal mb-2">
                                Food Security Initiatives
                            </h3>
                            <p className="text-charcoal-light leading-relaxed">
                                Because we believe everyone deserves access to good food. We contribute
                                to local food banks and initiatives working to end food insecurity
                                in our area.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-20 md:py-28 px-4 bg-blush-200">
                <div className="container mx-auto max-w-2xl text-center">
                    <h2 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
                        Sweet Treats, Sweeter Impact
                    </h2>
                    <p className="text-charcoal-light text-lg mb-8">
                        Every order you place helps us give back. Ready to make a difference?
                    </p>
                    <Button asChild size="lg">
                        <Link href="/order">Order Now</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
