import React, { useState } from 'react';
import HeroSection from '../About/HeroSection';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import app from '../fireBase/firebase.init';

const Register = () => {
    const auth = getAuth(app);

    const [user,setUser] = useState({});
    const [validation,setValidation] = useState('');
    const inputHandle = (event) =>{
       setUser(value=>({...value,[event.target.name]:event.target.value}))
    }

    const formHandle = (event) =>{
       event.preventDefault();
       console.log(user);
   
       if (!/(?=.*?[A-Z]).*/.test(user.password)){
         setValidation('Password must contain a UpperCase Latter');
         return ;
       }
         createUserWithEmailAndPassword(auth, user.email, user.password)
           .then((result) => {
             console.log("User Created Successfully ");
             setValidation('');
           })
           .catch((error) => {
             console.error("Error ", error);
           });

       let full_name = user.fist_name+user.last_name;
       updateProfile(auth.currentUser, {
         displayName: full_name
       })
       .then(()=>{
        console.log("User Updated");
       })
       .catch((error)=>{
        console.error("Error ",error);
       })

    }

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
                <form
                  className="mt-3 review-form-box"
                  onSubmit={formHandle}
                  id="formRegister"
                >
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="InputName" className="mb-0">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        placeholder="First Name"
                        onBlur={inputHandle}
                      />{" "}
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="Input Last name" className="mb-0">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        placeholder="Last Name"
                        onBlur={inputHandle}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="InputEmail1" className="mb-0">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        onBlur={inputHandle}
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="InputPassword1" className="mb-0">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        onBlur={inputHandle}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn hvr-hover btn-register">
                    Register
                  </button>
                </form>
                <p>
                  <small className="text-danger">{validation}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </span>
    );
};

export default Register;