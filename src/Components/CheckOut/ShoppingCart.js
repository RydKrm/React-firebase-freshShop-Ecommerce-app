import React from 'react';

const ShoppingCart = () => {
    return (
      <div className="col-md-12 col-lg-12 text-left">
        <div className="odr-box">
          <div className="title-left">
            <h3>Shopping cart</h3>
          </div>
          <div className="rounded p-2 bg-light">
            <div className="media mb-2 border-bottom">
              <div className="media-body">
                <a href="detail.html"> Lorem ipsum dolor sit amet</a>
                <div className="small text-muted">
                  Price: $80.00 <span className="mx-2">|</span> Qty: 1{" "}
                  <span className="mx-2">|</span> Subtotal: $80.00
                </div>
              </div>
            </div>
            <div className="media mb-2 border-bottom">
              <div className="media-body">
                <a href="detail.html"> Lorem ipsum dolor sit amet</a>
                <div className="small text-muted">
                  Price: $60.00 <span className="mx-2">|</span> Qty: 1{" "}
                  <span className="mx-2">|</span> Subtotal: $60.00
                </div>
              </div>
            </div>
            <div className="media mb-2">
              <div className="media-body">
                <a href="detail.html"> Lorem ipsum dolor sit amet</a>
                <div className="small text-muted">
                  Price: $40.00 <span className="mx-2">|</span> Qty: 1{" "}
                  <span className="mx-2">|</span> Subtotal: $40.00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ShoppingCart;