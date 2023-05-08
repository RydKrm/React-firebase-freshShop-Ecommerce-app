import React from 'react';
import { Link } from 'react-router-dom';
import CopyRight from './CopyRight';

const Footer = () => {
    return (
    <footer>
        <div className="footer-main text-left">
            <div className="container">
				<div className="row ">
					<div className="col-lg-4 col-md-12 col-sm-12">
						<div className="footer-top-box">
							<h3>Business Time</h3>
							<ul className="list-time">
								<li>Monday - Friday: 08.00am to 05.00pm</li> <li>Saturday: 10.00am to 08.00pm</li> <li>Sunday: <span>Closed</span></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-12 col-sm-12">
						<div className="footer-top-box">
							<h3>Newsletter</h3>
							<form className="newsletter-box">
								<div className="form-group">
									<input className="" type="email" name="Email" placeholder="Email Address*" />
									<i className="fa fa-envelope"></i>
								</div>
								<button className="btn hvr-hover" type="submit">Submit</button>
							</form>
						</div>
					</div>
					<div className="col-lg-4 col-md-12 col-sm-12">
						<div className="footer-top-box">
							<h3>Social Media</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<ul>
                                <li><Link to="#"><i className="fab fa-facebook" aria-hidden="true"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-twitter" aria-hidden="true"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-linkedin" aria-hidden="true"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-google-plus" aria-hidden="true"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-rss" aria-hidden="true"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-pinterest-p" aria-hidden="true"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-whatsapp" aria-hidden="true"></i></Link></li>
                            </ul>
						</div>
					</div>
				</div>
				<hr/>
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="footer-widget">
                            <h4>About Freshshop</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> 							
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="footer-link">
                            <h4>Information</h4>
                            <ul>
                                <li><Link to="#">About Us</Link></li>
                                <li><Link to="#">Customer Service</Link></li>
                                <li><Link to="#">Our Sitemap</Link></li>
                                <li><Link to="#">Terms &amp; Conditions</Link></li>
                                <li><Link to="#">Privacy Policy</Link></li>
                                <li><Link to="#">Delivery Information</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="footer-link-contact">
                            <h4>Contact Us</h4>
                            <ul>
                                <li>
                                    <p><i className="fas fa-map-marker-alt"></i>Address: Michael I. Days 3756 <br/>Preston Street Wichita,<br/> KS 67213 </p>
                                </li>
                                <li>
                                    <p><i className="fas fa-phone-square"></i>Phone: <Link to="tel:+1-888705770">+1-888 705 770</Link></p>
                                </li>
                                <li>
                                    <p><i className="fas fa-envelope"></i>Email: <Link to="mailto:contactinfo@gmail.com">contactinfo@gmail.com</Link></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <CopyRight></CopyRight> 
    </footer>
    
    );
};

export default Footer;