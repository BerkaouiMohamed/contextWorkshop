
import {useParams } from "react-router-dom";
import useFetchProduct from "../hooks/useFetchProduct";
import { useContext } from "react";
import { cartContext } from "../store/cartStore/CartStore";
import { addToCartAction } from "../store/cartStore/cartActions";

function SingleProduct() {
  const params = useParams();
  const product = useFetchProduct(params.id);
  const {dispatchCart}=useContext(cartContext)

  return (
    <div className="single-product">
      <img src={product.image} alt="" />
      <div className="product-desc">
        <h2>{product.title} </h2>
        <p>{product.description} </p>
        <p>{product.price} </p>
        <button onClick={()=>dispatchCart(addToCartAction(product))}>add to cart</button>
      </div>
    </div>
  );
}

export default SingleProduct;
