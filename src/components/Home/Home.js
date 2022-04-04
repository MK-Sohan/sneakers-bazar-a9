import React, { useEffect, useState } from "react";
import "./Home.css";
import image from "../image/image.jpg";
import Rating from "../hooks/Rating";

import { useNavigate } from "react-router-dom";
import Singlereview from "../Singlereview/Singlereview";
const Home = () => {
  const [reviews, setReviews] = Rating();

  console.log(reviews);

  const nav = useNavigate();
  const goreviewpage = () => {
    nav("/goreview");
  };

  return (
    <div className="home-container">
      <div className="leftside">
        <div className="first">
          <h1>THE PERFECT SOUL MATE</h1>
          <span className="second">
            <h1>FOR YOUR FEET</h1>
          </span>
        </div>
        <img src={image} alt="" />
      </div>
      <div className="review-section">
        <h1>CUSTOMER REVIEWS:{reviews.length}</h1>

        <div className="review-container">
          {reviews.map((review) => (
            <Singlereview review={review}></Singlereview>
          ))}
          {/* {reviews.map((review) => (
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
          ))} */}
        </div>

        <button onClick={goreviewpage} className="btn">
          SEE ALLL REVIEWS...
        </button>
      </div>
    </div>
  );
};

export default Home;
