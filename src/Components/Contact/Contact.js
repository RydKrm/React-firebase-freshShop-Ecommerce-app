import React from 'react';
import ContactFrom from './ContactFrom';
import ContactInfo from './ContactInfo';
import HeroSection from '../About/HeroSection';

const Contact = () => {
    return (
    <span>
       <HeroSection> </HeroSection>
     <div className="contact-box-main">
      <div className="container">
        <div className="row">
          <ContactFrom></ContactFrom>
          <ContactInfo></ContactInfo>
         </div>
       </div>
    </div>
     </span>
    );
};

export default Contact;