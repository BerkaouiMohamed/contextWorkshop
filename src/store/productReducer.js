function productsReducer(state, action) {
    switch (action.type) {
      case "FETCHDATA":
        return action.payload;
      case "DELETEPRODUCT":
        return state.filter(p=>p.id!==action.payload.id)
        case "ADDPRODUCT":{ 
          return [...state,action.payload]}

          case "UPDATEPRODUCT":{
            return state.map(product=>product.id===action.payload.id?action.payload:product)}
      default:
        return state;
    }
  }
export default productsReducer  