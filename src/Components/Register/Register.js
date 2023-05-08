import React from 'react';
import HeroSection from '../About/HeroSection';

const Register = () => {
    return (
      <span>
    <HeroSection></HeroSection>
    <div className="cart-box-main">
    <div className="container">
    <div className="row new-account-login">
    <div className="col-sm-12 col-lg-12 mb-3">
    <div className="title-left">
        <h3>Register to a New Account </h3>
    </div>
    <form class="mt-3  review-form-box" id="formRegister">
        <div class="form-row">
        <div class="form-group col-md-6">
            <label for="InputName" class="mb-0">First Name</label>
            <input type="text" class="form-control" id="InputName" placeholder="First Name" /> </div>
        <div class="form-group col-md-6">
            <label for="InputLastname" class="mb-0">Last Name</label>
            <input type="text" class="form-control" id="InputLastname" placeholder="Last Name" /> </div>
        <div class="form-group col-md-6">
            <label for="InputEmail1" class="mb-0">Email Address</label>
            <input type="email" class="form-control" id="InputEmail1" placeholder="Enter Email" /> </div>
        <div class="form-group col-md-6">
            <label for="InputPassword1" class="mb-0">Password</label>
            <input type="password" class="form-control" id="InputPassword1" placeholder="Password" /> </div>
        </div>
        <button type="submit" class="btn hvr-hover btn-register">Register</button>
        </form>
    </div>
    </div>
    </div>
    </div>
    </span>
    );
};

export default Register;