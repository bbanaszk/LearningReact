import React from "react";
import Image from "next/image";
import star from "/public/images/star.png"
import '../styles.css'
export default function Card(props: any) {
    const banner = props.openSpots == 0 ? "SOLD OUT" : props.location === "Online" ? "ONLINE" : ""
    return (
        <div className="card-div">
            <div className="image-container">
                <Image
                    className="card--image"
                    src={props.coverImg}
                    alt={props.description}
                    style={{
                        marginBottom: 0,
                        maxWidth: "100%",
                        height: "auto"
                    }} />
                {banner !== "" && <div className="badge">{banner}</div>}
            </div>
            <div className="card-star-div">
                <Image
                    className="card--star"
                    src={star}
                    alt="star rating"
                    style={{
                        marginTop: 0,
                        maxWidth: "100%",
                        height: "auto"
                    }} />
                <h6>{props.stats.rating.toFixed(1)}</h6>
                <h5>({props.stats.reviewCount})</h5>
                <span>&#8226;</span>
                <h5>{"USA"}</h5>
            </div>
            <div className="card-star-div-text">
                <h6>{props.title}</h6>
                <div>
                    <h5>From ${props.price} </h5>
                    <h6> / person</h6>
                </div>
            </div>
        </div>
    );
}