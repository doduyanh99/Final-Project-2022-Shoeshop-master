import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import "./ProductCart.css";
const ProductCart = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} className="ImageProduct" alt={product.name} />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} />{" "}
        <span>({product.numOfReviews} Reviews)</span>
      </div>
      <span>{`${product.price}VND`}</span>
    </Link>
  );
};


export default ProductCart;