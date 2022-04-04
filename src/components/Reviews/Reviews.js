import React from "react";
import Rating from "../hooks/Rating";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = Rating();
  return (
    <div className="review-container">
      {reviews.map((review) => (
        <div className="all-review">
          <img src={review.image} alt="" />
          <div className="review-detail">
            <h5>Name:{review.name}</h5>
            <p>
              Rating: <span className="rating-color">{review.rating}</span>
            </p>
            <p>Review:{review.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
