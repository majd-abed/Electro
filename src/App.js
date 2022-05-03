import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer, Loading } from './components';
import Home from './Pages/Home'
import Allproducts from './Pages/Allproducts'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Discover from './Pages/Discover'
import SingleProductPage from './Pages/SingleProductPage'
import './App.css';
import { useGlobal } from './context/context';
import { useAuth0 } from '@auth0/auth0-react';
function App() {
  const {isLoading} = useAuth0()
  const { cart } = useGlobal();
  if (isLoading && !cart) return <Loading/>
  return (
    <>
      <Navbar totalItems={cart.total_items} />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<Allproducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/:productId" element={<SingleProductPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
