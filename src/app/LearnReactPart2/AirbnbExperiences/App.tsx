import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./components/data";
import './styles.css';

export default function App() {
    const cardData = data.map( item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })
    return(
        <div>
            <div>
                <Navbar />
                <Hero />
            </div>
            <div className="cards-container">
                {cardData}
            </div>
        </div>
    )
}