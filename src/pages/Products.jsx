import React, { useContext } from 'react'
import { productsContext } from '../store/ProductsStore'
import Box from '../componetes/Box'

function Products() {
  const {products}=useContext(productsContext)

  return (
    <div className='products'>
      {products.map((product)=><Box key={product.id} product ={product}/>)}
    </div>
  )
}

export default Products
