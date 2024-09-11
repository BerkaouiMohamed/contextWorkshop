import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../store/cartStore/CartStore";
import { addToCartAction } from "../store/cartStore/cartActions";

function Box({ product }) {
    const {cart,dispatchCart}=useContext(cartContext)
  return (
    <div className="box">
      <img src={product.image} alt="" />
      <h2>{product.title} </h2>
      <p>{product.price} </p>
      <div className="buttons">
      <button>  <Link to={product.rating?`/products/${product.id}`:`/cake/${product.id}`}>show more</Link></button>
        <button onClick={()=>dispatchCart(addToCartAction(product))}>add to cart</button>
      </div>
    </div>
  );
}

export default Box;
