import React from "react";
import "../styles/Footer.css";

import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";
import twitter from "../assets/img/twitter.svg";
import discord from "../assets/img/discord.svg";
import logo from "../assets/img/chicks-logo-large.svg";
import startFull from "../assets/icons/star_full.svg";
import stars from "../assets/icons/stars.svg";

const Footer = () =>  {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__mediaSocial">
          <a href="" className="footer__mediaSocial--link">
            <img src={facebook} alt="" />
          </a>
          <a href="" className="footer__mediaSocial--link">
            <img src={instagram} alt="" />
          </a>
          <a href="" className="footer__mediaSocial--link">
            <img src={twitter} alt="" />
          </a>
          <a href="" className="footer__mediaSocial--link">
            <img src={discord} alt="" />
          </a>
        </div>
        <div className="footer__links">
          <div className="footer__links--logo">
            <img src={logo} alt="" />
            <p>support@chicksgold.com</p>
          </div>
          <div className="footer__links--chicksGold">
            <h2>Chicks Gold</h2>
            <a href="#">Games</a>
            <a href="#">About us</a>
            <a href="#">Blog</a>
            <a href="#">Sitemap</a>
          </div>
          <div className="footer__links--support">
          <h2>Support</h2>
            <a href="#">Contact Us</a>
            <a href="#">FAQ</a>
          </div>
          <div className="footer__links--legal">
          <h2>Legal</h2>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Copyright Policy</a>        
          </div>
          <div className="footer__links--trustpilot">
            <div className="footer__links--trustpilot__info">
              <img src={stars} alt="" />
            <a href="#">Trustpilot Reviews</a>
              
              
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <p>© 2017 - 2023 Chicksgold.com. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
};

export default Footer; 