import React from "react";
import Image from "next/image";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import '../styles.css';

export default function ContactCard({ img, description, name, phone, email } : any) {
    return (
        <div className="contact-card">
            <Image
                className="images"
                src={img}
                alt={description}
                style={{
                    maxWidth: "100%",
                    height: "auto"
                }} />
            <div className="info-group">
                <h1>{name}</h1>
                <h3><PhoneIcon style={{fontSize: '18px', marginRight: '10px'}}/>{phone}</h3>
                <h3><EmailIcon style={{fontSize: '18px', marginRight: '10px'}}/>{email}</h3>
            </div>
        </div>
    );
}
