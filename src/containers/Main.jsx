import React from "react";
import CardsData from "./CardData";
import Filters from "./Filters";
import "../styles/Main.css"

const Main =() => {
    return (
        <div className="Main__container">
            <Filters />
            <CardsData />

        </div>
    )
}
export default Main;