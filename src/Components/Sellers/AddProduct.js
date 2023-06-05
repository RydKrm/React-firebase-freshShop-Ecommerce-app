import React, { useEffect, useState } from 'react';
import HeroSection from '../About/HeroSection';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from '../../fireBase/firebase.init';
import { v4 } from 'uuid';

const AddProduct = () => {
  const [product,setProduct] = useState({});
  const [validation,setValidation] = useState('');
  const [img,setImage] = useState('');
  const [imgUrl,setImgUrl] = useState('');
  const storage = getStorage(app);
  const db = getFirestore(app);

    const inputHandle = (event) => {
      setProduct((value) => ({
        ...value,
        [event.target.name]: event.target.value,
      }));
    };

    const imageUpload = (e)=>{
      const image = e.target.files[0];
      setImage((imageFile) => image);
      console.log("Image file get in function");
    }

  const formHandle = async (event) => {
    event.preventDefault();

    if (!img) {
      setValidation('Image is not Selected');
      return;
    }

    try {
      const imageRef = ref(storage, `images/products/${img.name + v4()}`);
      await uploadBytes(imageRef, img);
      const url = await getDownloadURL(imageRef);
      console.log("Image => ", url);
      setImgUrl(url);
      setProduct((value) => ({ ...value, 'image': url }));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const productUpload =  () => {
    try {
     // setProduct((value) => ({ ...value, 'image': imgUrl }));
     // console.log("Image Uploaded successfully");

      const col = collection(db, "products");
      addDoc(col, product);
      console.log("product add successfully");
      console.log("product item list", product);
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
      <div>
        <HeroSection text="Add Product"></HeroSection>
        <div className="cart-box-main">
          <div className="container">
            <div className="row new-account-login">
              <div className="col-sm-12 col-lg-12 mb-3">
                <div className="title-left">
                  <h3>Add a product </h3>
                </div>
                <form
                  className="mt-3 review-form-box"
                  onSubmit={formHandle}
                  id="formRegister"
                >
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label htmlFor="InputName" className="mb-0">
                        Product Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="product_name"
                        placeholder="Product Name"
                        onBlur={inputHandle}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="Input Last name" className="mb-0">
                        Product Price
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="price"
                        placeholder="Product Price"
                        onBlur={inputHandle}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="InputPassword1" className="mb-0">
                        Quantity
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="quantity"
                        placeholder="Quantity"
                        onBlur={inputHandle}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="InputEmail1" className="mb-0">
                        Category
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="category"
                        onBlur={inputHandle}
                        placeholder="Category"
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label htmlFor="InputPassword1" className="mb-0">
                        Image
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        name="photo"
                        placeholder="Photo"
                        onChange={imageUpload}
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label htmlFor="InputPassword1" className="mb-0">
                        Description
                      </label>
                      <textarea
                        type="text"
                        rows="10"
                        className="form-control"
                        name="description"
                        placeholder="product Description"
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
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddProduct;