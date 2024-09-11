import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useFetchProduct(id) {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((e) => console.log(e));
  }, [id]);
  return product;
}

export default useFetchProduct;
