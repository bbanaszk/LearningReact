import React from "react";
import Image from "next/image";
import photogrid from "/public/images/photo-grid.png";
import '../styles.css'
export default function Hero() {
    return(
        <div className="hero-div">
            <Image className="hero-grid" src={photogrid} alt="photogrid"/>
            <h1>Online Experiences</h1>
            <h5>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</h5>
        </div>
    )
}