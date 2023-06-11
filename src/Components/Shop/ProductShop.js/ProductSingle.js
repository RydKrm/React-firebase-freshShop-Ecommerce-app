import React from 'react';
import { Link} from 'react-router-dom';


const ProductSingle = (props) => {
  const {id,first_name,last_name,image,shop_name} = props.shop;

    return (
      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div className="products-single fix">
          <div className="box-img-hover">
            <div className="type-lb">
              <p className="sale">{shop_name}</p>
            </div>
            <img src={image} className="img-fluid" alt="" />
            <div className="mask-icon">
              <ul>
                <li>
                  <Link
                    to={`/shop/${id}`}
                    data-toggle="tooltip"
                    data-placement="right"
                    title="View"
                  >
                    <i className="fas fa-eye"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="why-text">
            <h4>{shop_name}</h4>
            {/* <h5>{first_name} {last_name} </h5> */}
          </div>
        </div>
      </div>
    );
};

export default ProductSingle;