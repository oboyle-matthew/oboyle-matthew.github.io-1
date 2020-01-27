import React from 'react';
import './World.css';
import pin from '../../images/pushpin.png';
import ReactTooltip from 'react-tooltip'
import buddies from '../../images/BestBuddies.jpg';

function WorldTilte() {
    return (
        <div id={'world-title'}>Ibby Around the World</div>
    )
}

function WorldMap() {
    const places = [
        {
            title: 'Title 1',
            description: "Description of place 1",
            coords: [250,200],
            img: buddies,
        },
        {
            title: 'Title 2',
            description: "Description of place 2",
            coords: [560,-10],
            img: buddies,
        },
        {
            title: 'Title 3',
            description: "Description of place 3",
            coords: [650,170],
            img: buddies,
        },
    ];
    return (
        <div className={"world-container"}>
            {places.map((place, i) => {
                return <div>
                    <img className={'face'} id={'pushpin'} src={pin}
                            style={{left: place.coords[0], top: place.coords[1]}}
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
    );
}

function World() {
    return (
        <div>
            {WorldTilte()}
            {WorldMap()}
        </div>
    )
}

export default World;
