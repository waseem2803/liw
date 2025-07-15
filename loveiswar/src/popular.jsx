import product1 from './assets/popular/hate_front_mk.png';
import product2 from './assets/popular/qalb.png';
import product3 from './assets/popular/love is war_mock.png';
import product4 from './assets/popular/sample.png';
import React from 'react';
import './popular.css'; // Ensure you have a CSS file for styling

const products = [
  { name: ' Hate surivior Tee', price: '₹799', image: product1, tag: 'HOT' },
  { name: 'The heart Tee', price: '₹1299', image: product2, tag: 'NEW' },
  { name: 'Love is War Tee', price: '₹1999', image: product3, tag: 'LIMITED' },
  { name: 'Butterfly Tee', price: '₹999', image: product4, tag: 'TRENDING' },
];


function PopularProductsSection() {
  return (
    <section className="popular-products">
      <p className="section-title">Popular Products</p>
      <div className="products-grid">
        {products.map((item, idx) => (
          <div className="product-card" key={idx}>
            <div className="polaroid-frame">
              <span className="tag">{item.tag}</span>
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="caption">
                <h4>{item.name}</h4>
                <p>{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularProductsSection;