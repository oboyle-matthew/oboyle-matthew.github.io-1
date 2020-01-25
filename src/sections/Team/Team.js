import React from 'react';
import './Team.css';
import buddies from '../../images/BestBuddies.jpg';
import { Container, Row, Col } from 'react-bootstrap';

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
        <Container id="team">
            <Row>
                {people.map(person => {
                    return <Col l={1} md={2} sm={4} id={'person'}>
                        <img id={'person-pic'} src={person.img}/>
                        <p>{person.name}</p>
                    </Col>
                })}
            </Row>
        </Container>
    );
}

export default Team;
