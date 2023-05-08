import React from 'react';
import { Link } from 'react-router-dom';

const YourOrder = () => {
    return (
      <span>
        <div class="col-md-12 col-lg-12">
          <div class="order-box">
            <div class="title-left">
              <h3>Your order</h3>
            </div>
            <div class="d-flex">
              <div class="font-weight-bold">Product</div>
              <div class="ml-auto font-weight-bold">Total</div>
            </div>
            <hr class="my-1" />
            <div class="d-flex">
              <h4>Sub Total</h4>
              <div class="ml-auto font-weight-bold"> $ 440 </div>
            </div>
            <div class="d-flex">
              <h4>Discount</h4>
              <div class="ml-auto font-weight-bold"> $ 40 </div>
            </div>
            <hr class="my-1" />
            <div class="d-flex">
              <h4>Coupon Discount</h4>
              <div class="ml-auto font-weight-bold"> $ 10 </div>
            </div>
            <div class="d-flex">
              <h4>Tax</h4>
              <div class="ml-auto font-weight-bold"> $ 2 </div>
            </div>
            <div class="d-flex">
              <h4>Shipping Cost</h4>
              <div class="ml-auto font-weight-bold"> Free </div>
            </div>
            <hr />
            <div class="d-flex gr-total">
              <h5>Grand Total</h5>
              <div class="ml-auto h5"> $ 388 </div>
            </div>
            <hr />
          </div>
        </div>
        <div class="col-12 d-flex shopping-box">
          <Link to="/checkout" class=".btn.hvr-hover.btn-register">
            Place Order
          </Link>
        </div>
      </span>
    );
};

export default YourOrder;