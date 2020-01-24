import React from 'react';
import './Title.css';
import buddies from '../../images/BestBuddies.jpg';

function Title() {
    return (
        <div id="title">
            {/*<img src={buddies} style={{width: 500, height: 400}} />*/}
            <h1 id={"ibby"}>Ibby</h1>
            <p id={"yt"}>For Young Trustee</p>
            <img id={"first-image"} src={buddies} />
            <div id={"values"}>
                <p>Value 1</p>
                <p>Value 2</p>
                <p>Value 3</p>
            </div>
        </div>
    );
}

export default Title;
