import React, { useContext } from 'react'
import { orderContext } from '../store/orderStore/OrderStore'
import OrderBox from '../componetes/OrderBox'

function Orders() {
    const {orders}=useContext(orderContext)
    console.log(orders)
  return (
    <div>

      {orders.map(order=><OrderBox order={order}/>)}

    </div>
  )
}

export default Orders