import React, { useContext } from 'react'
import { cartContext } from '../store/cartStore/CartStore'
import { deleteFromCartAction } from '../store/cartStore/cartActions'

function CartBox({element}) {
  const {dispatchCart}=useContext(cartContext)
  return (
    <div className='cartbox'>
        <img src={element.product.image} alt="" />
        <p>{element.product.title} </p>
        <h4>{element.quantity}</h4>
        <button onClick={()=>dispatchCart(deleteFromCartAction(element.product))}>delete</button>

    </div>
  )
}

export default CartBox