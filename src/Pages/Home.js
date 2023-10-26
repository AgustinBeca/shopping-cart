import React, { useState } from "react";

import Products from "../Components/Products";
import ProductsFilter from "../Components/ProductsFilter";

function HomePage(){

  const [filteredCategory, setFilteredCategory] = useState('all');

  function filterchangeHandler(selectedCategory){
    setFilteredCategory(selectedCategory);
  };

  return (
    <div>
      <ProductsFilter selected={filteredCategory} onChangeFilter={filterchangeHandler} />
      <Products category={filteredCategory} />
    </div>
  )
};

export default HomePage;