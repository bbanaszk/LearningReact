import React from "react";
import Globe from "@mui/icons-material/Public";
import '../styles.css'
export default function Navbar() {
    return (
        <nav className='nav--body'>
            <Globe style={{fontSize:'30px', marginRight: '5px'}}/>
            <h4>my travel journal.</h4>
        </nav>
    )
}