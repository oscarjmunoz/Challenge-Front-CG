import React from "react";
import Navbar from "../components/Navbar";
import Filters from "../containers/Filters";
import Main from "../containers/Main";
import Banner from "../components/Banner";
import Footer from "../components/Footer";


const Home = () => {

    return (
        <>
            <Navbar />
            <Filters />
            <Main />
            <Banner />
            <Footer />
        </>
    );
}
export default Home;