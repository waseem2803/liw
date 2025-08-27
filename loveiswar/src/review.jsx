// src/HighlightReviews.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseconfig";
import Masonry from "react-masonry-css";
import "./review.css";

const HighlightReviews = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [reviews, setReviews] = useState([]);
  const [expanded, setExpanded] = useState(null); // track expanded card

  useEffect(() => {
    const fetchReviews = async () => {
      const snapshot = await getDocs(collection(db, "review"));
      const allReviews = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Shuffle and take 5 random reviews
      const shuffled = allReviews.sort(() => 0.5 - Math.random());
      setReviews(shuffled.slice(0, 5));
    };

    fetchReviews();
  }, []);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">What People Say</h2>

      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 700: 2 }}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className={`review-card ${expanded === review.id ? "expanded" : ""}`}
            onClick={() => toggleExpand(review.id)}
          >
            {/* Always show preview text */}
            <p className="review-text">
              "{review.text}"
            </p>

            {/* Expand to show full review & Instagram */}
            <div className={`review-dropdown ${expanded === review.id ? "show" : ""}`}>
              {review.fullText && <p className="review-full">{review.fullText}</p>}
              {review.instagram && (
                <a
                  href={`https://instagram.com/${review.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="review-insta"
                  onClick={(e) => e.stopPropagation()}
                >
                  {review.instagram}
                </a>
              )}
            </div>
          </div>
        ))}
      </Masonry>

      <button onClick={() => navigate("/reviews")} className="morebtn">
        More Reviews
      </button>
    </div>
  );
};

export default HighlightReviews;
