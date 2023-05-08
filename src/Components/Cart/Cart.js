import React from 'react';
import HeroSection from '../About/HeroSection';
import ListCart from './ListCart';
import SummaryCart from './SummaryCart';
import CartCoupon from './CartCoupon';

const Cart = () => {
    return (
    <span>
      <HeroSection></HeroSection>      
      <div class="cart-box-main">
        <div class="container">
    
          <ListCart></ListCart>
          <CartCoupon></CartCoupon>
          <SummaryCart></SummaryCart>
      </div>
    </div>  
   </span>
    
    );
};

export default Cart;