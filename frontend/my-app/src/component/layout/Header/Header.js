import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/Header/Shoeslogo.jpg";
import "./Header.css"


  
  const Header = () => {

    return (
     <div className="HeaderContainer">
      <img src={logo} alt="logo"/>
      <Link to={"/"} className="textLink">HOME</Link>
      <Link to={"/products"} className="textLink">PRODUCTS</Link>
      <Link className="textLink" >ABOUT</Link>
      <Link className="textLink">CONTACT</Link>
     </div>
    ) 
  };
  
  export default Header;