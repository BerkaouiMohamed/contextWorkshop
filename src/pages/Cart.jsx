import React, { useContext } from 'react'
import { cartContext } from '../store/cartStore/CartStore'
import CartBox from '../componetes/CartBox'

function Cart() {
    const {cart}=useContext(cartContext)
  return (
    <div className='cart-container'>
        {cart.map(e=><CartBox element={e} />)}
    </div>
  )
}

export default Cart