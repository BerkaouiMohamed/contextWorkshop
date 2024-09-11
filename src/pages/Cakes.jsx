import React, { useContext } from 'react'
import Box from '../componetes/Box'
import { cakeContext } from '../store/CakeStore'

function Products() {
  const cakes=useContext(cakeContext)

  return (
    <div className='products'>
      {cakes.map((cake)=><Box product ={cake}/>)}
    </div>
  )
}

export default Products
