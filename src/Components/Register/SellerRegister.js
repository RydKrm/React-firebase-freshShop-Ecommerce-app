import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import HeroSection from "../About/HeroSection";
import { getFirestore,setDoc, doc } from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import app from "../../fireBase/firebase.init";
// import { ImageUpload } from '../../Context/FirebaseContext';
import {v4} from 'uuid';

const SellerRegister = () => {

     const db = getFirestore(app);
     const [user, setUser] = useState({});
     const [validation, setValidation] = useState("");
     const [img,setImg] = useState('');
     const [imgUrl,setImgUrl] = useState('');
     const navigate = useNavigate();
     const storage = getStorage(app);

     const inputHandle = (event) => {
       setUser((value) => ({
         ...value,
         [event.target.name]: event.target.value,
       }));
     };

     const imageUpload = (e)=>{
      const image = e.target.files[0];
      setImg(image);
      console.log("Image set Successfully");
     }
     const formHandle =async (event) => {
       event.preventDefault();

       if(!img){
        console.log("Image is not Set");
        setValidation('Image is not Added');
        return;
       }

        try {
          const imageRef = ref(storage, `images/shops/${img.name + v4()}`);
          await uploadBytes(imageRef, img);
          const url = await getDownloadURL(imageRef);
          console.log("Image => ", url);
          setImgUrl(url);
          setUser((value) => ({ ...value, 'image': url }));
          setUser((value) => ({ ...value, userRole: 'seller' }));
        } catch (error) {
          console.error("Error uploading image:", error);
        }
   
     };

       const productUpload = () => {
         try {
           const docRef = doc(db, "seller_info", user.email);

           setDoc(docRef, user)
             .then(() => {
               console.log("user created");
             })
             .catch((err) => {
               console.log(err);
             });
           console.log("Shop add", user);
         } catch (error) {
           console.error("Error uploading product:", error);
         }
       };

useEffect(() => {
  if (imgUrl) {
    productUpload();
  }
}, [imgUrl]);

    return (
      <span>
        <HeroSection></HeroSection>
        <div className="cart-box-main">
          <div className="container">
            <div className="row new-account-login">
              <div className="col-sm-12 col-lg-12 mb-3">
                <div className="title-left">
                  <h3>Register to a New Account for Seller </h3>
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
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone_number"
                        placeholder="phone_number"
                        onBlur={inputHandle}
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
                    <div className="form-group col-md-6">
                      <label htmlFor="InputPassword1" className="mb-0">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="confirm_password"
                        placeholder="confirm Password"
                        onBlur={inputHandle}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="InputPassword1" className="mb-0">
                        Shop Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="shop_name"
                        required
                        placeholder="Shop Name"
                        onBlur={inputHandle}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="InputPassword1" className="mb-0">
                        Shop Image 
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        name="shop_image"
                        placeholder="Shop Image"
                        onChange={imageUpload}
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
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </span>
    );
};

export default SellerRegister;