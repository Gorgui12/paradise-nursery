import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import ProductList from './components/productList';
import Cart from './components/cart';
import Destination from './components/destination';
import store from './store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Destination />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
