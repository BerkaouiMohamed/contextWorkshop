import React, { useContext } from 'react'
import { orderContext } from '../store/orderStore/OrderStore'

function Orders() {
    const {orders}=useContext(orderContext)
    console.log(orders)
  return (
    <div>

    </div>
  )
}

export default Orders