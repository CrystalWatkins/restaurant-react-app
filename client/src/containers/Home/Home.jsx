import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <H1> *Emoji here* Hot Restaurant</H1>
            <H3>Book your seat before they are all gone!</H3>
            <button>View Tables</button>
            <button>Make Reservation</button>
        </div>
    );
};

export default Home;