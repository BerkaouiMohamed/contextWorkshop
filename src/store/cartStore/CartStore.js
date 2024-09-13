import React, { createContext, useReducer } from "react";
import cartReducer from "./cartReducer";

export const cartContext = createContext();

function CartStore({ children }) {
  const [cart, dispatchCart] = useReducer(cartReducer, []);
  return (
    <cartContext.Provider value={{ cart, dispatchCart }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartStore;
