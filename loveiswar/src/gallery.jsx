import React, { useEffect, useState } from 'react';
import './gallery.css';

// Example image imports
import img1 from './assets/gallery/img1.png';
import img2 from './assets/gallery/img2.jpg';
import img3 from './assets/gallery/img3.png';
import img4 from './assets/gallery/img4.jpg';
import img5 from './assets/gallery/img5.jpg';
import img6 from './assets/gallery/img6.jpg';
import img7 from './assets/gallery/img7.jpg';

const imageList = [img1, img2, img3, img4, img5, img6, img7];

function GallerySection() {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const promises = imageList.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          const aspectRatio = img.height / img.width;
          // Convert ratio to row span: taller → bigger span
          let rowSpan = 1;
          if (aspectRatio > 1.5) rowSpan = 3;
          else if (aspectRatio > 1.1) rowSpan = 2;
          else rowSpan = 1;
          resolve({ src, rowSpan });
        };
        img.src = src;
      });
    });

    Promise.all(promises).then((resolvedImages) => {
      // If you want to pad with grey boxes to fill to nearest 10 tiles, do this:
      const total = resolvedImages.length;
      const columns = total < 5 ? 5 : total;
      const filled = [...resolvedImages];
      while (filled.length < columns) {
        filled.push({ filler: true, rowSpan: 1 });
      }
      setTiles(filled);
    });
  }, []);

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        {tiles.map((tile, idx) =>
          tile.filler ? (
            <div className="tile filler" key={idx} style={{ gridRow: `span ${tile.rowSpan}` }}></div>
          ) : (
            <div className="tile" key={idx} style={{ gridRow: `span ${tile.rowSpan}` }}>
              <img src={tile.src} alt={`tile-${idx}`} />
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default GallerySection;
