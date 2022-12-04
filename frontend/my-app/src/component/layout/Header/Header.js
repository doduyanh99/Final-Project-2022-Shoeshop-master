import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../../images/Header/Shoeslogo.jpg";
import Search from "../../Product/Search";
import "./Header.css";
import UserOptions from "./UserOptions";

const Header = ({ user, isAuthenticated }) => {
  let history = useHistory();
  return (
    <>
      <div className="header">
        <div className="HeaderContainer">
          <img src={logo} alt="logo" onClick={() => history.push("/") } />
          <Link to={"/"} className="textLink">
            HOME
          </Link>
          <Link to={"/products"} className="textLink">
            PRODUCTS
          </Link>
          <Link className="textLink">ABOUT</Link>
          <Link className="textLink">CONTACT</Link>
        </div>
        <div className="logoRight">
        {isAuthenticated && <UserOptions user={user} />}
        </div>
      </div>
      <Search />
    </>
  );
};

export default Header;
