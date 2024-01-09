import React from "react";
import CardsData from "./CardData";
import Filters from "./Filters";
import Pagination from "../components/Pagination";
import "../styles/Main.css"

const Main =() => {
    return (
        <div className="Main__container">
            <Filters />
            <CardsData />
            <Pagination/>
        </div>
    )
}
export default Main;