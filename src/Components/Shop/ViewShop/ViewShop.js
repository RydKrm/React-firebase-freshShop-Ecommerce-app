import React from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from '../../About/HeroSection';
import ProductShop from '../ProductShop.js/ProductShop';
import ShopSideBar from '../ShopSideBar';
import ProductViewShop from './ProductViewShop';

const ViewShop = () => {
    const params = useParams();
    const shop_id = params.shop_id;
    return (
      <div>
        <HeroSection></HeroSection>
        <div class="shop-box-inner">
          <div class="container">
            <div class="row">
              <ProductViewShop shop_id={shop_id}></ProductViewShop>
              <ShopSideBar></ShopSideBar>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ViewShop;