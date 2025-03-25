"use client"

import Link from "next/link"
import { CheckCircle, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function OrderConfirmationPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />

          <h1 className="text-3xl font-bold text-brown-800 mb-4">Thank You for Your Order!</h1>

          <p className="text-lg text-brown-600 mb-6">
            Your order has been received and is being processed. You will receive a confirmation email shortly.
          </p>

          <div className="bg-muted p-4 rounded-md mb-8">
            <p className="text-brown-700 font-medium">
              Order Number: #SWS-{Math.floor(100000 + Math.random() * 900000)}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="outline" size="lg">
              <Link href="/" className="flex items-center">
                Return to Home
              </Link>
            </Button>

            <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
              <Link href="/shop" className="flex items-center">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

