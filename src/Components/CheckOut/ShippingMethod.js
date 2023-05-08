import React from 'react';

const ShippingMethod = () => {
    return (
    <div class="col-md-12 col-lg-12 text-left">
    <div class="shipping-method-box">
        <div class="title-left">
            <h3>Shipping Method</h3>
        </div>
        <div class="mb-4">
            <div class="custom-control custom-radio">
                <input id="shippingOption1" name="shipping-option" class="custom-control-input" checked="checked" type="radio" />
                <label class="custom-control-label" for="shippingOption1">Standard Delivery</label> <span class="float-right font-weight-bold">FREE</span> </div>
            <div class="ml-4 mb-2 small">(3-7 business days)</div>
            <div class="custom-control custom-radio">
                <input id="shippingOption2" name="shipping-option" class="custom-control-input" type="radio" />
                <label class="custom-control-label" for="shippingOption2">Express Delivery</label> <span class="float-right font-weight-bold">$10.00</span> </div>
            <div class="ml-4 mb-2 small">(2-4 business days)</div>
            <div class="custom-control custom-radio">
                <input id="shippingOption3" name="shipping-option" class="custom-control-input" type="radio" />
                <label class="custom-control-label" for="shippingOption3">Next Business day</label> <span class="float-right font-weight-bold">$20.00</span> </div>
        </div>
    </div>
</div>
    );
};

export default ShippingMethod;