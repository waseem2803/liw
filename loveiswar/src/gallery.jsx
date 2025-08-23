import React from 'react';
import Masonry from 'react-masonry-css';
import './gallery.css';

import img1 from './assets/gallery/img1.avif';
import img3 from './assets/gallery/img2.avif';
import img7 from './assets/gallery/img7.avif';
import img8 from './assets/gallery/hope.avif';
import img9 from './assets/gallery/liw.avif';
import gif1 from './assets/gallery/liw_vid.gif';
import gif2 from './assets/gallery/hope_medium.gif';
const images = [img1, img3, gif1, img7, img8, img9, gif2];

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
