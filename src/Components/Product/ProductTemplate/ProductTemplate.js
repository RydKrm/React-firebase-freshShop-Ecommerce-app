import React from 'react';
import { Link } from 'react-router-dom';

const ProductTemplate = (props) => {
    const { id,category, image, price, product_name} =
      props.data;
     // const [product,setProduct] = useState({});
      //const [allProduct,setAllProduct] = useState([]);

      const AddProduct = ()=>{
        const addedProduct = {
          id,
          product_name,
          category,
          image,
          price,
          quantity: 1,
        };
        const prevProducts =
          JSON.parse(localStorage.getItem("fresh_shop_cart")) || [];
         // setAllProduct(prevProducts);
         //setAllProduct((prevProducts) => [...prevProducts, addedProduct]);
        const productExists = prevProducts.some(
          (product) => product.id === addedProduct.id
        );
        if (productExists) {
          console.log("Product already found");
          return;
        }

        localStorage.setItem(
          "fresh_shop_cart",
          JSON.stringify([...prevProducts, addedProduct])
        );
      }
      
    return (
      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div className="products-single fix">
          <div className="box-img-hover">
            <div className="type-lb">
              <p className="sale">Sale</p>
            </div>
            <img src={image} className="img-fluid" alt="" />
            <div className="mask-icon">
              <ul>
                <li>
                  <Link
                    to={`/product/${id}` }
                    data-toggle="tooltip"
                    data-placement="right"
                    title="View"
                  >
                    <i className="fas fa-eye"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Compare"
                  >
                    <i className="fas fa-sync-alt"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Add to Wishlist"
                  >
                    <i className="far fa-heart"></i>
                  </Link>
                </li>
              </ul>
              <Link className="cart" href="#" onClick={AddProduct}>
                Add to Cart
              </Link>
            </div>
          </div>
          <div className="why-text">
            <h4>{product_name}</h4>
            <h4>{category}</h4>
            <h5> {price}</h5>
          </div>
        </div>
      </div>
    );
};

export default ProductTemplate;