import React from 'react'
import { Link } from 'react-router-dom'

function OrderBox({order}) {
  var  orderProducts=order.order.reduce((a,order)=>a+=order.quantity,0)
  return (
    <div className='orderBox'>
        <p>{order.id}</p>
        <h3>{order.user.email} </h3>
        <p>  {orderProducts}  product(s)</p>
   <button>       <Link to={"/admin/orders/"+order.id}>show more</Link></button>
    </div>
  )
}

export default OrderBox