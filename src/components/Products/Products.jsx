import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import styles from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let r = await axios.get(`http://localhost:1001/products`);
      let data = await r.data;
      //console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {/* Code here */}Products
      <div className={styles.gridProp} >
        <div>
          {products.map((prod) => {
            return (
              <li key={prod.id}>
                <Link to={`/products/${prod.id}`}> {prod.name}</Link>
              </li>
            );
          })}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Products;
