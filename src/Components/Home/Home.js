import React from 'react';
import Slider from '../Slider/Slider';
import Categories from '../Categories/Categories';
import OfferBox from '../OfferBox/OfferBox';
import Blog from '../Blog/Blog';
import SliderGallery from '../SliderGallery/SliderGallery';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
      <div>
        <Slider></Slider>
        <Categories></Categories>
        <OfferBox></OfferBox>
         <Gallery></Gallery> 
        <Blog></Blog>
        <SliderGallery></SliderGallery>
      </div>
    );
};

export default Home;