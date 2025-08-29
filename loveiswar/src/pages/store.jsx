// src/pages/Store.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/store.css";

import productsData from "../data/products.json";

// Import images
import product1 from "../assets/products/liw_p1.avif";
import product2 from "../assets/products/hope_p2.avif";
import product3 from "../assets/products/cupid_p3.avif";
import product4 from "../assets/products/brown_p4.avif";

// Add extra images too (back/closeup etc.)
//import liw_back from "../assets/products/liw_p1_back.avif";
//import liw_close from "../assets/products/liw_p1_closeup.avif";
//import hope_back from "../assets/products/hope_p2_back.avif";
//import cupid_back from "../assets/products/cupid_p3_back.avif";
//import brown_back from "../assets/products/brown_p4_back.avif";

// Map image filenames to imports
const imageMap = {
  "liw_p1.avif": product1,
  "hope_p2.avif": product2,
  "cupid_p3.avif": product3,
  "brown_p4.avif": product4,

  // extra ones from JSON
  //"liw_p1_back.avif": liw_back,
  //"liw_p1_closeup.avif": liw_close,
  //"hope_p2_back.avif": hope_back,
  //"cupid_p3_back.avif": cupid_back,
  //"brown_p4_back.avif": brown_back,
};

// Enhance products with real image imports
const initialProducts = productsData.map((product) => ({
  ...product,
  image: imageMap[product.image], // main image
  images: product.images.map((img) => imageMap[img]), // array of images
}));

function Store() {
  const [sortOption, setSortOption] = useState("relevance");

  const sortedProducts = [...initialProducts].sort((a, b) => {
    if (sortOption === "low-to-high") return a.price - b.price;
    if (sortOption === "high-to-low") return b.price - a.price;
    return a.id - b.id;
  });

  return (
    <section className="store-container">
      <p className="store-title">Shop Our Collection</p>
      <p className="note">
        FYI, online checkout isn’t available yet. Tap a product to order via
        WhatsApp. We'll assist you right away!
      </p>

      <div className="sort-section">
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="relevance">Relevance</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      <div className="products-grid">
        {sortedProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            className="product-card"
            key={product.id}
          >
            <div className="polaroid-frame">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="caption">
                <h4>{product.name}</h4>
                <p>₹{product.price}</p>
                
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Store;
