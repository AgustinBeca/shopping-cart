import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import ProductsList from './Components/ProductsList';
import ProductsFilter from './Components/ProductsFilter';
import ProductDetail from './Pages/ProductDetail';

//jest.mock('react-router-dom');

test('Renders Product List Title', () => {
  render(<ProductsList />);
  
  const productListTitle = screen.getByText("Estos fueron los productos escogidos");

  expect(productListTitle).toBeInTheDocument();
});

test('Renders Product Filter Categories', () =>{
  render(<ProductsFilter />);

  const productFilterAll = screen.getByText("All");
  const productFilterMensClothing = screen.getByText("Men's clothing");
  const productFilterJewelery = screen.getByText("Jewelery");
  const productFilterElectronics = screen.getByText("Electronics");

  expect(productFilterAll).toBeInTheDocument();
  expect(productFilterMensClothing).toBeInTheDocument();
  expect(productFilterJewelery).toBeInTheDocument();
  expect(productFilterElectronics).toBeInTheDocument();
});

test('Add product to Cart', ()=> {
  render(<ProductDetail />);

  const emptyMessage = screen.getByText("Antes Revisa el Producto");
  expect(emptyMessage).toBeInTheDocument();

  const buttonElement = screen.getByText("Añadir");
  fireEvent.click(buttonElement);

  const updatedMessage = screen.getByText("Producto Añadido correctamente!");
  expect(updatedMessage).toBeInTheDocument();
  
  expect(buttonElement).toBeInTheDocument();
});