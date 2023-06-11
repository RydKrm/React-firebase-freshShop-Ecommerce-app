import React from "react";
import { Link } from "react-router-dom";

const SingleViewShop = (props) => {
  const { id, product_name, price, image, shop_name,quantity } = props.shop;

  return (
    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
      <div className="products-single fix">
        <div className="box-img-hover">
          <div className="type-lb">
            <p className="sale">{product_name}</p>
          </div>
          <img src={image} className="img-fluid" alt="" />
          <div className="mask-icon">
            <ul>
              <li>
                <Link
                  to={`/product/${id}`}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="View"
                >
                  <i className="fas fa-eye"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="why-text">
          <h4>Price : {price}</h4>
         <h5>Quantity : {quantity} </h5>
         <h5>Shop Name : {shop_name}</h5>
        </div>
      </div>
    </div>
  );
};

export default SingleViewShop;
