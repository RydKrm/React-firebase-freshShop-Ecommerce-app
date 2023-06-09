import React, { useEffect, useState } from 'react';
import './AllProduct.css';
import { Link } from 'react-router-dom';
import HeroSection from '../../About/HeroSection';
import ShopSideBar from '../../Shop/ShopSideBar';
import ProductTemplate from '../ProductTemplate/ProductTemplate';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import app from '../../../fireBase/firebase.init';
const AllProduct = () => {
  const [product,setProduct] = useState([]);
  const db = getFirestore(app);
  useEffect(() => {
    const fetchProducts = async () => {
      const colRef = collection(db, "products");
      try {
        const querySnapshot = await getDocs(colRef);
        if (!querySnapshot.empty) {
            const documentData= [];
         querySnapshot.docs.forEach((doc) => 
           {
            const documentWithId = {
              id: doc.id,
              ...doc.data(),
            };
            documentData.push(documentWithId);
           }
          );
          setProduct(documentData);
         // console.log(documentData);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

    return (
      <div>
        <HeroSection text="Product List"></HeroSection>
        <div className="shop-box-inner">
          <div className="container">
            <div className="row">
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
                      <p className="text-right">Showing all 4 results</p>
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
                             {
                                product.map((mp,index)=><ProductTemplate key={index} data={mp}></ProductTemplate>)
                            } 
    
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* SideBar */}
              <ShopSideBar></ShopSideBar>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AllProduct;