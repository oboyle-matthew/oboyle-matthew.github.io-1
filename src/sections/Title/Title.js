import React from 'react';
import './Title.css';
import Typing from 'react-typing-animation';
import 'bootstrap/dist/css/bootstrap.min.css';

 
const AnimatedTypingComponent = () => (
  <Typing>
    <h1 class="strokeme">Hi! I'm <span id="ibbytext"><b>Ibby.</b></span></h1>
  </Typing>
);
function Title() {
    return (
        // <div id="title">
        //     {/*<img src={buddies} style={{width: 500, height: 400}} />*/}
        //     <AnimatedTypingComponent />
        //     {/* <img id={"first-image"} src={buddies} /> */}
        //     {/* <div id={"values"}>
        //         <p>Value 1</p>
        //         <p>Value 2</p>
        //         <p>Value 3</p>
        //     </div> */}
        // </div>
        <body>

        <div id="header" class="home">

            <div class="container">
            <div class="header-content">
                {/* <h1>I'm <span class="typed"></span></h1>
                <p>designer, developeur, photographer</p> */}
                <AnimatedTypingComponent />
                <ul class="list-unstyled list-social">
                <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                <li><a href="#"><i class="ion-social-instagram"></i></a></li>
                <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                <li><a href="#"><i class="ion-social-tumblr"></i></a></li>
                <li><a href="#"><i class="ion-social-dribbble"></i></a></li>
                </ul>
            </div>
            </div>
      </div>
      </body>
    );
}

export default Title;
