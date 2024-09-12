


export const addToCartAction=function(param){

    return {type:"ADDTOCART",payload:param}
}

export const deleteFromCartAction=function(param){
    return {type:"DELETEFROMCART",payload:param}
}

export const incrementProductQuantity=function(param){
    return {type:"INCREMENT",payload:param}
}
export const decrementProductQuantity=function(param){
    return {type:"DECREMENT",payload:param}
}
export const deleteCart=function(){
    return {type:"DELETECART"}
}