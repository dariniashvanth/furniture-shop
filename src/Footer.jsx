import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container text-center">

        {/* Row 1: Navigation Links */}
        <div className="d-flex justify-content-center gap-5 mb-4">
          <span
            className="footer-link"
            onClick={() => navigate("/")} 
          >
            Home
          </span>

          <span
            className="footer-link"
            onClick={() => navigate("/products")} 
          >
            Products
          </span>

          <span className="footer-link">About Us</span>
          <span className="footer-link">Contact Us</span>
        </div>

        {/* Row 2: Social Icons */}
        <div className="mb-4">
          <a href="#" className="social-icon mx-3">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="social-icon mx-3">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="social-icon mx-3">
            <i className="bi bi-twitter"></i>
          </a>
        </div>

        {/* Row 3: Divider */}
        <hr className="border-secondary w-50 mx-auto mb-4" />

        {/* Row 4: Copyright */}
        <p className="mb-0 small text-secondary">
          © 2025 Furniture Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
