import React from 'react';
import './About.css';
import buddies from '../../images/BestBuddies.jpg';

function About() {
    return (
        <div id="about">
            <h1 id={"hi"}>Hi, I'm Ibby!</h1>
            <div id="side-by-side">
                <img id="pic" src={buddies} />
                <div id="about-box">
                    <p>iugdfigdfgibfdgidgidf</p>
                </div>
            </div>
        </div>
    );
}

export default About;
