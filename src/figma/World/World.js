import React from 'react';
import './World.css';
import pin from '../../images/pushpin.png';
import ReactTooltip from 'react-tooltip'
import nola from '../../images/world/nola.png';
import chile from '../../images/world/chile.jpg';
import nepal from '../../images/world/nepal.jpg';
import jordan from '../../images/world/Jordan.jpg';
import nyc from '../../images/world/nyc.jpg';
import malaysia from '../../images/world/malaysia.png';

const places = [
    {
        title: 'Chile',
        description: "Spent a month in Chile as a researcher, advocate and student. I learnt about Chile’s troublesome past but also sat with leaders of the future, where they shared their hopes and dreams of a more equal Chile with me!",
        coords: [30,27],
        img: chile,
    },
    {
        title: 'Nepal',
        description: "In Nepal, I worked with class, race and gender based organizations to learn more about the troubled history of these identities both in Nepal and across South Asia. I still speak to my host family from Nepal regularly!  ",
        coords: [61,15],
        img: nepal,
    },
    {
        title: 'Jordan',
        description: "Jordan was the perfect way to wrap up my trip, where I learnt more about the dynamic nature of the Middle East and the current fight for further rights across the Arab world. I was able to see Amman, Petra, Wadi Rum and many more places that were of such cultural, religious and historical importance!",
        coords: [51.3,14.8],
        img: jordan,
    },
    {
        title: 'New York',
        description: "I got to work in the most incredible city in the world this past summer where I served as an intern for PEN America, a freedom of information think tank dedicated to protecting ideas of freedom of the press and freedom of speech. ",
        coords: [29.5,12.4],
        img: nyc,
    },
    {
        title: 'New Orleans',
        description: "Worked as a Management & Development Policy intern tasked with improving educational resources at a work skills empowerment organization for at risk youth in Central City, New Orleans! ",
        coords: [26.2,14.9],
        img: nola,
    },
    {
        title: 'Malaysia',
        description: "Was able to serve Fugee School in Malaysia as a Refugee policy intern in their Development team and tasked with innovating aspects of their social empowerment schemes and improving access to opportunities for refugee youth.  ",
        coords: [66,20],
        img: malaysia,
    },
];


function World() {
    return (
        <div className={"world-container"} id="World">
            <div class="intro" id={'world-title'}>
                <h2>Ibby Around the World</h2>
            </div>
            <div class="map-container">
                {places.map((place, i) => {
                    return <div>
                        <div id={'pushpin-container'}>
                            <img className={'face'} id={'pushpin'} src={pin}
                                 style={{left: place.coords[0] + "vw", top: place.coords[1] + "vw"}}
                                 data-tip data-for={"tip " + i}
                            />
                        </div>

                        <ReactTooltip id={"tip " + i} effect={'solid'} className={'custom-tooltip'} scrollHide={false}>
                            <div id={'tooltip-card'}>
                                <div id={'tooltip-text'}>
                                    <div id={'tooltip-title'}>
                                        {place.title}
                                    </div>
                                    <div id={'tooltip-description'}>
                                        {place.description}
                                    </div>
                                </div>
                                <img src={place.img} id={'tooltip-image'}/>
                            </div>
                        </ReactTooltip>
                    </div>
                })}
            </div>
            
        </div>
    )
}

export default World;
