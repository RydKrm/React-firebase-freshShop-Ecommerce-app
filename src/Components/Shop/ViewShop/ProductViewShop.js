import React, { useEffect, useState } from 'react';
import ProductSingle from '../ProductShop.js/ProductSingle';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import app from '../../../fireBase/firebase.init';
import SingleViewShop from './SingleViewShop';

const ProductViewShop = (props) => {
    const shop_id = props.shop_id;
    const [product,setProduct] = useState([]);
    const db = getFirestore(app);
    useEffect(()=>{
        const getAllProduct = async()=>{
           const productsCollectionRef = collection(db, "products");

           const q = query(productsCollectionRef, where("shop_id", "==", shop_id));

           try {
             const querySnapshot = await getDocs(q);

             if (querySnapshot.empty) {
               // No product found with the given ID
               console.log("Product not found");
               return null;
             }

             const products = [];
             querySnapshot.forEach((productDoc) => {
               const productData ={
                id:productDoc.id,
                ...productDoc.data()
               } 
              // console.log("product data with id",productDoc.id);
               products.push(productData);
             });


           //  console.log("All product in a shop",products);
             setProduct(products);

           } catch (error) {
             console.error("Error getting product:", error);
             return null;
           }
        }
        getAllProduct();
    },[shop_id])

    return (
      <div className="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
        <div className="right-product-box">
          <div className="product-item-filter row">
            <div className="col-12 col-sm-8 text-center text-sm-left">
              <div className="toolbar-sorter-right">
                <span>Sort by </span>
                <select
                  id="basic"
                  className="selectpicker show-tick form-control"
                  data-placeholder="$ USD"
                >
                  <option data-display="Select">Nothing</option>
                  <option value="1">Popularity</option>
                  <option value="2">High Price → High Price</option>
                  <option value="3">Low Price → High Price</option>
                  <option value="4">Best Selling</option>
                </select>
              </div>
              <p className="text-right">Shop Items</p>
            </div>
          </div>

          <div className="product-categorie-box">
            <div className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane fade show active"
                id="grid-view"
              >
                <div className="row">
                  {product.map((pd,index) => (
                    <SingleViewShop key={index} shop={pd}></SingleViewShop>
                  ))}

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductViewShop;