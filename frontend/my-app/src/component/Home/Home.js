import React, { Fragment, useEffect } from "react";
import "./Home.css";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Product from "./ProductCart.js";


const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [alert, dispatch, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>

          <div className="banner">
            <p>Welcome to Shopshoes</p>
            <h1>ELEVATE VIETNAMESE FEELS</h1>

            <a href="#container">
              <button>
                Scroll 
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products && 
            products.map((product) => 
            <Product product={product} key={product?.id} />)
            }
          </div>
        </>
      )}
    </>
  );
};

export default Home;