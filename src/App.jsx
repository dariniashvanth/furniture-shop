import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar */}
        <Navbar cartCount={cart.length} />

        {/* Main content */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route
              path="/products"
              element={<Products addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
