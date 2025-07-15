import React from 'react';
import Masonry from 'react-masonry-css';
import './gallery.css';

import img1 from './assets/gallery/img1.png';
import img2 from './assets/gallery/img2.jpg';
import img3 from './assets/gallery/img3.png';
import img4 from './assets/gallery/img4.jpg';
import img5 from './assets/gallery/img5.jpg';
import img6 from './assets/gallery/img6.jpg';
import img7 from './assets/gallery/img7.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7];

const breakpointColumnsObj = {
  default: 5,
  1200: 4,
  900: 3,
  600: 2,
  400: 2
};

function GallerySection() {
  return (
    <section className="gallery-section">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="gallery-masonry"
        columnClassName="gallery-column"
      >
        {images.map((src, idx) => (
          <div className="masonry-item" key={idx}>
            <img src={src} alt={`Gallery ${idx}`} />
          </div>
        ))}
      </Masonry>
    </section>
  );
}

export default GallerySection;
