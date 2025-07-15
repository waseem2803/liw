import React, { useState } from 'react';
import '../styles/store.css'; // Make sure this path is correct

// Import your product images
import product1 from '../assets/popular/hate_front_mk.png';
import product2 from '../assets/popular/qalb.png';
import product3 from '../assets/popular/love is war_mock.png';
import product4 from '../assets/popular/sample.png';

// Product list
const initialProducts = [
  { id: 1, name: 'Hate Survivor Tee', price: 799, image: product1, tag: 'HOT' },
  { id: 2, name: 'The Heart Tee', price: 1299, image: product2, tag: 'NEW' },
  { id: 3, name: 'Love is War Tee', price: 1999, image: product3, tag: 'LIMITED' },
  { id: 4, name: 'Butterfly Tee', price: 999, image: product4, tag: 'TRENDING' },
];

function Store() {
  const [sortOption, setSortOption] = useState('relevance');

  // Sort based on user selection
  const sortedProducts = [...initialProducts].sort((a, b) => {
    if (sortOption === 'low-to-high') return a.price - b.price;
    if (sortOption === 'high-to-low') return b.price - a.price;
    return a.id - b.id; // default relevance
  });

  return (
    <section className="store-container">
      <p className="store-title">Shop Our Collection</p>

      {/* Sort dropdown */}
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

      {/* Products Grid */}
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
