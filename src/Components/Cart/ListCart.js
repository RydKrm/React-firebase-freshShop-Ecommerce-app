import React, { useContext, } from 'react';
// import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { CartContext } from './Cart';

const ListCart = () => {
    const {allProduct} = useContext(CartContext);

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
                 {
                  allProduct.map((It,index)=><CartItem data={It} 
                    key={index} ></CartItem>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    </div>
    );
};

export default ListCart;