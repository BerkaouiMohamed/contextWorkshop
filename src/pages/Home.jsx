import { productsContext } from "../store/ProductsStore";
import { useContext } from "react";
import Box from "../componetes/Box";
import { cakeContext } from "../store/CakeStore";

function Home() {
  const products = useContext(productsContext);
  const cakes = useContext(cakeContext);
  const homeProducts = products.slice(0, 4);
  const cakesHome = cakes.slice(0, 4);

  return (
    <div className="home">
        <h1 >best sellers of our products</h1>
      <div className="home-products">
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
    </div>
  );
}

export default Home;
