import React from "react";
import "../styles/Filters.css"

import arrowWhite from "../assets/icons/arrow-white.svg";
import item from "../assets/icons/item-default.svg";
import search from "../assets/icons/search.svg";
import itemBag from "../assets/icons/item-bag.svg";
import feather from "../assets/icons/feather.svg";

const Filters = () => {
    return (
    
    <div className="filters__containers">
      
      <div className="filters__filters">
        <button className="filters__filters--game">
          <div>
            <img src={item} alt="" width="30" height="30" />
            <span>Select a Game</span>
          </div>
          <img src={arrowWhite} alt="" width="11" height="8" />
        </button>
      </div>
      <div className="filters__bar">
        <img className="filters__bar--image" src={search} alt="" width="24" height="24" />
        <input className="filters__bar--input" type="text" placeholder="Search" />
      </div>
      <div className="filters__filters">
        <button className="filters__filters--price">
          <div>
            <img src={itemBag} alt="" width="30" height="30" />
            
            <ruby> All <rp>(</rp><rt>Price</rt><rp>)</rp> </ruby>
          </div>
          <img src={arrowWhite} alt="" width="11" height="8" />
        </button>
        <button className="filters__filters--target">
          <div>
            <img src={feather} alt="" width="30" height="30" />
            <ruby> All <rp>(</rp><rt>Item Type</rt><rp>)</rp> </ruby>
          </div>
          <img src={arrowWhite} alt="" width="11" height="8" />
        </button>
      </div>
    </div>
    
    )
  };
  
  export default Filters;