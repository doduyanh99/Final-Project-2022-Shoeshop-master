import React from "react";
import Useravatar from "../../images/products/Useravatar.png";
import "./ProductDetails.css";
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({ review }) => {

  const options = {
    value: review?.rating,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <div className="reviewCard">
      <div className="reviewCard-1">
      <img src={Useravatar} alt="User" />
      <div>
      <p>{review.name}</p>
      <ReactStars {...options} />
      </div>
      </div>
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
