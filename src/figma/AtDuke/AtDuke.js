import React from 'react';
import './AtDuke.css';
import org from '../../images/org.png';
import buddies from '../../images/BestBuddies.jpg';
import ibby4yt from '../../images/ibby4yt.jpg';
import splash from '../../images/splash_ibby.jpg';

import ReactSwipe from 'react-swipe';

function AtDuke() {
    let reactSwipeEl;
    const screens = [
        {
            title: "Title 1",
            img: org,
            description: "Ibby is involved in this organization. It is so so so sos sos os so cool. Here's some more text. Go Ibby! Ibby is involved in this organization. It is so so so sos sos os so cool. Here's some more text. Go Ibby! Ibby is involved in this organization. It is so so so sos sos os so cool. Here's some more text. Go Ibby!"
        },
        {
            title: "Title 2",
            img: buddies,
            description: "Longer description 2",
        },
        {
            title: "Title 3",
            img: ibby4yt,
            description: "Longer description 3",
        },
        {
            title: "Title 4",
            img: splash,
            description: "Longer description 4",
        },
        {
            title: "Title 5",
            img: org,
            description: "Longer description 5",
        },
        {
            title: "Title 3",
            img: buddies,
            description: "Longer description 3",
        },
        {
            title: "Title 4",
            img: ibby4yt,
            description: "Longer description 4",
        },
        {
            title: "Title 5",
            img: splash,
            description: "Longer description 5",
        },
    ];
    return (
        <div className={"at-duke-container"}>
            <div class="cut">
            <ReactSwipe
                id={'card-container'}
                swipeOptions={{ continuous: true }}
                ref={el => (reactSwipeEl = el)}
            >
                {screens.map((screen, i) => {
                    return <div>
                        <img id={'card-img'} src={screen.img} />
                        <div id={'card-title'}>{screen.title}</div>
                        <div id={'card-description'}>{screen.description}</div>
                    </div>
                })}
            </ReactSwipe>
            </div>
            <div id={'selector-box'}>
                {screens.map((screen, i) => {
                    return <img
                        style={{position: 'absolute', left: (i%3) * 10.5 + 'vw', top: Math.floor(i/3) * 150 + 'px'}}
                        id={"selector-icon"} src={screen.img} onClick={() => reactSwipeEl.slide(i, 1000)}/>
                })}
            </div>
            <div id={'below-selector-box'}>
                {screens.map((screen, i) => {
                    return <div id={'selector-icon-container'}>
                        <img
                            id={"selector-icon"} src={screen.img} onClick={() => reactSwipeEl.slide(i, 1000)}/>
                    </div>
                })}
            </div>
        </div>
    );
}

export default AtDuke;
