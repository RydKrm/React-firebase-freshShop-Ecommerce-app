import React from 'react';
import { Link } from 'react-router-dom';

const ListCart = () => {
    return (
     <div className="row">
    <div className="col-lg-12">
        <div className="table-main table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>Images</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="thumbnail-img">
                            <Link href="#">
                        <img className="img-fluid" src="images/img-pro-01.jpg" alt="" />
                    </Link>
                        </td>
                        <td className="name-pr">
                            <Link href="#">
                        Lorem ipsum dolor sit amet
                    </Link>
                        </td>
                        <td className="price-pr">
                            <p>$ 80.0</p>
                        </td>
                        <td className="quantity-box"><input type="number" size="4" value="1" min="0" step="1" className="c-input-text qty text"/></td>
                        <td className="total-pr">
                            <p>$ 80.0</p>
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
                        <img className="img-fluid" src="images/img-pro-02.jpg" alt="" />
                    </Link>
                        </td>
                        <td className="name-pr">
                            <Link href="#">
                        Lorem ipsum dolor sit amet
                    </Link>
                        </td>
                        <td className="price-pr">
                            <p>$ 60.0</p>
                        </td>
                        <td className="quantity-box"><input type="number" size="4" value="1" min="0" step="1" className="c-input-text qty text" /></td>
                        <td className="total-pr">
                            <p>$ 80.0</p>
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
                        <img className="img-fluid" src="images/img-pro-03.jpg" alt="" />
                    </Link>
                        </td>
                        <td className="name-pr">
                            <Link href="#">
                        Lorem ipsum dolor sit amet
                    </Link>
                        </td>
                        <td className="price-pr">
                            <p>$ 30.0</p>
                        </td>
                        <td className="quantity-box"><input type="number" size="4" value="1" min="0" step="1" className="c-input-text qty text" /></td>
                        <td className="total-pr">
                            <p>$ 80.0</p>
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
    );
};

export default ListCart;