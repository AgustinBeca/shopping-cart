import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import RootLayout from './Pages/Root';
import HomePage from './Pages/Home';
import ShoppingCart from './Pages/Cart';
import ProductDetail from './Pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/cart', element: <ShoppingCart /> },
      { path: '/products/:id', element: <ProductDetail />}
    ]
  },
  
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;