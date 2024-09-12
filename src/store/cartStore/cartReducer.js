import { toast } from "react-toastify";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADDTOCART": {
      var addedProd = state.find((e) => e.product.id == action.payload.id);
      if (!addedProd) {
        toast.success("added");
        return [...state, { product: action.payload, quantity: 1 }];
      }
      return state.map((e) =>
        e.product.id === action.payload.id
          ? { ...e, quantity: ++e.quantity }
          : e
      );
    }
    case "DELETEFROMCART": {
      toast.success("deleted");
      return state.filter((prod) => prod.product.id !== action.payload.id);
    }

    case "INCREMENT": {
      return state.map((prod) =>
        prod.product.id === action.payload.id
          ? { ...prod, quantity: ++prod.quantity }
          : prod
      );
    }
    case "DECREMENT": {
      if (action.payload.quantity > 1) {
        return state.map((prod) =>
          prod.product.id === action.payload.product.id
            ? { ...prod, quantity: --prod.quantity }
            : prod
        );
      }
      toast.success("deleted");
      return state.filter(
        (prod) => prod.product.id !== action.payload.product.id
      );
    }
    case "DELETECART":return []
    default:
      return state;
  }
}
export default cartReducer;
