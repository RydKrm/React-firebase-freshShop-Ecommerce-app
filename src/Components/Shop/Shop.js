import React from 'react';
import HeroSection from '../About/HeroSection';
import ProductShop from './ProductShop.js/ProductShop';
import ShopSideBar from './ShopSideBar';

const Shop = () => {
    return (

    <div>
      <HeroSection></HeroSection>
      <div class="shop-box-inner">
        <div class="container">
        <div class="row">
         <ProductShop></ProductShop>
         <ShopSideBar></ShopSideBar>
         </div>
        </div>
     </div>
        
    </div>


    );
};

export default Shop;