import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cartContext } from "../store/cartStore/CartStore";
import axios from "axios";
import { deleteCart } from "../store/cartStore/cartActions";
import { toast } from "react-toastify";

const OrderForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", adress: "" });
  const location = useLocation();
  const { cart, dispatchCart } = useContext(cartContext);
  const navigate=useNavigate()
  function handleSubmit(e){
    e.preventDefault()
    const order=cart.map(e=>{return {product:e.product.id,quantity:e.quantity}})
    axios.post("http://localhost:3000/orders",{user:formData,order:order,status:"pending"})
    .then(res=>{
        if(res.status===201||res.status===200){
            console.log(res)
            
            dispatchCart(deleteCart())
            toast.success('order submitted')
            navigate('/')

        }
    })
    .catch((e)=>toast.error('somthing went wrong'))
  }

  return (
    <form className="form-container">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">adress:</label>
        <input
          type="text"
          id="email"
          name="adress"
          onChange={(e) => setFormData({ ...formData, adress: e.target.value })}
        />
      </div>
      <h1>total price : {location.state}</h1>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default OrderForm;
