import React from 'react';
import './Values.css';
import buddies from '../../images/BestBuddies.jpg';

function Values() {
    return (
        <div id={"values-container"}>
            <div id={"why-ibby"}>
                <h1 id={"why-ibby-text"}>Why Ibby?</h1>
            </div>
            <div id={"all-values"}>
                <div id={"value"}>
                    <h1 id={"value-name"}>Community</h1>
                    <p id={"value-descriptino"}>Here is a description for the value</p>
                </div>
                <div id={"value"}>
                    <h1 id={"value-name"}>Opportunity</h1>
                    <p id={"value-descriptino"}>Here is a description for the value</p>
                </div>
                <div id={"value"}>
                    <h1 id={"value-name"}>Experience</h1>
                    <p id={"value-descriptino"}>Here is a description for the value</p>
                </div>
            </div>
        </div>
    );
}

export default Values;
