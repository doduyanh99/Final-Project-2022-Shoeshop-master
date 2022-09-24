import React, { Fragment, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import {clearErrors, getProductDetails} from "../../actions/productAction.js";
import ReviewCard from "./ReviewCard.js";
import {useAlert} from "react-alert";
import Loader from "../layout/Loader/Loader";


const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
    );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert]);

  const options = {
    color: "rgba(20,20,20,0.1",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
    isHalf: true,
  };


return (
<>
  {loading ? ( <Loader /> ) : (
      <>
      <div className="ProductDetails">
        <div>
          <Carousel>
         {product.images &&
            product.images.map((item, i) => (
            <img
            className="CarouselImage"
            key={item.url}
            src={item.url}
            alt={`${i} Slide`}
            />
            ))}
          </Carousel>
        </div>
  
      </div>
              <div className="detailsBlock-1">
                <div>
                  <h2>{product.className}</h2>
                  <p>Produt # {product._id}</p>
                </div>
                <div className="detailsBlock-2">
                  <span>({product.numOfReivews} Reviews</span>
                  </div>
                <div className="detailsBlock-3">
                <h1>{`${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button>-</button>
                    <input value="1" type="number" />
                    <button>+</button>
                    </div>{" "}
                    <button>Add to cart</button>
                  </div>
  
                  <p>
                    Status:{" "}
                    <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                      {product.Stock < 1 ? "OutofStock" : "InStock"}
                    </b>
                  </p>
                </div>
  
                <div className="detailsBlock-4">
                  Description: <p>{product.decripstion}</p>
                </div>
  
              <div className="submitReview">Sumit Review
              </div>
            </div>
            
            <h3 className="reviewsHeading">REVIEWS</h3>
  
            {product.reviews && product.reviews[0] ? (
              <div className="reviews">
                {product.reviews && 
                 product.reviews.map((review) => (
                    <ReviewCard key={review._id} review={review} />
                  ))}
              </div>
            ) : (
              <p className="noReviews">No Reviews Yet</p>
            )}
  </>
  )};
</>
)};
export default ProductDetails;
