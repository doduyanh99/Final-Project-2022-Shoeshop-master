import React from "react";
import logo from "../../../images/Header/Shoeslogo.jpg";
import "./Header.css"


  
  const Header = () => {

    return (
     <div className="HeaderContainer">
      <img src={logo} className=""/>
      <p>HOME</p>
      <p>Product</p>
      <p>About</p>
      <p>Contact</p>
     </div>
    ) 
  };
  
  export default Header;