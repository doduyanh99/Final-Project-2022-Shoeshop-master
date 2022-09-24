import { Rating } from "@material-ui/lab";
import React from "react";
import Useravatar from "../../images/products/Useravatar.png";

const ReviewCard = ({ review }) => {
  const options = {
    color: "rgba(20,20,20,0.1",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: review.rating,
    readOnly: true,
    precision: 0.5,
    isHalf: true,
  };

  return (
    <div className="reviewCard">
      <img src={"Useravatar"} alt="User" />
      <p>{review.name}</p>
      <Rating {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
