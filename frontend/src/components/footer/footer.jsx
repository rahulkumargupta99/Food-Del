import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";

const footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>"Tomato delivers fresh and tasty meals to your door, straight from local restaurants. Thanks for choosing us to make your mealtime easier and better."</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
            
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-7061859110</li>
                <li>contact@tomato.com</li>
                <li>reply2rgupta@gmail.com</li>
            </ul>
        </div>  
      </div>
      <hr />
      <p className="footer-copyright">
      © 2024 Tomato.com. All Rights Reserved.
      </p>
    </div>
  );
};

export default footer;
