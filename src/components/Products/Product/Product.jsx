import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import axios from "axios";

const Product = () => {
  // Note: this id should come from api
  const product = { id: 1 };

  const [prodItems, setProdItems] = useState({});
  const [cartData, setCartData] = useState({});
  const { id } = useParams();

  const { count, setCount } = useContext(CartContext);

  const handleRemove = (id) => {
    let updatedData = cartData.filter((cartD) => cartD.id !== id);
    setCartData(updatedData);
  };

  const handleInc = () => {
    setCount(count + 1);
  };

  const handleDec = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    if (id) {
      const getData = async () => {
        let res = await axios.get(`http://localhost:1001/products/${id}`);
        let data = await res.data;
        //console.log(data);
        setProdItems(data);
      };
      getData();
    }
  }, [id]);

  useEffect(() => {
    const getData = async () => {
      let res = await axios.get(`http://localhost:1001/cartItems`);
      let data = await res.data;
      //console.log(data);
      setCartData(data);
    };
    getData();
  }, []);

  // const handleAddToCart = async () => {
  //   let res = axios.post(`http://localhost:1001/cartItems`, {

  //   });
  //   let data = res.data;
  //   setCartData([ ...cartData, data]);
  // }

  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{prodItems.name}</h3>
      <h6 data-cy="product-description">{prodItems.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add to Cart</button>
      <div>
        <button
          onClick={handleInc}
          data-cy="product-increment-cart-item-count-button"
        >
          Inc
        </button>
        <span data-cy="product-count">{count}</span>
        <button
          onClick={handleDec}
          data-cy="product-decrement-cart-item-count-button"
        >
          Dec
        </button>
        <button
          onClick={handleRemove}
          data-cy="product-remove-cart-item-button"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Product;
