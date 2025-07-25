import React from 'react';
import Masonry from 'react-masonry-css';
import './review.css';

import img1 from './assets/reviewers/ashwin.jpg';
import img3 from './assets/reviewers/img4.jpg';
import img4 from './assets/reviewers/img4.jpg';

const reviews = [
  {
    id: 1,
    text: "Absolutely loved the vibe of the shirt!",
    fullText: "I'm very satisfied with the quality of the Tshirt and it made me to love the Oversized one. The Design HOPE was very Bold and gud to look. I'm very much satisfied to buy it.",
    image: img1,
    instagram: "@_.aswin_.18"
  },
  {
    id: 2,
    text: "Quality exceeded my expectations!",
    fullText: "Quality exceeded my expectations! I’ve worn it multiple times and it still looks brand new.",
    instagram: "@streetfitguy"
  },
  {
    id: 3,
    text: "Coolest drop yet!",
    fullText: "Coolest drop yet! The oversized fit is 🔥🔥🔥.",
    image: img3
  },
  {
    id: 4,
    text: "Minimal but speaks volumes and changed how people see streetwear in my circle.",
    fullText: "Minimal but speaks volumes. Everyone asked me where I got it from!",
  },
  {
    id: 5,
    text: "Fits perfectly and feels premium.",
    fullText: "Fits perfectly and feels premium. Keep making more like these!",
    image: img4,
    instagram: "@wearbyray"
  }
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 2
};

const Reviews = () => {
  return (
    <div className="reviews-container">
      <h2 className="reviews-title">What People Say</h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-inner">
              <div className="review-header">
                {review.image && (
                  <img src={review.image} alt="Reviewer" className="review-image-left" />
                )}
                <p className="review-text">{review.text}</p>
              </div>
              <div className="review-hover">
                <p>{review.fullText}</p>
                {review.instagram && (
                  <p className="review-insta">{review.instagram}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Reviews;
