import React, { useState } from 'react';
//import firebase from "firebase/app";
//import "firebase/auth";
import HeroSection from '../About/HeroSection';
import app from '../fireBase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const SignIn = () => {
 const [user,setUser] = useState({});

 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();

 
 const signInWithGoogle = ()=>{
   signInWithPopup(auth, provider)
     .then((result) => {
       const user = result.user;
       setUser(user);
       console.log(user);
     })
     .catch((error) => {
       console.error("Error ", error);
     });
 }
  
 const signOutWithGoogle = ()=>{
   signOut(auth)
     .then(() => {
       setUser({});
     })
     .catch((error) => {
       console.error("Error ",error);
     });
 }

    return (
      <span>
        <HeroSection></HeroSection>
        <div className="cart-box-main">
          <div className="container">
            <div className="row new-account-login">
              <div className="col-sm-12 col-lg-12 mb-3">
                <div className="title-left">
                  <h3>Account Login</h3>
                </div>
                {user.email ? (
                  <button onClick={signOutWithGoogle}>Google Sign out</button>
                ) : (
                  <button onClick={signInWithGoogle}>Google Sign in</button>
                )}
                {user.email && (
                  <div>
                    <h2>userEmail: {user.email}</h2>
                    <h2>Name : {user.displayName}</h2>
                    <img src={user.photoURL} alt="profile Pic" />
                  </div>
                )}

                <form className="mt-3 review-form-box" id="formLogin">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="InputEmail" className="mb-0">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="InputEmail"
                        placeholder="Enter Email"
                      />{" "}
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="InputPassword" className="mb-0">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="InputPassword"
                        placeholder="Password"
                      />{" "}
                    </div>
                  </div>
                  <button type="submit" className="btn hvr-hover btn-register">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </span>
    );
};

export default SignIn;