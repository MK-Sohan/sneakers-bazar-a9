import React, { useState } from "react";
import Rating from "../hooks/Rating";
import Reviews from "../Reviews/Reviews";

const ForReviews = () => {
  const [reviews, setReviews] = Rating();

  return (
    <div>
      {reviews?.map((review) => (
        <Reviews review={review}></Reviews>
      ))}
    </div>
  );
};

export default ForReviews;
