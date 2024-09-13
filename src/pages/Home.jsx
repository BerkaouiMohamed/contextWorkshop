import { productsContext } from "../store/ProductsStore";
import { useContext } from "react";
import Box from "../componetes/Box";
import { cakeContext } from "../store/CakeStore";
import { motion } from "framer-motion";
function Home() {
  const {products} = useContext(productsContext);
  const cakes = useContext(cakeContext);
  const homeProducts = products.slice(0, 4);
  const cakesHome = cakes.slice(0, 4);

  return (
    <motion.div  key={"home"}  initial={{opacity:0 ,scaleY:0}}  transition={{duration:0.2}} animate={{opacity:1,scaleY:1}} exit={{opacity:0 ,scaleY:0}} className="home">
        <h1 >best sellers of our products</h1>      <div className="home-products">
        {homeProducts.map((product) => (
          <Box key={product.id} product={product} />
        ))}
      </div>
      <h1>best sellers of our cake</h1>
      <div className="home-products">
        {cakesHome.map((cake) => (
          <Box key={cake.id} product={cake} />
        ))}
      </div>
    </motion.div>
  );
}

export default Home;
