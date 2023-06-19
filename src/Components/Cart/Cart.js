import React, { useEffect, useState } from 'react';
import HeroSection from '../About/HeroSection';
import ListCart from './ListCart';
import SummaryCart from './SummaryCart';
import CartCoupon from './CartCoupon';

const Cart = () => {
  const [price,setPrice] = useState(0);
  // let value = 0;
  const getPrice = (data)=>{
    setPrice(data);
    console.log("Added Price, ",data );
   // value = data;
  }

  // useEffect(()=>{
  //   setPrice(value);
  // },[price])

    return (
    <span>
      <HeroSection></HeroSection>      
      <div className="cart-box-main">
        <div className="container">
    
          <ListCart getPrice={getPrice}></ListCart>
          <CartCoupon></CartCoupon>
          <SummaryCart data={price}></SummaryCart>
      </div>
    </div>  
   </span>
    
    );
};

export default Cart;