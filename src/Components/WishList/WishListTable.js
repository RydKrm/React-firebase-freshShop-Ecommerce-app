import React from 'react';
import { Link } from 'react-router-dom';

const WishListTable = () => {
    return (
      <div className="wishlist-box-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="table-main table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Images</th>
                      <th>Product Name</th>
                      <th>Unit Price </th>
                      <th>Stock</th>
                      <th>Add Item</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="thumbnail-img">
                        <Link href="#">
                          <img
                            className="img-fluid"
                            src="images/img-pro-01.jpg"
                            alt=""
                          />
                        </Link>
                      </td>
                      <td className="name-pr">
                        <Link href="#">Lorem ipsum dolor sit amet</Link>
                      </td>
                      <td className="price-pr">
                        <p>$ 80.0</p>
                      </td>
                      <td className="quantity-box">In Stock</td>
                      <td className="add-pr">
                        <Link className="btn hvr-hover" href="#">
                          Add to Cart
                        </Link>
                      </td>
                      <td className="remove-pr">
                        <Link href="#">
                          <i className="fas fa-times"></i>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="thumbnail-img">
                        <Link href="#">
                          <img
                            className="img-fluid"
                            src="images/img-pro-02.jpg"
                            alt=""
                          />
                        </Link>
                      </td>
                      <td className="name-pr">
                        <Link href="#">Lorem ipsum dolor sit amet</Link>
                      </td>
                      <td className="price-pr">
                        <p>$ 60.0</p>
                      </td>
                      <td className="quantity-box">In Stock</td>
                      <td className="add-pr">
                        <Link className="btn hvr-hover" href="#">
                          Add to Cart
                        </Link>
                      </td>
                      <td className="remove-pr">
                        <Link href="#">
                          <i className="fas fa-times"></i>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="thumbnail-img">
                        <Link href="#">
                          <img
                            className="img-fluid"
                            src="images/img-pro-03.jpg"
                            alt=""
                          />
                        </Link>
                      </td>
                      <td className="name-pr">
                        <Link href="#">Lorem ipsum dolor sit amet</Link>
                      </td>
                      <td className="price-pr">
                        <p>$ 30.0</p>
                      </td>
                      <td className="quantity-box">In Stock</td>
                      <td className="add-pr">
                        <Link className="btn hvr-hover" href="#">
                          Add to Cart
                        </Link>
                      </td>
                      <td className="remove-pr">
                        <Link href="#">
                          <i className="fas fa-times"></i>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WishListTable;