import React from 'react';
import './Connect.css';
import connect from '../../images/connect_ibby.svg';
import fb from '../../images/fb.svg';
import insta from '../../images/insta.svg';
import join from '../../images/join.svg';

function Connect() {
    return (
        <div className={"connect-container"}>
            <div class="item-connect"><img src={connect}></img></div>
            <div class="item-connect"><a href="https://www.facebook.com"><img src={fb}></img></a></div>
            <div class="item-connect"><a href="https://www.instagram.com"><img src={insta}></img></a></div>
            <div class="item-connect"><a href="https://www.google.com"><img src={join}></img></a></div>

        </div>
    );
}

export default Connect;
