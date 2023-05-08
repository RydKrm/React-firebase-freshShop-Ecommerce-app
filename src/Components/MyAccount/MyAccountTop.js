import React from 'react';
import { Link } from 'react-router-dom';

const MyAccountTop = () => {
    return (
  <div className="row">
    <div className="col-lg-4 col-md-12">
        <div className="account-box">
            <div className="service-box">
                <div className="service-icon">
                    <Link href="#"> <i className="fa fa-gift"></i> </Link>
                </div>
                <div className="service-desc">
                    <h4>Your Orders</h4>
                    <p>Track, return, or buy things again</p>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-12">
        <div className="account-box">
            <div className="service-box">
                <div className="service-icon">
                    <Link href="#"><i className="fa fa-lock"></i> </Link>
                </div>
                <div className="service-desc">
                    <h4>Login &amp; security</h4>
                    <p>Edit login, name, and mobile number</p>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-12">
        <div className="account-box">
            <div className="service-box">
                <div className="service-icon">
                    <Link href="#"> <i className="fa fa-location-arrow"></i> </Link>
                </div>
                <div className="service-desc">
                    <h4>Your Addresses</h4>
                    <p>Edit addresses for orders and gifts</p>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-12">
        <div className="account-box">
            <div className="service-box">
                <div className="service-icon">
                    <Link href="#"> <i className="fa fa-credit-card"></i> </Link>
                </div>
                <div className="service-desc">
                    <h4>Payment options</h4>
                    <p>Edit or add payment methods</p>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-12">
        <div className="account-box">
            <div className="service-box">
                <div className="service-icon">
                    <Link href="#"> <i className="fab fa-paypal"></i> </Link>
                </div>
                <div className="service-desc">
                    <h4>PayPal</h4>
                    <p>View benefits and payment settings</p>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-12">
        <div className="account-box">
            <div className="service-box">
                <div className="service-icon">
                    <Link href="#"> <i className="fab fa-amazon"></i> </Link>
                </div>
                <div className="service-desc">
                    <h4>Amazon Pay balance</h4>
                    <p>Add money to your balance</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
};

export default MyAccountTop;