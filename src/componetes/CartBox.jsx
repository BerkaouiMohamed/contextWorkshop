import React, { useContext } from 'react'
import { cartContext } from '../store/cartStore/CartStore'
import { decrementProductQuantity, deleteFromCartAction, incrementProductQuantity } from '../store/cartStore/cartActions'

function CartBox({element}) {
  const {dispatchCart}=useContext(cartContext)
  return (
    <div className='cartbox'>
        <img src={element?.product?.image} alt="" />
        <p>{element?.product?.title} </p>
        <button onClick={()=>dispatchCart(decrementProductQuantity(element)) }>-</button>
        <h4>{element?.quantity}</h4>
        <button  onClick={()=>dispatchCart(incrementProductQuantity(element.product))}>+</button>
        <button onClick={()=>dispatchCart(deleteFromCartAction(element.product))}>delete</button>


    </div>
  )
}

export default CartBox