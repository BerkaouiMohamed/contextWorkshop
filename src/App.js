import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./componetes/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsAdmin from "./adminPages/Products";
import Cakes from "./pages/Cakes";
import ProductsStore from "./store/ProductsStore";
import CakeStore from "./store/CakeStore";
import SingleProduct from "./pages/SingleProduct";
import SingleCake from "./pages/SingleCake";
import CartStore from "./store/cartStore/CartStore";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderForm from "./pages/OrderForm";
import DashbordAdmin from "./adminPages/DashbordAdmin";
import Orders from "./adminPages/Orders";
import AddProduct from "./adminPages/AddProduct";
import UpdateProduct from "./adminPages/UpdateProdcut";
function App() {
  return (
    <div>
      <CartStore>
        <Navbar />
        <ToastContainer />
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
              <Route path="/order" element={<OrderForm />} />
              <Route path="/error" element={<h1>somthing went wrong</h1>} />
            </Routes>

            <Routes>
              <Route path="/admin/" element={<DashbordAdmin />}>
                <Route path="orders" element={<Orders />} />
                <Route path="products" element={<ProductsAdmin />} />
                <Route path="addproduct" element={<AddProduct />} />
                <Route path="updateproduct/:id" element={<UpdateProduct />} />
              </Route>
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </CakeStore>
        </ProductsStore>
      </CartStore>
    </div>
  );
}

export default App;
