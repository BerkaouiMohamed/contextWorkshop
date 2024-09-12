export const fetchaction=function(param){
    return {type:"FETCHDATA",payload:param}
  }
  export const addProductAction=function(param){
    return {type:"ADDPRODUCT",payload:param}
  }
  
export const deleteProduct=function(param){
  return {type:"DELETEPRODUCT",payload:param}
}

export const updateProduct=function(param){
  return {type:"UPDATEPRODUCT",payload:param}
}