import React, { createContext, useEffect, useState, useContext } from "react";

export const ProductContext = createContext(null);

export function useProducts() {
  return useContext(ProductContext);
}

export const ProductProvider = ({ children }) => {
  const [productId, setProductId] = useState();
  const [selectedProduct, setSelectedProduct] = useState();
  useEffect(() => {
    if (productId) {
      fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((response) => response.json())
        .then((data) => setSelectedProduct(data));
    }
  }, [productId]);

  const store = {
    selectedProduct,
    setSelectedProduct,
    setProductId
  };

  return (
    <ProductContext.Provider value={store}>{children}</ProductContext.Provider>
  );
};
