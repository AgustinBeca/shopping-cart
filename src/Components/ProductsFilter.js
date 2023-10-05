import React from "react";

import "./ProductsFilter.css"

function ProductsFilter(props) {

  function dropDownChangeHandler(event) {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="products-filter">
      <select value={props.selected} onChange={dropDownChangeHandler}>
        <option value="all">All</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="women's clothing">Women's clothing</option>
      </select>
    </div>
  )
};

export default ProductsFilter;