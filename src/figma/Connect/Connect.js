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
            <div class="item-connect"><a target={"_blank"} href="https://www.facebook.com/ibby4yt"><img src={fb}></img></a></div>
            <div class="item-connect"><a target={"_blank"}  href="https://www.instagram.com/ib4yt/"><img src={insta}></img></a></div>
            <div class="item-connect"><a target={"_blank"}  href="https://forms.gle/KC2a1oUCupvp4XEG6"><img src={join}></img></a></div>

        </div>
    );
}

export default Connect;
