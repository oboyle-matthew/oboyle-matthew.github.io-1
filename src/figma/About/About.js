import React from 'react';
import './About.css';
import ibby from '../../images/ibby-export.png';
import sig from '../../images/signature.svg';

function About() {
    return (
        <div className={"about-container"}>
            {/* <div id={"about-ibby"}>About ibby</div>
            */}

            <div class="white-area">
                <img src={ibby} id={'ibby-cutout'} />
            </div>
            <div class="beige-area">
                <div class="row">
                <div id={"text-container"}>
                Ibby is cool. Very cool. Very very very very very very very very very very very very very very very very very very very very very cool. Ibby is cool. Very cool. Very very very very very very very very very very very very very very very very very very very very very cool. Ibby is cool. Very cool. Very very very very very very very very very very very very very very very very very very very very very cool. Ibby is cool. Very cool. Very very very very very very very very very very very very very very very very very very very very very cool. Ibby is cool. Very cool. Very very very very very very very very very very very very very very very very very very very very very cool.
    </div> 
                </div>
                <div class="row2">
                    <img src={sig}></img>
                </div>

            </div>
        </div>
    );
}

export default About;
