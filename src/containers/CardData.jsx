import React from "react";
import "../styles/CardData.css"
import Cards from "../components/Cards";

const CardsData =() => {
    const cardsData ={
    image: "https://chicks-products.s3.amazonaws.com/155e053f-4de8-4b9c-b105-fffa0376d9c8",
    title : "Infamous Mercenary Bundle",
    icon : "https://chicks-games.s3.amazonaws.com/e169c553-a9a1-45d9-bf71-a67ba12ada93",
    price: "49.07",
    discountedPrice: "55.50",
    description :"The Infamous Mercenary Bundle is the perfect way to show off your skills and style in the Star Wars ."
}

return(
    <div className="CardsData__container">
        <div className="CardsData__items">
        <Cards product={cardsData} />
        <Cards product={cardsData} />
        <Cards product={cardsData} />
        <Cards product={cardsData} />
        <Cards product={cardsData} />
        <Cards product={cardsData} />
        <Cards product={cardsData} />
        <Cards product={cardsData} />
      </div>
    </div>
)
}

export default CardsData;