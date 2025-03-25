"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to the order page
    router.push('/order')
  }, [router])

  return null // Don't render anything as we're redirecting
}

