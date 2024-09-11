import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useFetchCake(id) {
    const [cake,setCake]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:3000/cake/${id}`)
        .then(res=>setCake(res.data))
        .catch((e)=>console.log(e))
    },[])
  return (
    cake
  )
}

export default useFetchCake