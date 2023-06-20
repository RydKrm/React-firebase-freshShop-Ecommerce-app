import React, { useEffect, useState } from 'react';
import HeroSection from '../About/HeroSection';
import ListCart from './ListCart';
import SummaryCart from './SummaryCart';
import CartCoupon from './CartCoupon';
import { createContext } from 'react';

 export const CartContext = createContext({});


const Cart = () => {
  const [allProduct,setAllProduct] = useState([]); 
  const [totalPrice,setTotalPrice] = useState(0);
  const [check,setCheck] = useState(false);

  useEffect(()=>{ const collectAllProduct = async () => {
    const  allProductData = JSON.parse(localStorage.getItem("fresh_shop_cart"));
    const parsedAllProduct = Array.isArray(allProductData) ? allProductData : [];
    setAllProduct(parsedAllProduct);
    setCheck(true);
  };collectAllProduct()
},[])

 useEffect(() => {
  const initialPrice = allProduct.reduce(
    (accumulator, ap) => accumulator + Number(ap.price),0);
  setTotalPrice(initialPrice);
 },[check]);

    return (
      <CartContext.Provider value={{allProduct,setAllProduct,totalPrice,setTotalPrice}}> 
      <HeroSection></HeroSection>      
      <div className="cart-box-main">
        <div className="container">
          <ListCart />  
          <CartCoupon /> 
          <SummaryCart /> 
      </div>
    </div>  
  </CartContext.Provider>
    
    );
};

export default Cart;