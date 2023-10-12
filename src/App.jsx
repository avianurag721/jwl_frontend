import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import AddProduct from "./components/AddProduct";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className=" w-full min-h-screen  ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
