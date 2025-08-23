import React from 'react';
import Masonry from 'react-masonry-css';
import './review.css';

import img1 from './assets/reviewers/ashwin.jpg';
import img3 from './assets/reviewers/img3.jpg';
import img4 from './assets/reviewers/img4.jpg';

const reviews = [
  {
    id: 1,
    text: "Absolutely loved the vibe of the shirt!",
    fullText: "I'm very satisfied with the quality of the Tshirt and it made me to love the Oversized one. The Design HOPE was very Bold and gud to look.",
    image: img1,
    instagram: "@_.aswin_.18"
  },
  {
    id: 2,
    text: "unexpected!",
    fullText: "Great value for money , the fabric and print quality really stood out.Didn’t expect this level of finish from a new brand.",
    instagram: "@shobanrajn"
  },
  {
    id: 3,
    text: "BlackTastic !!!",
    fullText: "BlackTastic! The fabric feels great and the design is so unique.",
    instagram: "@mr.snite_tamil",
    image: img3
  },
  {
    id: 4,
    text: "Minimal but speaks volumes and changed how people see streetwear in my circle.",
    fullText: "Minimal but speaks volumes. Everyone asked me where I got it from!",
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
