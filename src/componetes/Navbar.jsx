import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../store/cartStore/CartStore";
import { useScroll, useTransform,motion } from "framer-motion";

function Navbar() {
  const { scrollY } = useScroll()
  console.log("🚀 ~ Navbar ~ scrollY:", scrollY)
const x = useTransform(
  scrollY,
  [10, 200,400],
  [`translateX(10px)`,"translateX(200px)","translateX(700px)"],

)
  const {cart}=useContext(cartContext)
  return (
    <motion.div style={{transform:x}} className="navbar">
      <h2>logo</h2>
      <div>
        <Link to="/">
          <p>home</p>
        </Link>
        <Link to={"/products"}>
          <p>products</p>
        </Link>
        <Link to={"/cake"}>
          <p>cake</p>
        </Link>
        <Link to={"/cart"}>
          <p style={{display:!cart.length?"none":"block"}}>cart</p>
        </Link>
      </div>
    </motion.div>
  );
}

export default Navbar;
