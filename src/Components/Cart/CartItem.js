import {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from './Cart';
const CartItem = (props) => {
    const {id,product_name,price,image} = props.data;
    const [change,setChange] = useState(1); 
    const {allProduct,setAllProduct,totalPrice,setTotalPrice} = useContext(CartContext);
    const [quantity,setQuantity] = useState(1);
    const [check,setCheck] = useState(1);
        const deleteItem = (id) => {
          setAllProduct((prevItem) => {
            return prevItem.filter((event) =>{
              return id !== event.id;
            });
          });
          setCheck(check+1) 
        };

        useEffect(() => {
          localStorage.setItem("fresh_shop_cart", JSON.stringify(allProduct))
        },[check])

    const priceChange = () => {
      setChange(quantity);
      if (quantity<2) setQuantity(1);
      //setTotalPrice(totalPrice + (quantity)*price);
     // props.priceAdder(Number(price));
    };
    useEffect(()=>{
        priceChange();
        
    },[quantity])    

    

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
            <button onClick={(e)=>{setQuantity(quantity+1) ;setTotalPrice(totalPrice + Number(price));}}>+</button>
            <input
              type="number"
              min={1}
              value={quantity}
              name='quantity'
              width={120}
              
              className="c-input-text qty text mx-3 w-50"  />
              <button onClick={(e)=>{setQuantity(quantity - 1);
              if(quantity>1)setTotalPrice(totalPrice - Number(price));}}>-</button>
          </td>    
          
          <td className="total-pr" >
            <p>{change*price}</p>
          </td>
          <td className="remove-pr" onClick={()=>deleteItem(id)}>
              <i className="fas fa-times"></i>
          </td>
        </tr>

    );
};

export default CartItem;