import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetchOrder from '../hooks/useFetchOrder'
import { productsContext } from '../store/ProductsStore'
import { cakeContext } from '../store/CakeStore'
import { orderContext, updateOrderAction } from '../store/orderStore/OrderStore'

function OrderDetails() {
    const params=useParams()
    const [state,setState]=useState(true)

    const order=useFetchOrder(params.id,state)

    console.log("🚀 ~ OrderDetails ~ order:", order)

    const {products}=useContext(productsContext)
    const cakes=useContext(cakeContext)
    const {orders,dispatchOrders}=useContext(orderContext)
    var prods=products.filter(prod=>order.order?.find((p)=>prod.id==p.product))
    var caks=cakes.filter(prod=>order.order?.find((p)=>prod.id==p.product))
    var orderProducts=[...prods,...caks]
   
orderProducts=orderProducts.map(prod=>{var ele=order.order?.find((p)=>prod.id==p.product)

    
    if(ele){
        return     {...prod,quantity:ele.quantity}
    }
})

function updateOrder(param){
    axios.put("http://localhost:3000/orders/"+order.id,{...order,status:param})
    .then((res)=>{ console.log(res) ;dispatchOrders(updateOrderAction(res.data));return res})
    .then((res)=>setState(!state))

    .catch(e=>console.log(e))
}

console.log("render")
  return (
    <div>
        <h1>{order?.id} </h1>
        <div className="user">
            <h1>{order?.user?.name}</h1>
            <p>{order?.user?.email}</p>
        </div>

        <div className="products">
            {orderProducts.map((prod)=><h1>{prod.title} <span> : {prod.quantity}</span></h1> )}
        </div>
        <p>{order?.status}</p>
        <button onClick={()=>updateOrder("done")}>done</button>
        <button onClick={()=>updateOrder("canceled")}>canceled</button>


    </div>
  )
}

export default OrderDetails