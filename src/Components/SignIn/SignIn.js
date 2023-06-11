import React, { useContext, useState } from 'react';
//import firebase from "firebase/app";
//import "firebase/auth";
import HeroSection from '../About/HeroSection';
import app from '../../fireBase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore, collection, getDoc,doc,setDoc } from "@firebase/firestore";
import { userContext } from '../../App';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
 const [user,setUser] = useState({userRole:'customer'});
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();
 const db = getFirestore(app);
 const coll = collection(db, "user_info");
 const [checkUser, setCheckUser] = useContext(userContext);
 const navigate = useNavigate();
 
 const signInWithGoogle = ()=>{
   signInWithPopup(auth, provider)
     .then((result) => {
       const user = result.user;
       setUser(user);
       console.log("local user ", user);
       const profile = {
         email: user.email,
         photo: user.photoURL,
         userRole: 'customer',
         name: user.displayName
       };
       localStorage.setItem("fresh_shop", JSON.stringify(profile));
        const docRef = doc(db, "user_info", user.email);
        setDoc(docRef, profile)
          .then(() => {
            console.log("user created");
          })
          .catch((err) => {
            console.log(err);
          });
       navigate("/home");
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
  const inputHandle = (event) => {
    setUser((value) => ({ ...value, [event.target.name]: event.target.value }));
  };

  const formHandle = async (event)=>{
    event.preventDefault();
    const docRef = doc(db, "user_info", user.email);
    try {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("login data",docSnap.data());
        setUser(docSnap.data());
        localStorage.setItem("fresh_shop", JSON.stringify(docSnap.data()));
        
      } else {
        console.log("No such document!");
      }
    } catch (err) {
      console.error(err);
    }
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
                        name='email'
                        onBlur={inputHandle}
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
                        name='password'
                        onBlur={inputHandle}
                        id="InputPassword"
                        placeholder="Password"
                      />{" "}
                    </div>
                  </div>
                  <button type="submit" onClick={formHandle} className="btn hvr-hover btn-register">
                    Login
                  </button>
                  <p><small>For seller login<Link to='/seller_signin'> click here </Link></small></p>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </span>
    );
};

export default SignIn;