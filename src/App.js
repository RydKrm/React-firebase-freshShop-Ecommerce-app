import {Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";
import Shop from "./Components/Shop/Shop";
import Cart from "./Components/Cart/Cart";
import CheckOut from "./Components/CheckOut/CheckOut";
import SignIn from "./Components/SignIn/SignIn";
import Register from "./Components/Register/Register";
import WishList from "./Components/WishList/WishList";
import MyAccount from "./Components/MyAccount/MyAccount";
import { createContext, useState } from "react";
import SellerRegister from "./Components/Register/SellerRegister";
import SellerSignin from "./Components/SignIn/SellerSignin";
import AddProduct from "./Components/Sellers/AddProduct";
import ShopDetails from "./Components/Sellers/ShopDetails/ShopDetails";
import SellerProduct from "./Components/Sellers/SellerProduct/SellerProduct";

export const userContext = createContext('none');

function App() {
const [checkUser, setCheckUser] = useState({ userRole: "none" });
  return (
    <userContext.Provider value={[checkUser, setCheckUser]}>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/gallery" element={<Gallery></Gallery>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          {/* Seller route */}
          <Route
            path="/seller_register"
            element={<SellerRegister></SellerRegister>}
          ></Route>
          <Route
            path="/seller_signin"
            element={<SellerSignin></SellerSignin>}
          ></Route>
          <Route
            path="/seller_product"
            element={<SellerProduct></SellerProduct>}
          ></Route>

          <Route
            path="/add_product"
            element={<AddProduct></AddProduct>}
          ></Route>
          <Route
            path="/shop_detail"
            element={<ShopDetails></ShopDetails>}
          ></Route>

          <Route path="/wishlist" element={<WishList></WishList>}></Route>
          <Route path="my-account" element={<MyAccount></MyAccount>}></Route>

          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </userContext.Provider>
  );
}

export default App;
