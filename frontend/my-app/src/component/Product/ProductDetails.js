import React, {  useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {  getProductDetails } from "../../actions/productAction.js";
import ReviewCard from "./ReviewCard.js";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader/Loader";
import ReactStars from "react-rating-stars-component";
import { addItemsToCart } from "../../actions/cartAction";

const ProductDetails = ({ match }) => {

  const dispatch = useDispatch();
  const alert = useAlert();

  const { product, loading } = useSelector(
    (state) => state.productDetails
  );

  const [quantity, setQuantity] = useState(1);

  const options = {
    value: product?.ratings,
    readOnly: true,
    precision: 0.5,
  };



  useEffect(() => {
    dispatch(getProductDetails(match?.params?.id));
  }, [dispatch, match.params.id, alert]);


  const increaseQuantity = () => {
    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(match?.params?.id, quantity));
    alert.success("Item Added To Cart");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="ProductDetails">
            <Carousel>
              {product?.images &&
                product?.images?.map((item, i) => (
                  <img
                    className="CarouselImage"
                    key={item?.url}
                    src={item?.url}
                    alt={`${i} Slide`}
                  />
                ))}
            </Carousel>
          </div>
          <div className="detailsBlock-1">
            <div>
              <h2>{product?.className}</h2>
              <div>Produt # {product._id}</div>
              Status:
              <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                {product.Stock < 1 ? "OutofStock" : "InStock"}
              </b>
            </div>

            <div className="detailsBlock-3">
              <div>
                <h1>{`Price: ${product.price}VND`}</h1>
              </div>

              <div className="detailsBlock-3-1">
                <div className="detailsBlock-3-1-1">
                  <button onClick={decreaseQuantity}>-</button>
                  <input readOnly  type="number" value={quantity} />
                  <button onClick={increaseQuantity}>+</button>
                </div>
                <button onClick={addToCartHandler}>Add to cart</button>
              </div>
            </div>
            <div className="detailsBlock-4">
              <div>Description:</div>
              <div>{product.description}</div>
            </div>
            <div className="rating-1">
              <div>Rating:</div>
              <ReactStars {...options} />
            </div>
            <div className="submitReview">Sumit Review</div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          {product?.reviews && product?.reviews?.[0] ? (
            <div className="reviews">
              {product?.reviews &&
                product?.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <div className="noReviews">No Reviews Yet</div>
          )}
        </>
      )}
      ;
    </>
  );
};
export default ProductDetails;
