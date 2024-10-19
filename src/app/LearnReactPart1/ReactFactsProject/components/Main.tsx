import React from 'react';
import logo from "../react2.png";
import Image from "next/image";

export default function Main() {
    return (
        <main>
            <h1 className='main--title'>Fun facts about React</h1>
            <ul className='main--facts'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <Image
                src={logo}
                alt='react logo'
                className='main--icon'
                style={{
                    maxWidth: "100%",
                    height: "auto"
                }} />
        </main>
    );
}