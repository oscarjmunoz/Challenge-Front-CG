import React from "react";
import Navbar from "../components/Navbar";
import Filters from "../containers/Filters";
import Main from "../containers/Main";


const Home = () => {

    return (
        <>
            <Navbar />
            <Filters />
            <Main />
        </>
    );
}
export default Home;