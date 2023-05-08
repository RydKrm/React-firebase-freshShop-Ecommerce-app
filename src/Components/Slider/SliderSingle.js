import React from 'react';
import Carousel from "react-bootstrap/Carousel";

const SliderSingle = () => {
    return (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/banner-01.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
};

export default SliderSingle;