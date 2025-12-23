import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ addToCart }) {
  const navigate = useNavigate(); // React Router navigation

  const collections = [
    { id: 101, name: "Modern Sofa", price: 499, img: "/images/collection1.jpg" },
    { id: 102, name: "Luxury Chair", price: 299, img: "/images/collection2.jpg" },
    { id: 103, name: "Wooden Table", price: 699, img: "/images/collection3.jpg" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero"
        style={{
          backgroundImage: 'url("/images/black.png")',
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Image below hero */}
      <div className="container-fluid mb-5 text-center">
        <img
          src="/images/home-banner.jpg"
          alt="Home Banner"
          className="img-fluid rounded"
        />
      </div>

      {/* Explore New Collections */}
      <div className="container-fluid px-5 container-top-space">
        <h3 className="text-center mt-19 mb-5">Explore New Collections</h3>
        <div className="row">
          {collections.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="collection-card position-relative">
                <img
                  src={item.img}
                  alt={item.name}
                  className="img-fluid rounded"
                />

                {/* Wishlist icon overlay */}
                <div className="collection-overlay">
                  <i className="bi bi-heart"></i>
                </div>

                {/* Price & Add-to-Cart */}
                <div className="collection-footer d-flex justify-content-between align-items-center mt-2">
                  <span>${item.price}</span>
                  <button
                    className="btn add-cart-btn"
                    onClick={() => addToCart(item)}
                    title="Add to Cart"
                  >
                    <i className="bi bi-cart-plus-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="container-fluid my-4 text-center">
        <img
          src="/images/Catalog.jpg"
          alt="Promotional Banner"
          className="img-fluid rounded"
        />
      </div>

      {/* Shop Button */}
      <div className="text-center mb-5">
        <button className="btn btn-dark" onClick={() => navigate("/products")}>
          Shop Now
        </button>
      </div>

      {/* Full-width Promotional Image */}
      <div style={{ width: "100%", overflow: "hidden" }}>
        <img
          src="/images/Promotional1.png"
          alt="Promotional Banner 2"
          style={{
            width: "100%",
            maxHeight: "600px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Review Image at Bottom */}
      <div className="container-fluid my-5 text-center">
        <img
          src="/images/review.jpg"
          alt="Customer Reviews"
          className="img-fluid rounded shadow-sm"
          style={{
            width: "100%",
            maxHeight: "600px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
