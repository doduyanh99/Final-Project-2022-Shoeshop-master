import React, { useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCart.js";
import Slider from "@material-ui/core/Slider";
import Pagination from "react-js-pagination";
import Search from "./Search";

const categories = ["Vans", "Adidas", "Nike", "Sandal"];

const Products = ({ match }) => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState([0, 400000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");

  const { products, loading, productsCount, resultPerPage } = useSelector(
    (state) => state.products
  );
  const [ratings, setRatings] = useState(0);

  const keyword = match?.params?.keyword;
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  useEffect(() => {
    dispatch(getProduct(keyword, currentPage, price,category, ratings ));
  }, [currentPage, dispatch, keyword, price, ratings, category]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
        <Search />
          <h2 className="productsHeading"> Products </h2>
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>

          <div className="filterBox">
            <h3>Categories</h3>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          {
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
        </>
      )}
    </>
  );
};

export default Products;