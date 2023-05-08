import React from 'react';
import BillingAddress from './BillingAddress';
import ShippingMethod from './ShippingMethod';
import ShoppingCart from './ShoppingCart';
import YourOrder from './YourOrder';

const CheckOut = () => {
    return (
     <span>
      <div class="cart-box-main">
        <div class="container">
        <div class="row">
         <BillingAddress></BillingAddress>
          <div class="col-sm-6 col-lg-6 mb-3">
            <div class="row">
             <ShippingMethod></ShippingMethod>
             <ShoppingCart></ShoppingCart>
             <YourOrder></YourOrder>
            </div>
          </div>
        </div>
       </div>
       </div>
     </span>
    );
};

export default CheckOut;