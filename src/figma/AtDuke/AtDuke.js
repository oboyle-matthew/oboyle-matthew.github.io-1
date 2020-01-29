import React from 'react';
import './AtDuke.css';
import cef from '../../images/groups/CEF.png';
import crr from '../../images/groups/CRR.jpg';
import ddsd from '../../images/groups/D-D School Days.jpg';
import trustees from '../../images/groups/Duke Board of Trustees.png';
import life from '../../images/groups/Duke LIFE .png';
import engage from '../../images/groups/duke-engage-footer-logo@2x.png';
import keenan from '../../images/groups/Kenan Institute - RA.png';
import sophomore from '../../images/groups/Sophomore Year Experience.jpg';
import globalEd from '../../images/groups/duke global ed - duke in nyc.png';

import buddies from '../../images/BestBuddies.jpg';
import ibby4yt from '../../images/ibby4yt.jpg';
import splash from '../../images/splash_ibby.jpg';

import ReactSwipe from 'react-swipe';

function AtDuke() {
    let reactSwipeEl;
    const screens = [
        {
            title: "Community Empowerment Fund",
            img: cef,
            description: "CEF for me is not just an organization, its a community of students, staff and members all committed to speaking truth to power, allyship and ensuring that we are all in the fight for economic, social and political justice. I have worked with members on a diverse range of issues from credit reporting to searching for affordable housing. "
        },
        {
            title: "Center for Race Relations",
            img: crr,
            description: "If you’re looking for an Executive Board who are incredible and know how to plan events, get your Butt (Pardon my pun) over to the Centre for Race Relations. From putting the spotlight on the changing NCAA rules for athletes with their phenomenal “Black Bodies, White Entertainment,” event to giving me the space to express my work in the field of racial justice, my work with the CRR has exposed me to the intricacies of the many ways of how race manifests itself at Duke.",
        },
        {
            title: "Duke Durham School Days",
            img: ddsd,
            description: "Organized by Duke’s Office of Durham and Community Affairs, the Duke-Durham School Days Initiative brings over 300 eager middle school kids to Duke to introduce them to the college experience. Specifically targeted to first generation students like me, the day is one of the greatest days of the Fall semester where I am able to inspire students that despite the barriers they face, Duke is an accessible place for them! ",
        },
        {
            title: "Board of Trustees",
            img: trustees,
            description: "I’m the only candidate with the real life experience of sitting in a Boardroom environment, engaging with Young Trustees and working to achieve compromise on issues with stakeholders who share different perspectives than me. I have learnt an incredible amount from being on the Board and have been plugged into important conversations on the strategic future of our university. I know when to step up and voice my concerns in a Boardroom and when to take a step back and learn from my fellow Trustees. Check out some of our meeting notes here.",
        },
        {
            title: "Duke LIFE",
            img: life,
            description: "As Co-President I have been with this organization at every step of the way from when it was starting with only a few members, to the over 100 person group it is currently. We have a new space ~The Living Room~ in Perkins Library (Come to our Housewarming soon!), have hired our first Director of Duke LIFE and have created a directory of Low-Income/First Generation professors! ",
        },
        {
            title: "Duke Engage",
            img: engage,
            description: "Over my Sophomore summer, I had the privilege of participating in a Duke Engage Independent Project in Kuala Lumpur, Malaysia. In Malaysia, I was able to intern with Fugee School, a refugee-led non profit in their Development & Policy Team where I focused on improving economic and social outcomes for refugee families in Malaysia. ",
        },
        {
            title: "Keenan Institute for Ethics",
            img: keenan,
            description: "As an international student, with numerous visa and work study restrictions, getting a job at this university was more difficult than getting in. But I was able to dedicate two years of my life to research that I was so incredibly passionate about - The conflict between freedom of speech and freedom of religion. Through my time working at Duke, I helped advocate for friends and strangers alike, to be given grants by the Financial Aid Office to replace their work-study burdens so they could enjoy a more manageable work-life balance at Duke! ",
        },
        {
            title: "Duke Global Education for Undergrads",
            img: globalEd,
            description: "This past summer alongside my summer internship at PEN America, I participated in the Duke in New York City program where I had the privilege of exploring the Big Apple’s thriving arts, culture and food scene. I discovered my love for political art, russian food and Broadway! I have been committed to ensuring that everyone has access to Duke’s resources and now work as an ambassador for the Duke in NYC program to encourage students from marginalized backgrounds to consider applying! ",
        },
        {
            title: "Sophomore Class President",
            img: sophomore,
            description: 'I’ve not only been committed to the large leadership positions at Duke, but a lot of who I am is my desire to create communities in all the spaces I am a part of. As Sophomore Class President, I was there to build community and to allow people to express who they really are. Some cool events I organized included: Midnight Breakfast, First-Year Dorm Reunions and the Major Madness Fair!',
        }
    ];
    return (
        <div className={"at-duke-container"} id="AtDuke">
            <div class="cut">
                {/* <div class="atduke-title"><h2>hi</h2></div> */}
                <ReactSwipe
                    id={'card-container'}
                    swipeOptions={{ continuous: true }}
                    ref={el => (reactSwipeEl = el)}
                >
                    {screens.map((screen, i) => {
                        return <div id={'card-inner-container'}>
                            <div id={'card-text'}>
                                <div id={'card-title'}>{screen.title}</div>
                                <div id={'card-description'}>{screen.description}</div>
                            </div>
                            <div id={'mid-gap'}/>
                            <div id={'card-img-container'}>
                                <img id={'card-img'} src={screen.img} />
                            </div>
                        </div>
                    })}
                </ReactSwipe>
            </div>
            <div id={'selector-box'}>
                {screens.map((screen, i) => {
                    return <img
                        style={{ position: 'absolute', left: (i % 3) * 10.5 + 'vw', top: Math.floor(i / 3) * 150 + 'px' }}
                        id={"selector-icon"} src={screen.img} onClick={() => reactSwipeEl.slide(i, 1000)} />
                })}
            </div>
            <div id={'below-selector-box'}>
                {screens.map((screen, i) => {
                    return <div id={'selector-icon-container'}>
                        <img
                            id={"selector-icon"} src={screen.img} onClick={() => reactSwipeEl.slide(i, 1000)} />
                    </div>
                })}
            </div>
        </div>
    );
}

export default AtDuke;
