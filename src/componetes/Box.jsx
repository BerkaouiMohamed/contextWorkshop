import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../store/cartStore/CartStore";
import { addToCartAction } from "../store/cartStore/cartActions";
import { motion } from "framer-motion";
import { duration } from "@mui/material";
function Box({ product }) {
  const { cart, dispatchCart } = useContext(cartContext);
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1,y:0 }}
      exit={{ opacity: 0, y: -20  }}
      className="box"
    >
      <img src={product.image} alt="" />
      <h2>{product.title} </h2>
      <p>{product.price} </p>
      <div className="buttons">
        <motion.button
          whileHover={{ height: "70px", transition: "all 0.2s ease" }}
          whileTap={{ scale: 0.9 }}
        >
          {" "}
          <Link
            to={
              product.rating ? `/products/${product.id}` : `/cake/${product.id}`
            }
          >
            show more
          </Link>
        </motion.button>
        <motion.button onClick={() => dispatchCart(addToCartAction(product))}>
          add to cart
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Box;
