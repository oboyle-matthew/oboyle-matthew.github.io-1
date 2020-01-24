import React from 'react';
import ReactSwipe from 'react-swipe';
import './Organizations.css';
import buddies from '../../images/BestBuddies.jpg';

function Organizations() {
    const screens = [
        {
            title: "Title 1",
            description: "Longer description 1",
        },
        {
            title: "Title 2",
            description: "Longer description 2",
        },
        {
            title: "Title 3",
            description: "Longer description 3",
        },
        {
            title: "Title 4",
            description: "Longer description 4",
        },
        {
            title: "Title 5",
            description: "Longer description 5",
        },
    ];
    let reactSwipeEl;
    return (
        <div id={"org-container"}>
            <div id={"selector-container"}>
                {screens.map((screen, i) => {
                    return <img id={"selector"} src={buddies} onClick={() => reactSwipeEl.slide(i, 1000)}/>
                })}
            </div>
            <div id={"swipe-container"}>
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{ continuous: true }}
                    ref={el => (reactSwipeEl = el)}
                >
                    {screens.map(screen => {
                        return <div id={"screen-container"}>
                            <h3 id={"screen-title"}>{screen.title}</h3>
                            <div id={"screen-body"}>
                                <p id={"screen-description"}>{screen.description}</p>
                                <img id={"screen-img"} src={buddies}/>

                            </div>
                        </div>
                    })}
                    {/*<div class="pane">PANE 1</div>*/}
                    {/*<div class="pane">PANE 2</div>*/}
                    {/*<div class="pane">PANE 3</div>*/}
                    {/*<div class="pane">PANE 4</div>*/}
                    {/*<div class="pane">PANE 5</div>*/}

                </ReactSwipe>
            </div>
        </div>
    );
}

export default Organizations;