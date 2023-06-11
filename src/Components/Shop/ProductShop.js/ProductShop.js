import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductSingle from './ProductSingle';
import { GetAllDoc } from '../../../Context/FirebaseContext';

const ProductShop = () => {
  const [shop,setShop] = useState([]);
    useEffect(()=>{
        const getAllProduct = async()=>{
          const data = await GetAllDoc('seller_info');
          setShop(data);
        }
        getAllProduct();
    },[])

return (
 <div className="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
    <div className="right-product-box">
        <div className="product-item-filter row">
            <div className="col-12 col-sm-8 text-center text-sm-left">
                <div className="toolbar-sorter-right">
                    <span>Sort by </span>
                    <select id="basic" className="selectpicker show-tick form-control" data-placeholder="$ USD">
                    <option data-display="Select">Nothing</option>
                    <option value="1">Popularity</option>
                    <option value="2">High Price → High Price</option>
                    <option value="3">Low Price → High Price</option>
                    <option value="4">Best Selling</option>
                </select>
                </div>
                <p className='text-right'>Showing all 4 results</p>
            </div>
            
        </div>

        <div className="product-categorie-box">
            <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade show active" id="grid-view">
                    <div className="row">
                        {
                            shop.map((sp,index)=>
                             <ProductSingle key={index} shop={sp}></ProductSingle>
                            )
                        }
                        


                        {/* <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <div className="type-lb">
                                        <p className="new">New</p>
                                    </div>
                                    <img src="images/img-pro-02.jpg" className="img-fluid" alt="" />
                                    <div className="mask-icon">
                                        <ul>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></Link></li>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></Link></li>
                                        </ul>
                                        <Link className="cart" href="#">Add to Cart</Link>
                                    </div>
                                </div>
                                <div className="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $9.79</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <div className="type-lb">
                                        <p className="sale">Sale</p>
                                    </div>
                                    <img src="images/img-pro-03.jpg" className="img-fluid" alt="" />
                                    <div className="mask-icon">
                                        <ul>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></Link></li>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></Link></li>
                                        </ul>
                                        <Link className="cart" href="#">Add to Cart</Link>
                                    </div>
                                </div>
                                <div className="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $9.79</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <div className="type-lb">
                                        <p className="new">New</p>
                                    </div>
                                    <img src="images/img-pro-01.jpg" className="img-fluid" alt="I" />
                                    <div className="mask-icon">
                                        <ul>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></Link></li>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></Link></li>
                                        </ul>
                                        <Link className="cart" href="#">Add to Cart</Link>
                                    </div>
                                </div>
                                <div className="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $9.79</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <div className="type-lb">
                                        <p className="sale">Sale</p>
                                    </div>
                                    <img src="images/img-pro-02.jpg" className="img-fluid" alt="" />
                                    <div className="mask-icon">
                                        <ul>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></Link></li>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></Link></li>
                                        </ul>
                                        <Link className="cart" href="#">Add to Cart</Link>
                                    </div>
                                </div>
                                <div className="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $9.79</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <div className="type-lb">
                                        <p className="sale">Sale</p>
                                    </div>
                                    <img src="images/img-pro-03.jpg" className="img-fluid" alt="" />
                                    <div className="mask-icon">
                                        <ul>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></Link></li>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></Link></li>
                                        </ul>
                                        <Link className="cart" href="#">Add to Cart</Link>
                                    </div>
                                </div>
                                <div className="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $9.79</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <div className="type-lb">
                                        <p className="sale">Sale</p>
                                    </div>
                                    <img src="images/img-pro-01.jpg" className="img-fluid" alt="" />
                                    <div className="mask-icon">
                                        <ul>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></Link></li>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></Link></li>
                                        </ul>
                                        <Link className="cart" href="#">Add to Cart</Link>
                                    </div>
                                </div>
                                <div className="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $9.79</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <div className="type-lb">
                                        <p className="sale">Sale</p>
                                    </div>
                                    <img src="images/img-pro-02.jpg" className="img-fluid" alt="" />
                                    <div className="mask-icon">
                                        <ul>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></Link></li>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></Link></li>
                                        </ul>
                                        <Link className="cart" href="#">Add to Cart</Link>
                                    </div>
                                </div>
                                <div className="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $9.79</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <div className="type-lb">
                                        <p className="new">New</p>
                                    </div>
                                    <img src="images/img-pro-03.jpg" className="img-fluid" alt="" />
                                    <div className="mask-icon">
                                        <ul>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></Link></li>
                                            <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></Link></li>
                                        </ul>
                                        <Link className="cart" href="#">Add to Cart</Link>
                                    </div>
                                </div>
                                <div className="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $9.79</h5>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
);
};

export default ProductShop;