import React from 'react';

const CartCoupon = () => {
    return (
    <div className="row my-5">
    <div className="col-lg-6 col-sm-6">
        <div className="coupon-box">
            <div className="input-group input-group-sm">
                <input className="form-control" placeholder="Enter your coupon code" aria-label="Coupon code" type="text"/>
                <div className="input-group-append">
                    <button className="btn btn-theme" type="button">Apply Coupon</button>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-6 col-sm-6">
        <div className="update-box">
            <input value="Update Cart" type="submit"/>
        </div>
    </div>
    </div>
    );
};

export default CartCoupon;