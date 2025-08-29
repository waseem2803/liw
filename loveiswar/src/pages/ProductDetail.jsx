import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../data/products.json"; // your JSON file
import "../styles/ProductDetail.css";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((item) => item.id === parseInt(id));
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(product?.image || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (product && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]); // default first size
    }
  }, [product]);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  // ✅ Only one Add to Cart function
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    addToCart(product, selectedSize, quantity);

    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000); // auto hide
  };

  const handleBuyNow = () => {
    const message = `Hi, I'm interested in buying "${product.name}" - Size: ${selectedSize}, Quantity: ${quantity}. Price: ₹${product.price * quantity}`;
    const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="product-detail">
      {/* Left Section: Images */}
      <div className="product-images">
        <img
          src={`/assets/products/${selectedImage}`}
          alt={product.name}
          className="main-image"
        />
        <div className="thumbnail-list">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={`/assets/products/${img}`}
              alt={`${product.name} ${index}`}
              className={`thumbnail ${selectedImage === img ? "active" : ""}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Right Section: Info */}
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">₹{product.price}</p>
        <p className="description">{product.description}</p>
        <p><strong>Material:</strong> {product.material}</p>
        <p><strong>Available Colors:</strong> {product.colors.join(", ")}</p>
        {/* Size Selector */}
        <div className="size-options">
          <h3>Select Size:</h3>
          {product.sizes.map((size, index) => (
            <button
              key={index}
              className={`size-btn ${selectedSize === size ? "selected" : ""}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Quantity Selector */}
        <div className="quantity-selector">
          <h3>Quantity:</h3>
          <button
            className="qty-btn"
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            disabled={quantity === 1}
          >
            -
          </button>
          <span className="qty-value">{quantity}</span>
          <button
            className="qty-btn"
            onClick={() =>
              setQuantity(quantity < product.stock ? quantity + 1 : quantity)
            }
            disabled={quantity === product.stock}
          >
            +
          </button>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          {showMessage && <div className="cart-popup">Item added to cart!</div>}

          <button className="buy-now-btn" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>

        {/* Cart Navigation */}
        <div className="cart-review">
          <Link to="/cart">Go to Cart</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
