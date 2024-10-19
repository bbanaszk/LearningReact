import React from 'react';
import Image from "next/legacy/image";
import logo from "../react.png";
import './styles.css'

export default function Navbar() {
    return (
        <nav>
            <Image src={logo} alt='react logo' className='nav--icon'/>
            <h3 className='nav--logo_text'>ReactFacts</h3>
            <h4 className='nav--title' >React Course - Project 1</h4>
        </nav>
    )
}

// <div>
//     <div className='container'>
//         <Image
//             src={logo}
//             alt={'react logo'}
//             style={{
//                 width: '28.93px',
//                 height: '28.93px',
//             }}
//         />
//         <Typography
//             style={{
//                 fontSize: "22.25px",
//                 fontStyle: 'bold',
//                 // letterSpacing: '-5%',
//                 lineHeight: "auto",
//                 color: '#61DAFB',
//                 textAlign: "left"
//             }}>ReactFacts</Typography>
//         <Typography
//             style={{
//                 fontSize: "16px",
//                 fontStyle: 'semi-bold',
//                 // lineHeight:"26.93px",
//                 color: '#DEEBF8',
//                 marginLeft: 'auto',
//                 paddingRight: '25px',
//                 textAlign: "right"
//             }}>React Course - Project 1</Typography>
//     </div>
// </div>