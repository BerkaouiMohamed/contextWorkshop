import React, { useContext } from 'react'
import { productsContext } from '../store/ProductsStore'
import BoxProductAdmin from '../componetes/BoxProductAdmin'

function Products() {
    const {products}=useContext(productsContext)
  return (
    <div>

        {products.map(p=><BoxProductAdmin product={p}/>)}


    </div>
  )
}

export default Products