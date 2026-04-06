import Products from "../../Pages/products/Products.jsx";
import Profile from "../../Pages/profile/Profile.jsx";
import Contactus from "../../Pages/contactus/Contactus.jsx";
import Signup from "../../Pages/signup/Signup.jsx";
import Productdetails from "../../Pages/product-details/Productdetails.jsx";
import Home from "../../Pages/home/Home";
import myContext from "./Contextdata";
import Signin from "../../Pages/signin/Signin.jsx";
import Cart from "../../Pages/cart/Cart.jsx";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

function Container() {
  const { logindata } = useContext(myContext);

  

  return (
    <div>
      <Routes>
        <Route path={"/"} element={logindata ? <Home /> : <Signin />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-details/:id" element={<Productdetails />} />
        <Route path="/profile" element={logindata ? <Profile /> : <Signin />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default Container;