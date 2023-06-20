import React, { useContext, useEffect } from 'react';
import { CartContext } from './Cart';

const SummaryCart = () => {
  const {allProduct,totalPrice,setTotalPrice} = useContext(CartContext);

  useEffect(()=>{
  const initialPrice = allProduct.reduce(
    (accumulator, ap) => accumulator + Number(ap.price), 0);
  setTotalPrice(initialPrice);
  },[])

    return (
      <div className="row my-5">
        <div className="col-lg-8 col-sm-12"></div>
        <div className="col-lg-4 col-sm-12">
          <div className="order-box">
            <h3>Order summary</h3>
            <div className="d-flex">
              <h4>Sub Total</h4>
              <div className="ml-auto font-weight-bold"> {totalPrice} </div>
            </div>
            <div className="d-flex">
              <h4>Discount</h4>
              <div className="ml-auto font-weight-bold"> $ 40 </div>
            </div>
            <hr className="my-1" />
            <div className="d-flex">
              <h4>Coupon Discount</h4>
              <div className="ml-auto font-weight-bold"> $ 10 </div>
            </div>
            <div className="d-flex">
              <h4>Tax</h4>
              <div className="ml-auto font-weight-bold"> $ 2 </div>
            </div>
            <div className="d-flex">
              <h4>Shipping Cost</h4>
              <div className="ml-auto font-weight-bold"> Free </div>
            </div>
            <hr />
            <div className="d-flex gr-total">
              <h5>Grand Total</h5>
              <div className="ml-auto h5"> $ 388 </div>
            </div>
            <hr />{" "}
          </div>
        </div>
        <div className="col-12 d-flex shopping-box">
          <a href="checkout.html" className="ml-auto btn hvr-hover">
            Checkout
          </a>{" "}
        </div>
      </div>
    );
};

export default SummaryCart;