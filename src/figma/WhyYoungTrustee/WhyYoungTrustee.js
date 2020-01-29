import React from 'react';
import './WhyYoungTrustee.css';
import why_yt_graphic from '../../images/why-yt-graphic.svg';

function WhyYoungTrustee() {
    return (
        <div id={"WhyYT"}>
            <div id={"left-background"}>
                <img src={why_yt_graphic} class="whyyt"></img>
            </div>
            <div class="three-container">
                <div class="descriptionitem">
                    <div className="value-title" id={"community-title"}>COMMUNITY</div>
                    <div class="row">
                        <div className="value-description" id={"description"}>
                        My first and foremost priority at Duke is the continuous investment in building diverse and welcoming communities. Every step of the way I have advocated for the Duke and Durham community from being on the Centre for Race Relations Executive Board to assisting with the Duke-Durham School Days Initiative. 
                        </div>
                    </div>
                </div>
                <div class="descriptionitem">
                    <div className="value-title" id={"opportunity-title"}>OPPORTUNITY</div>
                    <div class="row">
                        <div className="value-description" id={"description"}>
                        Ensuring that every student has equal opportunities to access all of Duke’s resources regardless of their background is one of the core tenets of my work as the co-President of Duke LIFE. Serving as a You @ Duke facilitator during Orientation Week was also because I believe every Duke student, from the first day they step on this campus should be considering how they can improve the experience of every member of our Duke family.
                    </div>
                    </div>
                </div>
                <div class="descriptionitem">
                    <div className="value-title" id={"experience-title"}>EXPERIENCE</div>
                    <div class="row">
                        <div className="value-description" id={"description"}>
                        Being able to sit on the Undergraduate Education Committee of the Board of Trustees this past year has been one of the greatest privileges of my time at Duke. I have learned how to confidently voice my understanding of the student experience and advocate for increased awareness of students' needs at the highest level of decision making at our university.
                    </div>
                    </div>
                </div>





            </div>






        </div>
    );
}

export default WhyYoungTrustee;
