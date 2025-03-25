import type { Product } from "@/lib/types"

export const products: Product[] = [
  {
    id: "brownie-classic",
    name: "Classic Fudge Brownie",
    description:
      "Rich, fudgy brownie with a crackly top and gooey center. Made with premium dark chocolate for an intense chocolate experience.",
    price: 1.50,
    image: "/brownies.jpg?height=600&width=600",
    category: "brownies",
    ingredients: ["Dark chocolate", "Butter", "Sugar", "Eggs", "Flour", "Vanilla extract", "Salt"],
    allergens: ["Eggs", "Dairy", "Wheat"],
    featured: true,
  },
  {
    id: "cookie-chocolate-chip",
    name: "Classic Chocolate Chip Cookie",
    description: "Soft and chewy chocolate chip cookie with a perfect balance of sweet dough and chocolate chunks.",
    price: 1.50,
    image: "/cookies1.png?height=600&width=600",
    category: "cookies",
    ingredients: [
      "Butter",
      "Brown sugar",
      "White sugar",
      "Eggs",
      "Vanilla extract",
      "Flour",
      "Baking soda",
      "Salt",
      "Chocolate chips",
    ],
    allergens: ["Eggs", "Dairy", "Wheat"],
    featured: true,
  },
]

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

