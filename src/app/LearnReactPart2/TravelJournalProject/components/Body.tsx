import React from "react";
import Card from "./Card";
import data from './data';

export default function Body() {
    const locations = data.map( location => {
        return(
            <Card 
                key={location.location}
                {...location}
            />
            
        )
    })
    return (
        <div>
            {locations}
        </div>
    )
}