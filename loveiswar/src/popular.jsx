import React from 'react';
import './popular.css'; // CSS file for styles
import trending from './data/trending.json'; // Product data

// Import product images
import product1 from './assets/popular/hate_front_mk.png';
import product2 from './assets/popular/qalb.png';
import product3 from './assets/popular/love is war_mock.png';
import product4 from './assets/popular/sample.png';

// Map image filenames to actual imports
const imageMap = {
  "hate_front_mk.png": product1,
  "qalb.png": product2,
  "love is war_mock.png": product3,
  "sample.png": product4
};

// Enhance products with image references
const products = trending.map((item) => ({
  ...item,
  image: imageMap[item.image]
}));

function PopularProductsSection() {
  return (
    <section className="popular-products">
      <p className="section-title">Popular Products</p>
      <div className="products-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="polaroid-frame">
              {item.tag && <span className="tag">{item.tag}</span>}
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="caption">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularProductsSection;
