import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  //localStorage.removeItem('products');

  function addProduct() {

    //console.log(product);

    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    //console.log("Updated:")
    //console.log(updatedProducts);

    localStorage.setItem('products', JSON.stringify(updatedProducts));
    //console.log("Local:");
    //console.log(localStorage.getItem('products'));
  };

  return (
    <div>
      {product ? (
        <div className="product-details">
          <div className="product-card">
            <img src={product.image} alt="Imagen"></img>
          </div>
          <div className="product-card">
            <h3 className="product-title">{product.title}</h3>
            <p>{product.description}</p>
            <p className="product-price">${product.price}</p>
            <Link to='/'>
              <button className="product-button" onClick={addProduct}>Añadir</button>
            </Link>
          </div>
        </div>
      ) : (
        <h1>Cargando Producto...</h1>
      )
      }
    </div>
  )
};

export default ProductDetail;