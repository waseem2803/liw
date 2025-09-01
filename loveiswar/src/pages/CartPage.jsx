import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/cart.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const checkoutOnWhatsApp = () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Build order message
  let message = "🛒 *New Order Details*%0A%0A";
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} | Size: ${item.size} | Qty: ${item.quantity}%0A`;
  });

  message += "%0A✅ Please confirm the order.";

  // Replace with your WhatsApp number (with country code, no +)
  const phoneNumber = "918838876287"; // Example: India number

  // WhatsApp API link
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  // Open in new tab
  window.open(whatsappURL, "_blank");
};


  return (
    <div className="cart-page">
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty </p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img
                  src={`/assets/products/${item.image}`}
                  alt={item.name}
                  className="cart-image"
                />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>Size: {item.size}</p>
                  <p>Qty: {item.quantity}</p>
                  <p>₹{item.price * item.quantity}</p>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>
            <button className="checkout-btn" onClick={checkoutOnWhatsApp}>Checkout</button>
            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default Cart;
