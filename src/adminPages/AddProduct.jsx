import React, { useContext, useState } from 'react';
import axios from 'axios';
import { productsContext } from '../store/ProductsStore';
import { addProductAction } from '../store/productActions';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const [formData, setFormData] = useState({ });
  const {dispatchProducts}=useContext(productsContext)
function handleSubmit(e){
e.preventDefault()
axios.post("http://localhost:3000/products",formData)
.then(res=>{
    toast.success('added')
    dispatchProducts(addProductAction(res.data))})
.catch(e=>console.log(e))
}
  return (
    <form className="form-container" >
      <div className="form-group">
        <label htmlFor="name">title:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e)=>setFormData({...formData,title:e.target.value})}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="number"
          id="email"
          name="email"

          onChange={(e)=>setFormData({...formData,price:e.target.value})}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
        
         
          onChange={(e)=>setFormData({...formData,description:e.target.value})}
        />
      </div>
      
      <button onClick={handleSubmit} className="submit-button">Submit</button>
    </form>
  );
};

export default AddProduct;
