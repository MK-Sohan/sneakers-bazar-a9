import React from "react";

const Reviews = (props) => {
  //   const { rating } = review;
  console.log(props.review.rating);
  return (
    <div>
      {/* <h1>this is review section:{props.review.rating}</h1> */}
      {/* <img src={props.review.image} alt="" /> */}
    </div>
  );
};

export default Reviews;
