import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";
export const orderContext = createContext();

function orderReducer(state, action) {
  switch (action.type) {
    case "FETCHORDERS":
      return action.payload;
      case "UPDATEORDER":return state.map(order=>order.id===action.payload.id?action.payload:order)
    default:
      return state;
  }
}

const fetchOrdersAction=function(param){
    return {type:"FETCHORDERS",payload:param}
}
export const updateOrderAction=function(param){
  return {type:"UPDATEORDER",payload:param}
}
function OrderStore({ children }) {
  const [orders, dispatchOrders] = useReducer(orderReducer, []);
  useEffect(()=>{
    axios.get('http://localhost:3000/orders')
    .then(res=>dispatchOrders(fetchOrdersAction(res.data)))
    .catch(e=>console.log(e)
    )
  },[])
  return <orderContext.Provider value={{orders, dispatchOrders}}>{children}</orderContext.Provider>;
}

export default OrderStore;
