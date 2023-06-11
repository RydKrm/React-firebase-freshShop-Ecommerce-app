import React, { useEffect, useState } from 'react';
import './SingleProduct.css';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Link, useParams } from 'react-router-dom';
import app from '../../../fireBase/firebase.init';
import { AddDoc,GetAllDoc } from '../../../Context/FirebaseContext';
import Review from './Review';
const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [review, setReview] = useState({});
  const [allReview,setAllReview] = useState([]);

  const params = useParams();
  const db = getFirestore(app);

  const reviewHandle = (e) => {
    setReview((value) => ({ ...value, [e.target.name]: e.target.value }));
  };

  const reviewUserSet =()=>{
    const userInfo = JSON.parse(localStorage.getItem("fresh_shop"));
    const userName = userInfo.first_name + " " + userInfo.last_name;
    setReview((prevReview) => ({
      ...prevReview,
      user_name: userName,
      email: userInfo.email,
    }));
    AddDoc(`products/${params.product_id}/reviews`, review);
  }
  const submitReview = async (e) => {
    e.preventDefault();

    // setReview(value=>({...value,'name':}))
    
    console.log("Review =>", review);
     reviewUserSet();

     
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "products", params.product_id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
         // console.log(docSnap.data());
          setProduct(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [params.id]);

  const pre_price = Number(product.price) + 30;
  const sold = Number(product.quantity) + 10;


  useEffect(()=>{
    const fetchReview = async()=>{
        const product_review = await GetAllDoc(
          `products/${params.product_id}/reviews`
        );
        console.log(product_review);
        setAllReview(product_review);
    }

    fetchReview();
  },[])

  return (
    <div className="shop-detail-box-main">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-6">
            <div
              id="carousel-example-1"
              className="single-product-slider carousel slide"
              data-ride="carousel"
            >
              <img src={product.image} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-6">
            <div className="single-product-details">
              <h2>{product.product_name}</h2>
              <h5>
                {" "}
                <del>{pre_price}$ </del>
                {product.price}$
              </h5>
              <p className="available-stock">
                <span>
                  {" "}
                  More than {product.quantity} available. Total Sold{" "}
                  <Link href="#">{sold} </Link>
                </span>
              </p>
              <h4>Short Description:</h4>
              <p>{product.description}</p>
              <ul>
                <li>
                  <div className="form-group quantity-box">
                    <label className="control-label">Quantity</label>
                    <input
                      className="form-control"
                      value={product.quantity}
                      min="0"
                      max="20"
                      type="number"
                    />
                  </div>
                </li>
              </ul>

              <div className="price-box-bar">
                <div className="cart-and-bay-btn">
                  <Link
                    className="btn btn-success"
                    data-fancybox-close=""
                    href="#"
                  >
                    Buy New
                  </Link>
                  <Link
                    className="btn btn-success"
                    data-fancybox-close=""
                    href="#"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>

              <div className="add-to-btn">
                <div className="add-comp">
                  <Link className="btn btn-success" href="#">
                    <i className="fas fa-heart"></i> Add to wishlist
                  </Link>
                  <Link className="btn btn-success" href="#">
                    <i className="fas fa-sync-alt"></i> Add to Compare
                  </Link>
                </div>
                <div className="share-bar">
                  <Link className="btn hvr-hover" href="#">
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                  </Link>
                  <Link className="btn hvr-hover" href="#">
                    <i className="fab fa-google-plus" aria-hidden="true"></i>
                  </Link>
                  <Link className="btn hvr-hover" href="#">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </Link>
                  <Link className="btn hvr-hover" href="#">
                    <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                  </Link>
                  <Link className="btn hvr-hover" href="#">
                    <i className="fab fa-whatsapp" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="card card-outline-secondary my-4">
            <div className="card-header">
              <h2>Product Reviews</h2>
            </div>
            <div className="card-body">
              {
                allReview.map((mp,index)=>
                    <Review key={index} review={mp}></Review>
                )
              }
              {/* <div className="media mb-3">
                <div className="mr-2">
                  <img
                    className="rounded-circle border p-1"
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    alt="Generic placeholder image"
                  />
                </div>
                <div className="media-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Omnis et enim aperiam inventore, similique necessitatibus
                    neque non! Doloribus, modi sapiente laboriosam aperiam
                    fugiat laborum. Sequi mollitia, necessitatibus quae sint
                    natus.
                  </p>
                  <small className="text-muted">
                    Posted by Anonymous on 3/1/18
                  </small>
                </div>
              </div>
              <hr /> */}
              <form method="post">
                <div className="form-row d-flex justify-content-center align-items-center">
                  <div className="form-group col-md-8 ">
                    <label htmlFor="InputEmail" className="mb-0 lead mb-2">
                      Leave a Review
                    </label>
                    <textarea
                      type="email"
                      className="form-control"
                      rows={7}
                      name="review"
                      onBlur={reviewHandle}
                      placeholder="Enter Review"
                    />
                    <Link
                      href="#"
                      onClick={submitReview}
                      className="btn btn-success mt-3"
                    >
                      Leave a Review
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;