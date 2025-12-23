import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ cartCount }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if Home page
  const isHome = location.pathname === "/";

  // Text color class
  const textColor = isHome ? "text-white" : "text-dark";

  return (
    <nav className="navbar navbar-expand-lg px-5 py-2 navbar-overlay">
      {/* Logo */}
      <a className="navbar-brand d-flex align-items-center" href="/">
        <img
          src="/images/h.png"
          alt="Logo"
          width="50"
          height="40"
          className="me-2"
        />
      </a>

      <div className="ms-auto d-flex align-items-center" style={{ gap: "2rem" }}>
        {/* Links */}
        <button
          className={`btn nav-link hover-effect ${textColor}`}
          onClick={() => navigate("/")}
        >
          Home
        </button>

        <button
          className={`btn nav-link hover-effect ${textColor}`}
          onClick={() => navigate("/products")}
        >
          Products
        </button>

        {/* Cart icon */}
        <i
          className={`bi bi-cart-fill fs-4 hover-effect position-relative ${textColor}`}
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/cart")}
        >
          {cartCount > 0 && (
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: "0.65rem" }}
            >
              {cartCount}
            </span>
          )}
        </i>
      </div>
    </nav>
  );
}
