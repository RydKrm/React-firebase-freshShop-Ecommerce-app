import React from 'react';
import SingleOfferBox from './SingleOfferBox';

const OfferBox = () => {
    return (
      <div className="box-add-products">
        <div className="container">
          <div className="row">
            <SingleOfferBox img="images/add-img-01.jpg"></SingleOfferBox>
            <SingleOfferBox img="images/add-img-02.jpg"></SingleOfferBox>
          </div>
        </div>
      </div>
    );
};

export default OfferBox;