import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { productsContext } from "../store/ProductsStore";
import { addProductAction, updateProduct } from "../store/productActions";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const params = useParams();
  const [formData, setFormData] = useState({});
  const { dispatchProducts } = useContext(productsContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/products/" + params.id)
      .then((res) => setFormData(res.data))
      .catch((e) => console.log(e));
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put("http://localhost:3000/products/" + params.id, formData)
      .then((res) => {
        navigate(-1);
        dispatchProducts(updateProduct(res.data));
        toast.success("done");
      })
      .catch((e) => console.log(e));
  }
  return (
    <form className="form-container">
      <div className="form-group">
        <label htmlFor="name">title:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="number"
          id="email"
          name="email"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>

      <button onClick={handleSubmit} className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default UpdateProduct;
