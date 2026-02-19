"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group hover-lift rounded-2xl border border-rose-light bg-card overflow-hidden transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto min-h-[180px] overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"
              }`}
          />
          {product.badge && (
            <span className="absolute top-3 right-3 bg-rose text-white text-xs font-medium px-2.5 py-1 rounded-full">
              {product.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
          <Link href={`/shop/${product.id}`}>
            <h3 className="font-heading text-xl text-charcoal hover:text-rose-dark transition-all duration-300 motion-safe:group-hover:translate-x-0.5 mb-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-sm text-rose-dark font-medium mb-3">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-sm text-charcoal-light leading-relaxed line-clamp-3">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  )
}
