export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  badge?: string
  ingredients?: string[]
  allergens?: string[]
  featured?: boolean
}

export type OrderDetails = {
  firstName: string
  lastName: string
  email: string
  phone: string
  address?: string
  city?: string
  state?: string
  zipCode?: string
  deliveryMethod: "pickup" | "delivery"
  pickupDate?: string
  pickupTime?: string
  specialInstructions?: string
}

