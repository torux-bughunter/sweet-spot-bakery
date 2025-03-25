"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl border border-gray-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/shop/${product.id}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
          />
          {product.badge && (
            <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {product.badge}
            </span>
          )}
        </div>
      </Link>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/shop/${product.id}`}>
            <h3 className="font-playfair font-bold text-lg text-brown-800 hover:text-pink-500 transition-colors">
              {product.name}
            </h3>
          </Link>
          <span className="font-bold text-brown-800">${product.price.toFixed(2)}</span>
        </div>

        <p className="text-brown-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <Button asChild className="w-full bg-brown-700 hover:bg-brown-800 text-white">
          <Link href="/order">
            <FileText className="h-4 w-4 mr-2" />
            Order Now
          </Link>
        </Button>
      </div>
    </div>
  )
}

