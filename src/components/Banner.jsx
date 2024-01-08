import React from "react";
import "../styles/Banner.css"; 

import visa from "../assets/img/visa.svg";
import masterCard from "../assets/img/mastercard.svg";
import amex from "../assets/img/amex.svg";
import skrill from "../assets/img/skrill.svg";
import cripto from "../assets/img/crypto.svg";

const Banner = () => {
  const paymentImages = [visa, masterCard, amex, skrill, cripto];
  return (
    <div className="banner__container">
      <div>
        <div className="banner__payments">
          <div className="banner__payments--images">
            {paymentImages.map((image, index) => (
              <img key={index} src={image} alt="" />
            ))}
          </div>
          <div className="banner__payments--button">
            <button>
              <span>and 50+ more</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;