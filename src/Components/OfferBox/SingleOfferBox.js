import React from 'react';

const SingleOfferBox = (props) => {
    return (
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="offer-box-products">
          <img className="img-fluid" src={props.img} alt="" />
        </div>
      </div>
    );
};

export default SingleOfferBox;