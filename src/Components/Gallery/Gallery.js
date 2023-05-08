import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
    <div className="products-box">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="title-all text-center">
                        <h1>Our Gallery</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="special-menu text-center">
                        <div className="button-group filter-button-group">
                            <button className="active" data-filter="*">All</button>
                            <button data-filter=".bulbs">Bulbs</button>
                            <button data-filter=".fruits">Fruits</button>
							<button data-filter=".podded-vegetables">Podded vegetables</button>
							<button data-filter=".root-and-tuberous">Root and tuberous</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row special-list">
                <div className="col-lg-3 col-md-6 special-grid bulbs">
                    <div className="products-single fix">
                        <div className="box-img-hover">
                            <div className="type-lb">
                                <p className="sale">Sale</p>
                            </div>
                            <img src="images/gallery-img-01.jpg" className="img-fluid" alt="" />
                            <div className="mask-icon">
                                <ul>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></Link></li>
                                </ul>
                                <Link className="cart" href="#">Add to Cart</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 special-grid fruits">
                    <div className="products-single fix">
                        <div className="box-img-hover">
                            <img src="images/gallery-img-02.jpg" className="img-fluid" alt="" />
                            <div className="mask-icon">
                                <ul>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></Link></li>
                                </ul>
                            </div>
                        </div>                        
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 special-grid bulbs">
                    <div className="products-single fix">
                        <div className="box-img-hover">
                            <img src="images/gallery-img-03.jpg" className="img-fluid" alt="" />
                            <div className="mask-icon">
                                <ul>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></Link></li>
                                </ul>                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 special-grid fruits">
                    <div className="products-single fix">
                        <div className="box-img-hover">                            
                            <img src="images/gallery-img-04.jpg" className="img-fluid" alt="" />
                            <div className="mask-icon">
                                <ul>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></Link></li>
                                </ul>                                
                            </div>
                        </div>                        
                    </div>
                </div>
				<div className="col-lg-3 col-md-6 special-grid bulbs">
                    <div className="products-single fix">
                        <div className="box-img-hover">
                            <img src="images/gallery-img-05.jpg" className="img-fluid" alt="" />
                            <div className="mask-icon">
                                <ul>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 special-grid fruits">
                    <div className="products-single fix">
                        <div className="box-img-hover">                            
                            <img src="images/gallery-img-06.jpg" className="img-fluid" alt="" />
                            <div className="mask-icon">
                                <ul>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 special-grid podded-vegetables">
                    <div className="products-single fix">
                        <div className="box-img-hover">
                            <img src="images/gallery-img-07.jpg" className="img-fluid" alt="" />
                            <div className="mask-icon">
                                <ul>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 special-grid root-and-tuberous">
                    <div className="products-single fix">
                        <div className="box-img-hover">                            
                            <img src="images/gallery-img-08.jpg" className="img-fluid" alt="" />
                            <div className="mask-icon">
                                <ul>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></Link></li>
                                </ul>
                            </div>
                        </div>                        
                    </div>
                </div>
				
				<div className="col-lg-3 col-md-6 special-grid root-and-tuberous">
                    <div className="products-single fix">
                        <div className="box-img-hover">                            
                            <img src="images/gallery-img-09.jpg" className="img-fluid" alt="" />
                            <div className="mask-icon">
                                <ul>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 special-grid podded-vegetables">
                    <div className="products-single fix">
                        <div className="box-img-hover">
                            <img src="images/gallery-img-10.jpg" className="img-fluid" alt="" />
                            <div className="mask-icon">
                                <ul>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 special-grid root-and-tuberous">
                    <div className="products-single fix">
                        <div className="box-img-hover">                           
                            <img src="images/gallery-img-11.jpg" className="img-fluid" alt="" />
                            <div className="mask-icon">
                                <ul>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></Link></li>
                                </ul>                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 special-grid podded-vegetables">
                    <div className="products-single fix">
                        <div className="box-img-hover">
                            <img src="images/gallery-img-12.jpg" className="img-fluid" alt="" />
                            <div className="mask-icon">
                                <ul>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></Link></li>
                                    <li><Link href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></Link></li>
                                </ul>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Gallery;