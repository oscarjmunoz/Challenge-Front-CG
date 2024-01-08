import React from "react";
import filter from "../assets/icons/filter.svg"
import arrowWhite from "../assets/icons/arrow-white.svg"
import "../styles/CardData.css"
import Cards from "../components/Cards";

const CardsData =() => {
    const cardsData ={
    image: "https://chicks-products.s3.amazonaws.com/80ed5e58-b04e-4594-a323-fc0aefbcdfa3",
    title : "Blue Partyhat",
    icon : "https://chicks-games.s3.amazonaws.com/e169c553-a9a1-45d9-bf71-a67ba12ada93",
    price: "450.00",
    discountedPrice: "520.50",
    description :"Lorem ipsum dolor sit amet consetetur sadispscing elitr."
}

return(
    <div className="CardsData__container">
    <div className="CardsData__show-info">Showing 10 of 120</div>
    <button className="filters__filters--target">
        <div>
            <img src={filter} alt="" width="30" height="30" />
            <ruby> All <rp>(</rp><rt>Item Type</rt><rp>)</rp> </ruby>
        </div>
            <img src={arrowWhite} alt="" width="11" height="8" />
    </button>
    <div className="CardsData__items">
                {[...Array(10)].map((_, index) => (
                    <Cards key={index} product={cardsData} />
                ))}
            </div>
    </div>
)
}

export default CardsData;