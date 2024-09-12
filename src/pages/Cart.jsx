import React, { useContext } from 'react'
import { cartContext } from '../store/cartStore/CartStore'
import CartBox from '../componetes/CartBox'
import { Link, useNavigate } from 'react-router-dom'

function Cart() {
    const {cart}=useContext(cartContext)
    const navigate=useNavigate()
    if(!cart.length){
      return navigate(-1)
    }
    else{
  var totalPrice=cart.reduce((acc,product)=>{
        return acc+=product.quantity*product.product.price
      },0)
      console.log(totalPrice);
      
  return (
    <div className='cart-container'>
        {cart.map(e=><CartBox element={e} />)}

        <h1>total  price: {totalPrice} $</h1>

        <button> <Link to={"/order" } state={totalPrice}>order now</Link></button>
    </div>
  )}
}

export default Cart