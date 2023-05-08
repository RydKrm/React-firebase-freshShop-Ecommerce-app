import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HeaderTop = () => {
  const navigate = useNavigate();
 const gotoRegister=()=>{
    navigate("/register");
 }
 const gotoSignIn = () => {
   navigate("/signin");
 };

    return (
      <div className="main-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
              <div className="custom-select-box">
                <select
                  id="basic"
                  className="selectpicker show-tick form-control"
                  data-placeholder="$ USD"
                >
                  <option>¥ JPY</option>
                  <option>$ USD</option>
                  <option>€ EUR</option>
                </select>
              </div>
              <div className="right-phone-box">
                <p>
                  Call US :- <Link to="#"> +11 900 800 100</Link>
                </p>
              </div>
              <div className="our-link">
                <ul>
                  <li>
                    <Link to="#">
                      <i className="fa fa-user s_color"></i> My Account
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-location-arrow"></i> Our location
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-headset"></i> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <div className="login-box">
                {/* <select onClick={gotoRegister} id="basic" className="selectpicker show-tick form-control" data-placeholder="Sign In"> 
                <option>Register Here  </option>
                <option>Sign In </option>
            </select> */}
                 <Link className='register' to="/register">Register</Link>
               <Link className='register' to="/signin">Sign In</Link> 
              </div>
              <div className="text-slid-box">
                <div id="offer-box" className="carouselTicker">
                  {/* <ul className="offer-box">
                    <li>
                        <i className="fab fa-opencart"></i> 20% off Entire Purchase Promo code: offT80
                    </li>
                    <li>
                        <i className="fab fa-opencart"></i> 50% - 80% off on Vegetables
                    </li>
                    <li>
                        <i className="fab fa-opencart"></i> Off 10%! Shop Vegetables
                    </li>
                    <li>
                        <i className="fab fa-opencart"></i> Off 50%! Shop Now
                    </li>
                    <li>
                        <i className="fab fa-opencart"></i> Off 10%! Shop Vegetables
                    </li>
                    <li>
                        <i className="fab fa-opencart"></i> 50% - 80% off on Vegetables
                    </li>
                    <li>
                        <i className="fab fa-opencart"></i> 20% off Entire Purchase Promo code: offT30
                    </li>
                    <li>
                        <i className="fab fa-opencart"></i> Off 50%! Shop Now 
                    </li>
                </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HeaderTop;