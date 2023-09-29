import React from "react";
import { Link } from "react-router-dom";

import "./Product.css"

function Product(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt="Imagen"></img>
      <h3 className="product-title">{props.title}</h3>
      <p className="product-price">${props.price}</p>
      <Link to={`/products/${props.id}`}>
      <button className="product-button">Detalle</button>
      </Link>
    </div>
  )
};

export default Product;