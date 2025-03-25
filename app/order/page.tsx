"use client"

import { useEffect } from "react"

export default function OrderPage() {
  // Add a resize listener to adjust iframe height if needed
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Handle potential messages from Google Form (if needed)
      if (event.origin.includes('google.com')) {
        console.log('Message from Google Form:', event.data);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-brown-800 mb-4">Place Your Order</h1>
        <p className="text-lg text-brown-600 max-w-2xl mx-auto">
          Fill out the form below to place your order. We'll contact you to confirm details and arrange payment.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLScoPlbbY9iyNYURLuu9vO8e8LB4ETAdArPcf2TjgAtHM5hdFA/viewform?embedded=true" 
          width="100%" 
          height="1751" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0"
          title="Sweet Spot Bakery Order Form"
          className="mx-auto"
        >
          Loading…
        </iframe>
      </div>
    </div>
  )
} 