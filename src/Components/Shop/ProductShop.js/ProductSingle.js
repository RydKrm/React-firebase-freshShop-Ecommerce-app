import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import app from '../../../fireBase/firebase.init';
import HeroSection from '../../About/HeroSection';
import ShopSideBar from '../ShopSideBar';

const ProductSingle = () => {
  const [product,setProduct] = useState({});

    const params = useParams();
    const db = getFirestore(app);
   

    useEffect(()=>{
            const fetchData = async () => {
              try {
                const docRef = doc(db, "products", params.product_id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                  console.log(docSnap.data());
                  setProduct(docSnap.data());
                } else {
                  console.log("No such document!");
                }
              } catch (err) {
                console.error(err);
              }
            };
        fetchData();
    },[params.id])

    return (
       <section>
         <HeroSection text={product.product_name} ></HeroSection>
         <div className="container mt-5">
            <div className="row">
              <div className="col-md-9">
                 <img src={product.image} className='img-fluid' alt="" />
                 <h3>Name : {product.product_name}</h3>
                 <h3>Category: {product.category}</h3>
                 <h3>Price : {product.price}</h3>
                 <h3>Item: left{product.quantity}</h3>
                 <p>{product.description}</p>
              </div>
              <ShopSideBar></ShopSideBar>
            </div>
         </div>
       </section>
    );
};

export default ProductSingle;