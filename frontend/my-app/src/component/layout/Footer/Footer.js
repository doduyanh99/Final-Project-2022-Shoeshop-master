import React from "react";
import playStore from "../../../images/Footer/DownloadApp.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>CHECK OUR AWESOME APP</h4>
        <p>Download from Appstore or Googlestore</p>
        <img src={playStore} alt="playstore" />
      </div>

      <div className="midFooter">
        <h1>Shopshoes</h1>
        <p>Caring for your feet is our Honor</p>

        <p>Copyrights 2022 &copy; DuyAnhDo</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/Shopshoes">Instagram</a>
        <a href="http://youtube.com/Shopshoes">Youtube</a>
        <a href="http://instagram.com/Shopshoes">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;