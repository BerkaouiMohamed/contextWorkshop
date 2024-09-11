import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetchCake from '../hooks/useFetchCake'
import { addToCartAction } from '../store/cartStore/cartActions'
import { cartContext } from '../store/cartStore/CartStore'

function SingleCake() {
    const params=useParams()
    const cake=useFetchCake(params.id)
    const {dispatchCart}=useContext(cartContext)

  return (
    <div className="single-product">
    <img src={cake.image} alt="" />
    <div className="product-desc">
      <h2>{cake.title} </h2>
      <p>{cake.description} </p>
      <p>{cake.price} </p>
      <button onClick={()=>dispatchCart(addToCartAction(cake))}>add to cart</button>    </div>
  </div>
  )
}

export default SingleCake