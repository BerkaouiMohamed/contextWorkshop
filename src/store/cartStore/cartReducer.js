function cartReducer(state,action){
    if(action.type==="ADDTOCART"){
       var addedProd= state.find((e)=>e.product.id==action.payload.id)
       if(!addedProd){
        return [...state,{product:action.payload,quantity:1}]
       }
       return state.map((e)=>e.product.id===action.payload.id?{...e,quantity:++e.quantity}:e)
        
      
    }

    if(action.type==="DELETEFROMCART"){
        return state.filter((prod)=>prod.product.id!==action.payload.id)
    }
    else{
        return state
    }
}
export default cartReducer