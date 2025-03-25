"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactPage() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to the homepage
    router.push('/')
  }, [router])

  return null // Don't render anything as we're redirecting
}

