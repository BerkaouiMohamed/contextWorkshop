import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./componetes/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cakes from "./pages/Cakes";
import ProductsStore from "./store/ProductsStore";
import CakeStore from "./store/CakeStore";
import SingleProduct from "./pages/SingleProduct";
import SingleCake from "./pages/SingleCake";
import CartStore from "./store/cartStore/CartStore";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <CartStore>
        <Navbar />
        <ProductsStore>
          <CakeStore>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<SingleProduct />} />
              <Route path="/cake/" element={<Outlet />}>
                <Route path="" element={<Cakes />} />
                <Route path=":id" element={<SingleCake />} />
              </Route>
              <Route path="/cart" element={<Cart />} />
              <Route path="/error" element={<h1>somthing went wrong</h1>} />
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </CakeStore>
        </ProductsStore>
      </CartStore>
    </div>
  );
}

export default App;
