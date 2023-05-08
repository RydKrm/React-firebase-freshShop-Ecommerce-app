import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategories = (props) => {
    return (
      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div className="shop-cat-box">
          <img
            className="img-fluid"
            src={props.img}
            alt=""
          />
          <Link className="hvr-hover" to="#">
            Lorem ipsum dolor
          </Link>
        </div>
      </div>
    );
};

export default SingleCategories;