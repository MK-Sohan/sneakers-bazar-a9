import React, { useEffect, useState } from "react";

const Rating = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("ratings.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return [reviews, setReviews];
};

export default Rating;
