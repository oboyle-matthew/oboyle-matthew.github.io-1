import React from 'react';
import './WhyYoungTrustee.css';
import why_yt_graphic from '../../images/why-yt-graphic.svg';

function WhyYoungTrustee() {
    return (
        <div id={"why-container"}>
            <div id={"left-background"}>
                <img src={why_yt_graphic} class="whyyt"></img>
            </div>
            <div class="three-container">
                <div class="descriptionitem">
                    <div className="value-title" id={"community-title"}>COMMUNITY</div>
                    <div class="row">
                        <div className="value-description" id={"description"}>
                            Ibby is cool. Very cool. Very very very very very very very very very very very very very very very very very very very very very cool. Ibby is cool.
                        </div>
                    </div>
                </div>
                <div class="descriptionitem">
                    <div className="value-title" id={"opportunity-title"}>OPPORTUNITY</div>
                    <div class="row">
                        <div className="value-description" id={"description"}>
                            Ibby is cool. Very cool. Very very very very very very very very very very very very very very very very very very very very very cool. Ibby is cool.
                    </div>
                    </div>
                </div>
                <div class="descriptionitem">
                    <div className="value-title" id={"experience-title"}>EXPERIENCE</div>
                    <div class="row">
                        <div className="value-description" id={"description"}>
                            Ibby is cool. Very cool. Very very very very very very very very very very very very very very very very very very very very very cool. Ibby is cool.
                    </div>
                    </div>
                </div>





            </div>






        </div>
    );
}

export default WhyYoungTrustee;
