import React, { useState, useEffect } from "react";

import "./Products.css";

import Product from "./Product";

function Products() {

  /* const products = [
    {
      title: 'PS5',
      price: '500',
      description: "The last PlayStation Console",
      image: "",
      category: "electronic"
    },
    {
      title: 'Xbox Series X',
      price: '500',
      description: "The last Xbox Console",
      image: "",
      category: "electronic"
    },
    {
      title: 'Xbox Series S',
      price: '300',
      description: "The last Xbox Console",
      image: "",
      category: "electronic"
    },
    
  ]; */

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const newData = [];
        for (let i = 0; i < 6; i++) {
          newData.push(data[i]);
        }
        setProducts(newData);
      });
  }, []);

  //console.log(products);

  function getAllProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  function seeLessProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const newData = [];
        for (let i = 0; i < 6; i++) {
          newData.push(data[i]);
        }
        setProducts(newData);
      });
  };

  return (
    <div>
      {products ? (
        <>
          <div className="products-list">
            {products.map((product) => (
              <Product
                key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
          {products.length === 6 ?
            <button className="see-all-button" onClick={getAllProducts}>Ver Todos</button>
            :
            <button className="see-all-button" onClick={seeLessProducts}>Ver Menos</button>
          }
        </>

      ) : (
        <h1 className="loading-message">Cargando Productos...</h1>
      )}
    </div>
  )
};

export default Products;