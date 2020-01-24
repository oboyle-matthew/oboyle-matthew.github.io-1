import React from 'react';
import './Team.css';
import buddies from '../../images/BestBuddies.jpg';

function Team() {
    const people = [
        {name: "Matthew O'Boyle", img: buddies},
        {name: "Feroze Mohideen", img: buddies},
        {name: "Feroze Mohideen", img: buddies},
        {name: "Feroze Mohideen", img: buddies},
        {name: "Feroze Mohideen", img: buddies},
        {name: "Feroze Mohideen", img: buddies},
        {name: "Feroze Mohideen", img: buddies},
        {name: "Feroze Mohideen", img: buddies},

    ];
    return (
        <div id="team">
            <ul>
            {people.map(person => {
                return <div id={"person"}>
                    <img id={"person-pic"} src={person.img} />
                    <p id={"person-name"}>{person.name}</p>
                </div>
            })}
            </ul>
        </div>
    );
}

export default Team;
