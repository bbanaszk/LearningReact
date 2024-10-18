import React from "react";
import ContactCard from './components/ContactCard';
import cat1 from '/public/images/mr-whiskerson.png';
import cat2 from '/public/images/fluffykins.png';
import cat3 from '/public/images/felix.png';
import cat4 from '/public/images/pumpkin.png';

const contacts = [
    { img: cat1, description: "Cat1", name: "Mr. Whiskerson", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow" },
    { img: cat2, description: "Cat2", name: "Fluffykins", phone: "(212) 555-2345", email: "fluff@me.com" },
    { img: cat3, description: "Cat3", name: "Pumpkin", phone: "(212) 555-4567", email: "thecat@hotmail.com" },
    { img: cat4, description: "Cat4", name: "Felix", phone: "(0800) CAT KING", email: "pumpkin@scrimba.com" }
];
export default function App() {
    return (
        <div className='contact-card-container'>
            {contacts.map(({img, description, name, phone, email}, index) => (
                <ContactCard
                    key={index}
                    img={img}
                    description={description}
                    name={name}
                    phone={phone}
                    email={email}
                />
            ))}
        </div>
    )
}