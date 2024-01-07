import React from "react";
import "../styles/CardData.css"
import Cards from "../components/Cards";

const CardsData =() => {
    const cardsData ={
    image: "https://chicks-products.s3.amazonaws.com/80ed5e58-b04e-4594-a323-fc0aefbcdfa3",
    title : "",
    icon : "https://chicks-games.s3.amazonaws.com/e169c553-a9a1-45d9-bf71-a67ba12ada93",
    price: "450.00",
    discountedPrice: "520.50",
    description :"Lorem ipsum dolor sit amet consetetur sadispscing elitr."
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
        <Cards product={cardsData} />
        <Cards product={cardsData} />
        </div>
    </div>
)
}

export default CardsData;