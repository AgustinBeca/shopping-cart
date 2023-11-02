import React, { useEffect, useState } from "react";
//import { useParams, Link } from "react-router-dom";
//import { useProducts } from "../Helpers/context";

function ProductDetail() {

  //const { id } = useParams();
  const id = 1;
  const [product, setProduct] = useState([]);

  const [products, setProducts] = useState([]);

  const [message, setMessage] = useState("Antes Revisa el Producto");

  /* const { setProductId, selectedProduct } = useProducts();
  setProductId(id); */

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  function addProduct() {
    //console.log(product);

    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    //console.log("Updated:")
    //console.log(updatedProducts);

    localStorage.setItem('products', JSON.stringify(updatedProducts));
    //console.log("Producto Añadido correctamente!");
    setMessage("Producto Añadido correctamente!");
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
            <p className="product-category">{product.category}</p>
            <p>{product.description}</p>
            <p className="product-price">${product.price}</p>
            
            <button className="product-button" onClick={addProduct}>Añadir</button>
            <p>{message}</p>
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

/* <Link to='/'>
  <button className="product-button" onClick={addProduct}>Añadir</button>
</Link> */