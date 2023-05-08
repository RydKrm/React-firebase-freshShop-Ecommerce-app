import React from 'react';
import { Link } from 'react-router-dom';

const DetailsAccount = () => {
    return (
      <div className="bottom-box">
    <div className="row">
    <div className="col-lg-4 col-md-12">
        <div className="account-box">
            <div className="service-box">
                <div className="service-desc">
                    <h4>Gold &amp; Diamond Jewellery</h4>
                    <ul>
                        <li> <Link href="#">Apps and more</Link> </li>
                        <li> <Link href="#">Content and devices</Link> </li>
                        <li> <Link href="#">Music settings</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-12">
        <div className="account-box">
            <div className="service-box">
                <div className="service-desc">
                    <h4>Handloom &amp; Handicraft Store</h4>
                    <ul>
                        <li> <Link href="#">Advertising preferences </Link> </li>
                        <li> <Link href="#">Communication preferences</Link> </li>
                        <li> <Link href="#">SMS alert preferences</Link> </li>
                        <li> <Link href="#">Message center</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-12">
        <div className="account-box">
            <div className="service-box">
                <div className="service-desc">
                    <h4>The Designer Boutique</h4>
                    <ul>
                        <li> <Link href="#">Amazon Pay</Link> </li>
                        <li> <Link href="#">Bank accounts for refunds</Link> </li>
                        <li> <Link href="#">Coupons</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-12">
        <div className="account-box">
            <div className="service-box">
                <div className="service-desc">
                    <h4>Gift Boxes, Gift Tags, Greeting Cards</h4>
                    <ul>
                        <li> <Link href="#">Leave delivery feedback</Link> </li>
                        <li> <Link href="#">Lists</Link> </li>
                        <li> <Link href="#">Photo ID proofs</Link> </li>
                        <li> <Link href="#">Profile</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-12">
        <div className="account-box">
            <div className="service-box">
                <div className="service-desc">
                    <h4>Other accounts</h4>
                    <ul>
                        <li> <Link href="#">Amazon Business registration</Link> </li>
                        <li> <Link href="#">Seller account</Link> </li>
                        <li> <Link href="#">Amazon Web Services</Link> </li>
                        <li> <Link href="#">Login with Amazon</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-12">
        <div className="account-box">
            <div className="service-box">
                <div className="service-desc">
                    <h4>Shopping programs and rentals</h4>
                    <ul>
                        <li> <Link href="#">Subscribe &amp; Save</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    );
};

export default DetailsAccount;