// src/ReviewsPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import {
  collection,
  query,
  orderBy,
  limit,
  startAfter,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db, auth } from "../firebaseconfig"; // make sure auth is exported in firebaseconfig
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Masonry from "react-masonry-css";
import "../styles/reviewpage.css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
};


const ReviewsPage = () => {

  const navigate = useNavigate();
  const location = useLocation();  
  const [reviews, setReviews] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [form, setForm] = useState({ text: "", fullText: "", instagram: "" });
  const [expanded, setExpanded] = useState(null);

  const [user, setUser] = useState(null); // track login state

  // Listen for auth changes
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const q = query(
      collection(db, "review"),
      orderBy("timestamp", "desc"),
      limit(6)
    );

    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setReviews(docs);
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      setHasMore(snapshot.docs.length === 6);
    }
  };

  const loadMore = async () => {
    if (!lastDoc) return;
    setLoadingMore(true);

    const q = query(
      collection(db, "review"),
      orderBy("timestamp", "desc"),
      startAfter(lastDoc),
      limit(6)
    );

    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setReviews((prev) => [...prev, ...docs]);
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      setHasMore(snapshot.docs.length === 6);
    } else {
      setHasMore(false);
    }

    setLoadingMore(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.text || !form.fullText) return;
    if (!user) return alert("You must be logged in to submit a review.");

    await addDoc(collection(db, "review"), {
      ...form,
      userId: user.uid,
      userName: user.displayName || "Anonymous",
      timestamp: serverTimestamp(),
    });

    setForm({ text: "", fullText: "", instagram: "" });
    fetchReviews(); // reload first page
  };

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <div className="reviews-page">
      <h2 className="reviews-title">All Reviews</h2>

      {/* Review Form (only if logged in) */}
      {user ? (
        <form onSubmit={handleSubmit} className="review-form">
          <h3>Submit Your Review</h3>
          <input
            type="text"
            placeholder="Short Title"
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
            required
          />
          <textarea
            placeholder="Full Review"
            value={form.fullText}
            onChange={(e) => setForm({ ...form, fullText: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="@instagram (optional)"
            value={form.instagram}
            onChange={(e) => setForm({ ...form, instagram: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="login-prompt">
          <p>Login to submit a review about us.</p>
          <button onClick={() =>  navigate("/login", { state: { from: location.pathname } })}>Login to loveiswar</button>
        </div>
      )}

      {/* All Reviews */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className={`review-card ${expanded === review.id ? "expanded" : ""}`}
            onClick={() => toggleExpand(review.id)}
          >
            <p className="review-text">"{review.text}"</p>

            <div
              className={`review-dropdown ${
                expanded === review.id ? "show" : ""
              }`}
            >
              {review.fullText && (
                <p className="review-full">{review.fullText}</p>
              )}
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
              {review.userName && (
                <p className="review-user">— {review.userName}</p>
              )}
            </div>
          </div>
        ))}
      </Masonry>

      {/* See More Button */}
      {hasMore && (
        <button
          onClick={loadMore}
          disabled={loadingMore}
          className="see-more-btn"
        >
          {loadingMore ? "Loading..." : "See More"}
        </button>
      )}
    </div>
  );
};

export default ReviewsPage;
