import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";
import productsReducer from "./productReducer";
import { fetchaction } from "./productActions";

export const productsContext = createContext();

function ProductsStore({ children }) {
  const [products, dispatchProducts] = useReducer(productsReducer, []);
  useEffect(()=>{
    axios.get('http://localhost:3000/products')
    .then(res=>dispatchProducts(fetchaction(res.data)))
  },[])
  return (
    <productsContext.Provider value={{products,dispatchProducts}}>
      {children}
    </productsContext.Provider>
  );
}

export default ProductsStore;
