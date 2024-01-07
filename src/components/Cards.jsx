import React from "react";
import "../styles/ProductCard.css"

import cart from "../assets/icons/cart.svg"

const CardsItem = ({ product }) => {
  const { image, title, icon, price,discountedPrice, description } = product

  return(
    <div className="productCard__container">
      <div className="productCard__status">
        <div>
          <span>◉ ON SALE</span>
          <span>In stock</span>
        </div>
        <div>
          <input type="number" value="1" readOnly />
        </div>
      </div>

      <div className="productCard__image">
        <img src={image} alt="" width="56" height="56" />
      </div>

      <div className="productCard__title">
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <img src={icon} alt="" width="25" height="25" />
        </div>
      </div>

      <div className="productCard__info">
        <div className="productCard__info--price">
          <h3>$ {price}</h3>
        </div>
        <div className="productCard__info--price-del">
          <h3>$ {discountedPrice}</h3>
        </div>
        <div className="productCard__info--description">
          <p>{description}</p>
        </div>
      </div>

      <div className="productCard__buttons">
        <button className="productCard__buttons--details">
          <span>Details</span>
        </button>
        <button className="productCard__buttons--addToCard">
          <span>Add</span>
          <div>
            <img src={cart} alt="" />
          </div>
        </button>
      </div>

    </div>
  )
}

export default CardsItem;