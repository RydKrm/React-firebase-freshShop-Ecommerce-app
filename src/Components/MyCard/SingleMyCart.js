import React from 'react';
import { Link } from 'react-router-dom';

const SingleMyCart = (props) => {
    const {id,product_name,image,price} = props.data;
    return (
      <li>
        <Link to={`/product/${id}`} className="photo">
          <img src={image} className="cart-thumb" alt="" />
        </Link>
        <h6>
          <Link to="#">{product_name}</Link>
        </h6>
        <p>
          1x - <span className="price">{price}</span>
        </p>
      </li>
    );
};

export default SingleMyCart;