import React from 'react';
import './Title.css';
import ibby from '../../images/ibby_cutout.png';
import Typing from 'react-typing-animation';

function Title() {
    return (
        <div className={"title-container"}>
            <Typing>
                <div id="typing-title">Hi, I'm Ibby</div>
            </Typing>
            <div id={'name-rectangle'}/>

        </div>
    );
}

export default Title;
