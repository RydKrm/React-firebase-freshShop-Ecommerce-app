import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartItem = (props) => {
    const {id,product_name,price,image,} = props.data;
    const [change,setChange] = useState(1);

    const priceChange = (e)=>{
         setChange(Number (e.target.value));
         props.priceAdder(Number(price));
    }

    

    return (
        <tr>
          <td className="thumbnail-img">
            <Link href="#">
              <img className="img-fluid" src={image} alt="" />
            </Link>
          </td>
          <td className="name-pr">
            <Link href="#">{product_name}</Link>
          </td>
          <td className="price-pr">
            <p>{price}</p>
          </td>
          <td className="quantity-box">
            <input
              type="number"
              min={1}
              name='quantity'
              onChange={priceChange}
              className="c-input-text qty text"
            />
          </td>
          <td className="total-pr">
            <p>{change*price}</p>
          </td>
          <td className="remove-pr" onClick={()=>props.deleteItem(id)}>
              <i className="fas fa-times"></i>
          </td>
        </tr>
    );
};

export default CartItem;