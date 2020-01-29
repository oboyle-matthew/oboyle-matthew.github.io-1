import React from 'react';
import './World.css';
import pin from '../../images/pushpin.png';
import ReactTooltip from 'react-tooltip'
import buddies from '../../images/BestBuddies.jpg';

const places = [
    {
        title: 'Title 1',
        description: "Description of place 1",
        coords: [20,40],
        img: buddies,
    },
    {
        title: 'Title 2',
        description: "Description of place 2",
        coords: [30,10],
        img: buddies,
    },
    {
        title: 'Title 3',
        description: "Description of place 3",
        coords: [70,60],
        img: buddies,
    },
    {
        title: 'Title 4',
        description: "Description of place 4",
        coords: [35,10],
        img: buddies,
    },
    {
        title: 'Title 5',
        description: "Description of place 5",
        coords: [70,10],
        img: buddies,
    },
    {
        title: 'Title 6',
        description: "Description of place 6",
        coords: [50,50],
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
                        <img className={'face'} id={'pushpin'} src={pin}
                                style={{left: place.coords[0] + "vw", top: (0.35 * place.coords[1]) + "vw"}}
                            data-tip data-for={"tip " + i}
                        />
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
