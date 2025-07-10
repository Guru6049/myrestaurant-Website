'use client'

import { useRouter } from 'next/navigation'  // use this in App Router, not 'next/router'
import React from 'react'

const OrderComponent = () => {
  const router = useRouter()

  const handleRouter = () => {
    router.push('/order')
  }

  return (
    <div>
      <button onClick={handleRouter}>Place Order</button>
    </div>
  )
}

export default OrderComponent
