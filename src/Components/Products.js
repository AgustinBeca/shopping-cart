import React, { /* useState, */ useEffect, useReducer } from "react";

import "./Products.css";

import Product from "./Product";

import { actions, initalState, productReducer } from "../Helpers/reducer";

function Products(props) {

  /* const [products, setProducts] = useState(); */
  let filteredProducts = [];

  const [state, dispatch] = useReducer(productReducer, initalState);
  const { products, error } = state;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: actions.FETCH_PRODUCT_SUCCESS, payload: data })
      ).catch((e) =>
        dispatch({ type: actions.FETCH_PRODUCT_FAIL, payload: e.message })
      );
  }, []);

  if (props.category === "all") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(product => product.category === props.category);
  }

  //console.log(filteredProducts);

  //TRAER SOLO 6 PRODUCTOS
  /* useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const newData = [];
        for (let i = 0; i < 6; i++) {
          newData.push(data[i]);
        }
        setProducts(newData);
      });
  }, []); */

  //console.log(products);

  /* function getAllProducts() {
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
  }; */

  return (
    <>
      {error && <div>{error}</div>}
      {products ? (
        <>
          <div className="products-list">
            {filteredProducts.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                category={product.category}
              />
            ))}
          </div>
          {/* {products.length === 6 ?
            <button className="see-all-button" onClick={getAllProducts}>Ver Todos</button>
            :
            <button className="see-all-button" onClick={seeLessProducts}>Ver Menos</button>
          } */}
        </>

      ) : (
        <h1 className="loading-message">Cargando Productos...</h1>
      )}
    </>
  )
};

export default Products;