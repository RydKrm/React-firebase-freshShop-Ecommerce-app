import React from 'react';

const HeroSection = (props) => {
    return (
      <div className="all-title-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>{props.text}</h2>
              <ul className="breadcrumb">
                {/* <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li> */}
                <li className="breadcrumb-item active">{ props.text}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HeroSection;