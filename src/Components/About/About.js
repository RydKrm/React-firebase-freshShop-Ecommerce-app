import React from 'react';
import HeroSection from './HeroSection';
import TextAbout from './TextAbout';
import QuiltyAbout from './QuiltyAbout';
import Team from '../Team/Team';

const About = () => {
    return (
      <div>
        <HeroSection></HeroSection>
        <div className="about-box-main">
          <div className="container">
            <TextAbout></TextAbout>
            <div className="row my-5">
              <QuiltyAbout></QuiltyAbout>
              <QuiltyAbout></QuiltyAbout>
              <QuiltyAbout></QuiltyAbout>
            </div>
            <Team></Team>
            </div>
          </div>
        </div>
    );
};

export default About;