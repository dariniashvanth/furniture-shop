import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const productsList = [
  { id: 1, name: "Luxury Sofa", price: 499, img: "/images/sofa3.jpg", desc: "Premium comfort sofa with modern design and soft cushioning.", category: "Sofa", rating: 4 },
  { id: 2, name: "Modern Chair", price: 699, img: "/images/sofa1.jpg", desc: "A sleek, minimalist chair designed for comfort and modern living spaces.", category: "Chair", rating: 5 },
  { id: 3, name: "TV Table", price: 199, img: "/images/5.jpg", desc: "Ergonomic table designed for daily comfort.", category: "Table", rating: 3 },
  { id: 4, name: "Elegant side Table", price: 899, img: "/images/7.jpg", desc: "Elegant side Table made with premium solid wood.", category: "Table", rating: 5 },
  { id: 5, name: "Urban Comfort Sofa", price: 799, img: "/images/4.jpg", desc: "A spacious and stylish sofa designed for comfort and flexible seating.", category: "Sofa", rating: 4 },
  { id: 6, name: "Ruby Chair", price: 299, img: "/images/6.jpg", desc: "A stylish chair with clean lines, perfect for everyday.", category: "Chair", rating: 4 },
  { id: 7, name: "Lounge Sofa", price: 549, img: "/images/8.jpg", desc: "Contemporary sofa with smart storage space.", category: "Sofa", rating: 5 },
  { id: 8, name: "Rosa chair", price: 349, img: "/images/9.jpg", desc: "Modern chair perfect for compact spaces.", category: "Chair", rating: 3 },
  { id: 9, name: "Grey minimal Sofa", price: 249, img: "/images/grey.jpg", desc: "Elegant sofa for bedrooms and living rooms.", category: "Sofa", rating: 4 },
];

export default function Products({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProducts =
    selectedCategory === "All"
      ? productsList
      : productsList.filter((p) => p.category === selectedCategory);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`bi ${i <= rating ? "bi-star-fill text-warning" : "bi-star text-muted"} me-1`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div>
      {/* HERO SECTION */}
      <div
        className="products-hero"
        style={{ backgroundImage: 'url("/images/products-hero1.png")' }}
      ></div>

      {/* Product Categories Heading */}
      <div className="container-fluid px-5 my-4 text-center">
        <h2>Product Categories</h2>
      </div>

      {/* CATEGORY FILTER */}
      <div className="container-fluid px-5 my-3">
        <div className="row justify-content-center">
          {["All", "Chair", "Sofa", "Table"].map((category) => (
            <div key={category} className="col-auto mb-2">
              <button
                className={`btn ${selectedCategory === category ? "btn-dark" : "btn-outline-dark"}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="container-fluid px-5 my-3">
        <div className="row">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 mb-4 d-flex">
              <div className="product-card h-100 d-flex flex-column position-relative">
                {/* Wishlist */}
                <i className="bi bi-heart wishlist-icon"></i>

                {/* Image */}
                <img src={product.img} alt={product.name} className="product-img" />

                {/* Content */}
                <div className="p-3 d-flex flex-column flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="mb-0">{product.name}</h5>
                    <div>{renderStars(product.rating)}</div>
                  </div>

                  <p className="text-muted small mb-3">{product.desc}</p>

                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-dark">${product.price}</span>
                    <button className="btn add-cart-btn" onClick={() => addToCart(product)} title="Add to Cart">
                      <i className="bi bi-cart-plus-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Home */}
        <div className="text-center mt-4 mb-5">
          <button className="btn btn-dark" onClick={() => navigate("/")}>
            Back Home
          </button>
        </div>
      </div>
    </div>
  );
}
