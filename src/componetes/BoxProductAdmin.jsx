import React, { useContext } from "react";
import { productsContext } from "../store/ProductsStore";
import { deleteProduct } from "../store/productActions";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function BoxProductAdmin({ product }) {
  const { dispatchProducts } = useContext(productsContext);
  const navigate = useNavigate();
  function handleDeleteProduct() {
    axios
      .delete(`http://localhost:3000/products/${product.id}`)
      .then((res) => {
        toast.success("deleted");
        dispatchProducts(deleteProduct(product));
      })
      .catch((e) => console.log(e));
  }
  return (
    <div className="productbox">
      <h5>{product.title}</h5>
      <div>
        <button onClick={handleDeleteProduct}>delete</button>
        <button onClick={() => navigate("/admin/updateproduct/" + product.id)}>
          update
        </button>
      </div>
    </div>
  );
}

export default BoxProductAdmin;
