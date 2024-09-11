import React, { createContext, useEffect, useReducer } from 'react'
import cakesReducer from './cakeReducer'
import axios from 'axios'
import { fetchActionCake } from './cakeActions'

export const cakeContext=createContext()


function CakeStore({children}) {
    const [cakes,dispatchCakes]=useReducer(cakesReducer,[])
    useEffect(()=>{
        axios.get('http://localhost:3000/cake')
        .then(res=>dispatchCakes(fetchActionCake(res.data)))
      },[])
    return (
    <cakeContext.Provider value={cakes}>
        {children}
    </cakeContext.Provider>
  )
}

export default CakeStore