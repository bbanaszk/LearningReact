import React from 'react';
import Image from "next/legacy/image";
import meme from '/public/images/troll-face.png';
import '../styles.css';

export default function Header() {
    return(
        <nav className='nav--header'>
            <div className='nav--contents'>
                <Image className='nav--contents-img' src={meme} alt="troll face"/>
                <h1>Meme Generator</h1>
            </div>
            <div className='nav--projectname'>
                <h1>React Course - Project 3</h1>
            </div>
        </nav>
    )
}