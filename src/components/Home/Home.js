import React from "react";
import "./Home.css";
import image from "../image/image.jpg";
import Rating from "../hooks/Rating";
import Reviews from "../Reviews/Reviews";
const Home = () => {
  const [reviews, setReviews] = Rating();
  console.log(reviews);
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
        {reviews?.map((review) => (
          <Reviews review={review}></Reviews>
        ))}
        <h1>CUSTOMER REVIEWS:</h1>
        <button className="btn">SEE ALLL REVIEWS...</button>
      </div>
    </div>
  );
};

export default Home;
