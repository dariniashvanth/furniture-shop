import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart({ cart, setCart }) {
  const navigate = useNavigate(); // <-- React Router navigation
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    cart.forEach((item) => {
      initialQuantities[item.id] = quantities[item.id] || 1;
    });
    setQuantities(initialQuantities);
  }, [cart]);

  const increaseQuantity = (id) => {
    setQuantities({ ...quantities, [id]: quantities[id] + 1 });
  };

  const decreaseQuantity = (id) => {
    if (quantities[id] > 1) {
      setQuantities({ ...quantities, [id]: quantities[id] - 1 });
    }
  };

  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    const newQuantities = { ...quantities };
    delete newQuantities[id];
    setQuantities(newQuantities);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * quantities[item.id],
    0
  );

  return (
    <div className="container-fluid page-container my-5">
      <h2 className="mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="card mb-3 p-3 d-flex flex-row align-items-center"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  className="me-3 rounded"
                />

                <div className="flex-grow-1">
                  <h5>{item.name}</h5>
                  <p className="text-muted">{item.desc}</p>

                  <div className="d-flex align-items-center mt-2">
                    <button
                      className="btn btn-outline-secondary btn-sm me-2"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span>{quantities[item.id]}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm ms-2 me-2"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>

                    <button
                      onClick={() => deleteItem(item.id)}
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        marginLeft: "10px",
                        cursor: "pointer",
                      }}
                      title="Remove item"
                    >
                      <i
                        className="bi bi-trash"
                        style={{ color: "grey", fontSize: "1.2rem" }}
                      ></i>
                    </button>
                  </div>
                </div>

                <div className="ms-3 fw-bold">
                  ${item.price * quantities[item.id]}
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="card p-4 shadow-sm">
              <h4>Order Summary</h4>
              <hr />
              <p className="d-flex justify-content-between">
                Subtotal: <span>${total}</span>
              </p>
              <button
                className="btn btn-continue w-100 mb-2"
                onClick={() => navigate("/products")} 
              >
                Continue Shopping
              </button>
              <button
                className="btn btn-secondary w-100"
                onClick={() => navigate("/")} 
              >
                Back Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
