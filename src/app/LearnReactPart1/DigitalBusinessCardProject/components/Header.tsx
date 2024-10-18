import React from 'react';
import Image from "next/image";
import headshot from '../headshot.png';

export default function Header() {
    return(
        <div>
            <Image className="header--image" src={headshot} alt={"Borys's Headshot"}/>
        </div>
    )
}