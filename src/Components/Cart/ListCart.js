import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const ListCart = (props) => {
    const [allItem,setAllItem] = useState([]);
    const [loadAllItem,setLoadAllItem] = useState([]);
    const [totalPrice,setTotalPrice] = useState(0);
    
    useEffect(()=>{
        const checkDelete = async()=>{
            console.log("Checking for Delete ",allItem);
       // await localStorage.setItem("fresh_shop_cart", JSON.stringify(allItem));
        }
        checkDelete();
    },[allItem])

    const deleteItem = (id)=>{
        console.log("Id =>  ",id);
        console.log("Check State => ",allItem);
        setAllItem((prevItem)=>{
            return prevItem.filter((event)=>{
                return id!==event.id;
            })
        })
        
       // setCheck(true);
    }

    useEffect(()=>{
        const allProduct = JSON.parse(localStorage.getItem('fresh_shop_cart'));
        setLoadAllItem(allProduct);
       // setAllItem(allProduct);
        const InitialPrice = allProduct.reduce(
          (accumulator, ap) => accumulator + Number(ap.price),0);
        setTotalPrice(InitialPrice);
       // props.sumPrice(allPrice);
        },[]);

    const priceAdder = (price)=>{
       const sum = totalPrice+price;
       setTotalPrice(sum);
       props.getPrice(sum);
    }

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
                        loadAllItem.map((It,index)=><CartItem data={It} 
                          deleteItem={deleteItem} 
                          key={index} 
                          priceAdder={priceAdder}
                        ></CartItem>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    </div>
    );
};

export default ListCart;