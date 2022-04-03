import React, { useEffect, useState } from "react";
import "./Home.css";
import image from "../image/image.jpg";
import Rating from "../hooks/Rating";
import Reviews from "../Reviews/Reviews";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("ratings.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
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
          {reviews?.map((review) => (
            <Reviews review={review}></Reviews>
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
