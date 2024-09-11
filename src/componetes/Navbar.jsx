import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../store/cartStore/CartStore";

function Navbar() {
  const {cart}=useContext(cartContext)
  return (
    <div className="navbar">
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
    </div>
  );
}

export default Navbar;
