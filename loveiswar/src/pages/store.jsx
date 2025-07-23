import React, { useState } from 'react';
import '../styles/store.css';

import productsData from '../data/products.json';

// Import images
import hateImg from '../assets/popular/hate_front_mk.png';
import qalbImg from '../assets/popular/qalb.png';
import loveIsWarImg from '../assets/popular/love is war_mock.png';
import sampleImg from '../assets/popular/sample.png';

// Map image filenames to imports
const imageMap = {
  "hate_front_mk.png": hateImg,
  "qalb.png": qalbImg,
  "love is war_mock.png": loveIsWarImg,
  "sample.png": sampleImg
};

// Enhance products with image references
const initialProducts = productsData.map(product => ({
  ...product,
  image: imageMap[product.image]
}));

function Store() {
  const [sortOption, setSortOption] = useState('relevance');

  const sortedProducts = [...initialProducts].sort((a, b) => {
    if (sortOption === 'low-to-high') return a.price - b.price;
    if (sortOption === 'high-to-low') return b.price - a.price;
    return a.id - b.id;
  });

  return (
    <section className="store-container">
      <p className="store-title">Shop Our Collection</p>

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
          <div className="product-card" key={product.id}>
            <div className="polaroid-frame">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="caption">
                <h4>{product.name}</h4>
                <p>₹{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Store;
