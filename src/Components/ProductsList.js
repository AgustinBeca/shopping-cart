import React, { useEffect, useState } from "react";

import "./ProductsList.css"

function ProductsList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  //console.log(products.length);

  let total = 0;

  if (products) {
    products.forEach((products) => {
      const subtotal = products.price * products.rating.count;
      total += subtotal;
    });
    //console.log(total);
  }

  return (
    <>
      {products.length > 0 ? (
        <>
          <h2 className="cart-title">Estos fueron los productos escogidos</h2>
          <table className="products-cart">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="products-cart-image"><img src={product.image} alt="Imagen" /></td>
                  <td className="products-cart-name">{product.title}</td>
                  <td className="products-cart-price">${product.price}</td>
                  <td className="products-cart-count">{product.rating.count}</td>
                  <td className="products-cart-subtotal">${product.price * product.rating.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2 className="products-cart-total">Total: ${total}</h2>
        </>
      ) : (
        <h2 className="empty-cart">Carrito de Compras Vacío</h2>
      )}

    </>
  )
};

export default ProductsList;