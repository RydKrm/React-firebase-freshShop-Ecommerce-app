import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MyCard.css'
import SingleMyCart from './SingleMyCart';

const MyCard = (props) => {
  const [addClass,setAddClass] = useState('side');
  const [allProduct,setAllProduct] = useState([]);

  useEffect(()=>{
     setAddClass(props.addCart);
  },[props.addCart]);

  useEffect(()=>{
    const product = JSON.parse(localStorage.getItem('fresh_shop_cart'));
    setAllProduct(product);
  },[])
 
  
  const closeCart = ()=>{
    props.sideBarChange('side');
  }

    return (
      <div className={addClass}>
        <Link to="#" onClick={closeCart} className="close-side">
          <i className="fa fa-times"></i>
        </Link>
        <li className="cart-box">
          <ul className="cart-list">
              {
                allProduct.map((ap,index)=><SingleMyCart key={index} data={ap}></SingleMyCart> )
              }
          </ul>
        </li>
        <Link to="/cart" className="btn btn-success">Buy </Link>
      </div>
    );
};

export default MyCard;