import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getProductById } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="pt-28 pb-16 container mx-auto px-4">
      <Link
        href="/shop"
        className="inline-flex items-center gap-1 text-sm text-charcoal-light hover:text-rose-dark transition-colors mb-8"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to Menu
      </Link>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-rose-light">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          {product.badge && (
            <span className="absolute top-4 right-4 bg-rose text-white text-xs font-medium px-3 py-1 rounded-full">
              {product.badge}
            </span>
          )}
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <h1 className="font-heading text-3xl md:text-4xl text-charcoal mb-2">
              {product.name}
            </h1>
            <p className="text-xl font-medium text-rose-dark">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div className="border-t border-rose-light/50 pt-5">
            <h2 className="font-heading text-xl text-charcoal mb-2">Description</h2>
            <p className="text-charcoal-light leading-relaxed">{product.description}</p>
          </div>

          {product.ingredients && (
            <div className="border-t border-rose-light/50 pt-5">
              <h2 className="font-heading text-xl text-charcoal mb-2">Ingredients</h2>
              <p className="text-charcoal-light">{product.ingredients.join(", ")}</p>
            </div>
          )}

          {product.allergens && (
            <div className="border-t border-rose-light/50 pt-5">
              <h2 className="font-heading text-xl text-charcoal mb-2">Allergens</h2>
              <div className="flex flex-wrap gap-2">
                {product.allergens.map((allergen) => (
                  <span
                    key={allergen}
                    className="bg-blush-100 text-charcoal-light px-3 py-1 rounded-full text-sm"
                  >
                    {allergen}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="pt-4">
            <Button asChild size="lg" className="w-full">
              <Link href="/order">Order Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
