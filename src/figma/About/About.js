import React from 'react';
import './About.css';
import ibby from '../../images/ibby-export.png';
import sig from '../../images/signature.svg';

function About() {
    return (
        <div className={"about-container"} id="About">
            {/*
            */}

            <div class="white-area">
                <img src={ibby} id={'ibby-cutout'} />
            </div>
            <div class="beige-area">
                <div id={"about-ibby"}>About Ibby</div>

                <div class="row">
                <div id={"text-container"}>
                <p>Hello my fellow Dukies! </p>

<p>I want to begin by saying that my journey to Duke was unconventional. Duke was not made for people like me. However, even after Duke had thrown so many barriers in my way, from a poor financial aid package, to engaging in Islamophobic sentiments I have persisted and tried to ensure that in every action I take, I am making this university a better place for students now and in the future.</p> 

<p>From serving as the co-president of Duke Low Income-First Generation students I have helped build a thriving community of hundreds of students that now have a dedicated campus space. I have mentored low-income students in Durham through the Duke-Durham School Days Initiative, and I have been an advocate for the Community Empowerment Fund to help Durham residents strive for economic justice.</p>

<p>I’m the only candidate to sit on a Board of Trustees Committee - The Undergraduate Education Committee - where I actively lobby the Trustees to consider how their decisions impact students on the ground. </p>

<p>As Young Trustee I guarantee to you that I will never waiver in my dedication to ensuring that in every conversation we have, we consider the voices of those not present at the table and I will make it my daily mission to leave this university in a better state than when I first came here. </p>
 
<p>Join me in creating a more equitable and inclusive Duke, from the ground up! </p>

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
