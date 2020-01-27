import React from 'react';
import './World.css';
import pin from '../../images/pushpin.jpg';

function World() {
    const coordinates = [[200, 200], [500,50]];
    return (
        <div className={"world-container"}>
            {coordinates.map(coord => {
                return <img id={'pushpin'} src={pin}
                            style={{left: coord[0], top: coord[1]}}
                />
            })}
            <p>World</p>
        </div>
    );
}

export default World;
