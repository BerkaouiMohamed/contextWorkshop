import React, { useContext } from 'react'
import { productsContext } from '../store/ProductsStore'
import Box from '../componetes/Box'
import { motion } from 'framer-motion'

function Products() {
  const {products}=useContext(productsContext)

  return (
    <motion.div key={"products"} initial={{opacity:0 ,x:-1000,}}  transition={{duration:0.5}} animate={{opacity:1,x:0}} exit={{opacity:0 ,x:1000}} className='products'>
      {products.map((product)=><Box key={product.id} product ={product}/>)}
    </motion.div>
  )
}

export default Products
