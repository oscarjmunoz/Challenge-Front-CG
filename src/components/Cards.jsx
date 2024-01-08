import React from "react";
import "../styles/Card.css";

import cart from "../assets/icons/cart.svg"

const CardsItem = ({ product }) => {
  const { image, title, icon, price, discountedPrice, description } = product;
  return (
    <div className="Card__container">
      <div className="Card__status">
        <div>
          <span>◉ ON SALE</span>
          <span>In stock</span>
        </div>
        <div>
          <input type="number" value={1} />
        </div>
      </div>
      <div className="Card__image">
        <img src={image} alt="" width="56" height="56" />
      </div>
      <div className="Card__title">
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <img src={icon} alt="" width="25" height="25" />
        </div>
      </div>
      <div className="Card__info">
        <div className="productCard__info--price">
          <h3>$ {price}</h3>
        </div>
        <div className="Card__info--price-del">
          <h3>$ {discountedPrice}</h3>
        </div>
        <div className="Card__info--description">
          <p>{description}</p>
        </div>
      </div>
      <div className="Card__buttons">
        <button className="Card__buttons--details">
          <span>DETAILS</span>
        </button>
        <button className="Card__buttons--addToCard">
          <span>Add</span>
          <div>
            <img src={cart} alt="" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default CardsItem;