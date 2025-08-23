import React from 'react';
import './popular.css'; 
import trending from './data/trending.json'; 

// Import product images
import product1 from './assets/products/liw_p1.avif';
import product2 from './assets/products/hope_p2.avif';
import product3 from './assets/products/cupid_p3.avif';
import product4 from './assets/products/brown_p4.avif';

// Map image filenames to actual imports
const imageMap = {
  "liw_p1.avif": product1,
  "hope_p2.avif": product2,
  "cupid_p3.avif": product3,
  "brown_p4.avif": product4
};

// Enhance products with image references + random tilt
const products = trending.map((item) => ({
  ...item,
  image: imageMap[item.image],
  tilt: Math.random() * 10 - 5 // random tilt between -5° and +5°
}));

function PopularProductsSection() {
  return (
    <section className="popular-products">
      <p className="section-title">Popular Products</p>
      <div className="products-grid">
        {products.map((item) => (
          <div
            className="product-card"
            key={item.id}
            style={{ transform: `rotate(${item.tilt}deg)` }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `rotate(${item.tilt}deg)`;
            }}
          >
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
