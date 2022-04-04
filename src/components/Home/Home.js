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
          <p>
            The Jordan Legacy 312 is a new Jordan shoe designed in collaboration
            with Don C. It first released in the Summer of 2018.
          </p>
        </div>

        <img src={image} alt="" />
      </div>
      <div className="review-section">
        <h1>CUSTOMER REVIEWS:{reviews.length}</h1>

        <div className="review-container">
          {reviews.slice(0, 3).map((review) => (
            <Singlereview review={review}></Singlereview>
          ))}
        </div>

        <button onClick={goreviewpage} className="btn">
          SEE ALLL REVIEWS...
        </button>
      </div>
    </div>
  );
};

export default Home;
