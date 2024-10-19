import React from "react";
import Image from "next/image";
import logo from "/public/images/airbnb-logo.png";
import '../styles.css'
export default function Navbar() {
    return (
        <nav>
            <Image
                className="nav--logo"
                src={logo}
                alt="Airbnb logo"
                />
        </nav>
    );
}