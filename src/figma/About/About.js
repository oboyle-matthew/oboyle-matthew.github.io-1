import React from 'react';
import './About.css';
import ibby from '../../images/ibby_cutout.png';

function About() {
    return (
        <div className={"about-container"}>
            <div id={"about-ibby"}>About ibby</div>
            <div id={"text-container"}>
                Ibby is cool. Very cool. Very very very very very very very very very very very very very very very very very very very very very cool. Ibby is cool. Very cool. Very very very very very very very very very very very very very very very very very very very very very cool. Ibby is cool. Very cool. Very very very very very very very very very very very very very very very very very very very very very cool. Ibby is cool. Very cool. Very very very very very very very very very very very very very very very very very very very very very cool. Ibby is cool. Very cool. Very very very very very very very very very very very very very very very very very very very very very cool.
            </div>
            <img src={ibby} id={'ibby-cutout'} />
        </div>
    );
}

export default About;
