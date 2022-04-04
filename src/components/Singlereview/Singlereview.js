import React from "react";
import "./Singlereview.css";
const Singlereview = (props) => {
  console.log(props.review);
  const { rating, image, name, review } = props.review;
  return (
    <div className="review-container">
      <div className="single-review">
        <img src={image} alt="" />
        <div className="single-detail">
          <h5>Name:{name}</h5>
          <p>
            Rating: <span className="rating-color">{rating}</span>
          </p>
          <p>Review:{review}</p>
        </div>
      </div>
    </div>
  );
};

export default Singlereview;
