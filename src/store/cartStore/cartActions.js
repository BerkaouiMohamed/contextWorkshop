export const addToCartAction=function(param){
    return {type:"ADDTOCART",payload:param}
}

export const deleteFromCartAction=function(param){
    return {type:"DELETEFROMCART",payload:param}
}