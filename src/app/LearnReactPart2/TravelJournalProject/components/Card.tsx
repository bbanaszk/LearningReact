import React from "react";
import Pin from '@mui/icons-material/Place';
import '../styles.css'
import Image from "next/legacy/image";
export default function Card(props: any) {
    return (
        <div className='card--body'>
            <div className="card--layout">
                <div className="card--image-container">
                    <Image className="card--image" src={props.imageUrl} alt={props.title}/>
                </div>
                <div className="card--content">
                    <div className="card--maplink">
                        <div className="card--maplink-pin">
                            <Pin style={{fontSize: '12px', color: '#F55A5A'}}/>
                            <h5>{props.location}</h5>
                        </div>
                        <h4><a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a></h4>
                    </div>
                    <h1 className="h1--title">{props.title}</h1>
                    <div className="card--description">
                        <h4>{props.startDate}  -  {props.endDate}</h4>
                        <h5>{props.description}</h5>
                    </div>
                </div>
            </div>
            <hr />
        </div>

    )
}