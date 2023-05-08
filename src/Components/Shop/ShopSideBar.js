import React from 'react';
import { Link } from 'react-router-dom';

const ShopSideBar = () => {
    return (
 <div className="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
    <div className="product-categori">
        <div className="search-product">
            <form action="#">
                <input className="form-control" placeholder="Search here..." type="text" />
                <button type="submit"> <i className="fa fa-search"></i> </button>
            </form>
        </div>
        <div className="filter-sidebar-left">
            <div className="title-left">
                <h3>Categories</h3>
            </div>
            <div className="list-group list-group-collapse list-group-sm list-group-tree" id="list-group-men" data-children=".sub-men">
                <div className="list-group-collapse sub-men">
                    <Link className="list-group-item list-group-item-action" href="#sub-men1" data-toggle="collapse" aria-expanded="true" aria-controls="sub-men1">Fruits & Drinks <small className="text-muted">(100)</small>
                </Link>
                    <div className="collapse show" id="sub-men1" data-parent="#list-group-men">
                        <div className="list-group">
                            <Link href="#" className="list-group-item list-group-item-action active">Fruits 1 <small className="text-muted">(50)</small></Link>
                            <Link href="#" className="list-group-item list-group-item-action">Fruits 2 <small className="text-muted">(10)</small></Link>
                            <Link href="#" className="list-group-item list-group-item-action">Fruits 3 <small className="text-muted">(10)</small></Link>
                            <Link href="#" className="list-group-item list-group-item-action">Fruits 4 <small className="text-muted">(10)</small></Link>
                            <Link href="#" className="list-group-item list-group-item-action">Fruits 5 <small className="text-muted">(20)</small></Link>
                        </div>
                    </div>
                </div>
                <div className="list-group-collapse sub-men">
                    <Link className="list-group-item list-group-item-action" href="#sub-men2" data-toggle="collapse" aria-expanded="false" aria-controls="sub-men2">Vegetables 
                <small className="text-muted">(50)</small>
                </Link>
                    <div className="collapse" id="sub-men2" data-parent="#list-group-men">
                        <div className="list-group">
                            <Link href="#" className="list-group-item list-group-item-action">Vegetables 1 <small className="text-muted">(10)</small></Link>
                            <Link href="#" className="list-group-item list-group-item-action">Vegetables 2 <small className="text-muted">(20)</small></Link>
                            <Link href="#" className="list-group-item list-group-item-action">Vegetables 3 <small className="text-muted">(20)</small></Link>
                        </div>
                    </div>
                </div>
                <Link href="#" className="list-group-item list-group-item-action"> Grocery  <small className="text-muted">(150) </small></Link>
                <Link href="#" className="list-group-item list-group-item-action"> Grocery <small className="text-muted">(11)</small></Link>
                <Link href="#" className="list-group-item list-group-item-action"> Grocery <small className="text-muted">(22)</small></Link>
            </div>
        </div>
        <div className="filter-price-left">
            <div className="title-left">
                <h3>Price</h3>
            </div>
            <div className="price-box-slider">
                <div id="slider-range"></div>
                <p>
                    <input type="text" id="amount" readonly />
                    <button className="btn hvr-hover" type="submit">Filter</button>
                </p>
            </div>
        </div>
    </div>
</div>
    );
};

export default ShopSideBar;