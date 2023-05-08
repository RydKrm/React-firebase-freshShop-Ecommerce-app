import React from 'react';
import { Link } from 'react-router-dom';

const MyCard = () => {
    return (
      <div className="side">
        <Link to="#" className="close-side">
          <i className="fa fa-times"></i>
        </Link>
        <li className="cart-box">
          <ul className="cart-list">
            <li>
              <Link to="#" className="photo">
                <img
                  src="images/img-pro-01.jpg"
                  className="cart-thumb"
                  alt=""
                />
              </Link>
              <h6>
                <Link to="#">Delica omtantur </Link>
              </h6>
              <p>
                1x - <span className="price">$80.00</span>
              </p>
            </li>
            <li>
              <Link to="#" className="photo">
                <img
                  src="images/img-pro-02.jpg"
                  className="cart-thumb"
                  alt=""
                />
              </Link>
              <h6>
                <Link to="#">Omnes ocurreret</Link>
              </h6>
              <p>
                1x - <span className="price">$60.00</span>
              </p>
            </li>
            <li>
              <Link to="#" className="photo">
                <img
                  src="images/img-pro-03.jpg"
                  className="cart-thumb"
                  alt=""
                />
              </Link>
              <h6>
                <Link to="#">Agam facilisis</Link>
              </h6>
              <p>
                1x - <span className="price">$40.00</span>
              </p>
            </li>
            <li className="total">
              <Link to="#" className="btn btn-default hvr-hover btn-cart">
                VIEW CART
              </Link>
              <span className="float-right">
                <strong>Total</strong>: $180.00
              </span>
            </li>
          </ul>
        </li>
      </div>
    );
};

export default MyCard;