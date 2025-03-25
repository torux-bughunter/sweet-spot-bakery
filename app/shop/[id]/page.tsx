import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getProductById } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft, FileText } from "lucide-react"

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
    <div className="container mx-auto px-4 py-12">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/shop" className="flex items-center text-brown-700">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>
      </Button>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="relative aspect-square overflow-hidden rounded-xl border">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" priority />
          {product.badge && (
            <span className="absolute top-4 right-4 bg-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full">
              {product.badge}
            </span>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-brown-800 mb-2">{product.name}</h1>
            <p className="text-2xl font-bold text-brown-700">${product.price.toFixed(2)}</p>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl font-bold text-brown-800 mb-2">Description</h2>
            <p className="text-brown-600">{product.description}</p>
          </div>

          {product.ingredients && (
            <div>
              <h2 className="text-xl font-bold text-brown-800 mb-2">Ingredients</h2>
              <p className="text-brown-600">{product.ingredients.join(", ")}</p>
            </div>
          )}

          {product.allergens && (
            <div>
              <h2 className="text-xl font-bold text-brown-800 mb-2">Allergens</h2>
              <div className="flex flex-wrap gap-2">
                {product.allergens.map((allergen) => (
                  <span key={allergen} className="bg-muted text-brown-700 px-3 py-1 rounded-full text-sm">
                    {allergen}
                  </span>
                ))}
              </div>
            </div>
          )}

          <Separator />

          <Button asChild size="lg" className="w-full bg-pink-500 hover:bg-pink-600 text-white">
            <Link href="/order" className="flex items-center justify-center">
              <FileText className="mr-2 h-5 w-5" />
              Order Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

