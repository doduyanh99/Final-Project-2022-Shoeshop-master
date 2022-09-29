import React, {  Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { cleanErros, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCart.js";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const Products = ( {match} ) => {
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 500000]);
    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
      };

    const { products, loading, error, productsCount, resultPerPage} = 
    useSelector((state) => state.products);

    const keyword = match?.params?.keyword;

    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
      };

    useEffect(() => {
        dispatch(getProduct(keyword, currentPage, price));
    }, [dispatch, keyword, currentPage, price]);

    return (
    <Fragment>
        {loading ? (
        <Loader /> 
        ) : (
            <Fragment>
                <h2 className="productsHeading"> Products </h2>
                <div className="products">
                    {products && 
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </div>

            <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />                
            </div>

        {resultPerPage < productsCount &&                     
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
            }
        </Fragment>
        )}
    </Fragment>
  );
};

export default Products; 