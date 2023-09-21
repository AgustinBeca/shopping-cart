import React from "react";

import "./Product.css"

function Product(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt="Imagen"></img>
      <h3 className="product-title">{props.title}</h3>
      <p className="product-price">${props.price}</p>
      <button className="product-button">Agregar</button>
    </div>
  )
};

export default Product;