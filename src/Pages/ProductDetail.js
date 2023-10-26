import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useProducts } from "../Helpers/context";

function ProductDetail() {

  const { id } = useParams();
  //const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);

  const { setProductId, selectedProduct } = useProducts();
  setProductId(id);

  /* useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []); */

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  function addProduct() {
    //console.log(product);

    const updatedProducts = [...products, selectedProduct];
    setProducts(updatedProducts);
    //console.log("Updated:")
    //console.log(updatedProducts);

    localStorage.setItem('products', JSON.stringify(updatedProducts));
    console.log("Producto Añadido correctamente!");
    //console.log("Local:");
    //console.log(localStorage.getItem('products'));
  };

  return (
    <div>
      {selectedProduct ? (
        <div className="product-details">
          <div className="product-card">
            <img src={selectedProduct.image} alt="Imagen"></img>
          </div>
          <div className="product-card">
            <h3 className="product-title">{selectedProduct.title}</h3>
            <p className="product-category">{selectedProduct.category}</p>
            <p>{selectedProduct.description}</p>
            <p className="product-price">${selectedProduct.price}</p>
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