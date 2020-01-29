import React from 'react';
import './World.css';
import pin from '../../images/pushpin.png';
import ReactTooltip from 'react-tooltip'
import buddies from '../../images/BestBuddies.jpg';

const places = [
    {
        title: 'Chile',
        description: "Description of place 1",
        coords: [30,27],
        img: buddies,
    },
    {
        title: 'Nepal',
        description: "Description of place 2",
        coords: [61,15],
        img: buddies,
    },
    {
        title: 'Jordan',
        description: "Description of place 3",
        coords: [51.3,14.8],
        img: buddies,
    },
    {
        title: 'New York',
        description: "Description of place 4",
        coords: [29.5,12.4],
        img: buddies,
    },
    {
        title: 'Blackburn',
        description: "Description of place 5",
        coords: [43.3,9.2],
        img: buddies,
    },
    {
        title: 'Malaysia',
        description: "Description of place 6",
        coords: [66,20],
        img: buddies,
    },
];


function World() {
    return (
        <div className={"world-container"}>
            <div class="intro">
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

                        <ReactTooltip id={"tip " + i} effect={'solid'} className={'custom-tooltip'}>
                            <div id={'tooltip-card'}>
                                <div id={'tooltip-title'}>
                                    {place.title}
                                </div>
                                <div id={'tooltip-description'}>
                                    {place.description}

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
