import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useFetchOrder(id,state) {
    const [order,setOrder]=useState({})
    useEffect(()=>{
        axios.get("http://localhost:3000/orders/"+id)
        .then((res)=>setOrder(res.data))
        .catch((e)=>console.log(e))
    },[state])
  return (
    order
  )
}

export default useFetchOrder