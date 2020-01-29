import React from 'react';
import './Title.css';
import Typing from 'react-typing-animation';
import 'bootstrap/dist/css/bootstrap.min.css';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Delay from 'react-delay';
import Fade from 'react-reveal/Fade';

import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import Background from '../../images/splash_ibby.jpg';


const Canvas = styled(Paper)`
  background: url(${Background});
  background-size: cover;
`;

const VisibilityWrapper = styled.div`
  background-color: transparent;
  border-radius: ${({ device }) => (device === 'mobile' ? '0px' : '20px')};
  padding: 20px;
  margin-top: -200px;

`;

const Subheader = styled(Typography)`
  font-family: GlacialIndifference !important;
  color: #515151 !important;
  font-size: ${({ device }) => (device === 'mobile' ? '10pt' : '25pt')} !important;
  justify-content: right;
`;

const Landing = styled(Grid).attrs({
  alignItems: ({ device }) => (device === 'mobile' ? 'center' : 'flex-end'),
  container: true,
  justify: 'center',
  direction: 'column',
  textAlign: 'right',
})`
  min-height: 100%;
  z-index: 2;
  padding-right: ${({ device }) => (device === 'mobile' ? '0' : '10%')} !important;
  padding-bottom: ${({ device }) => (device === 'mobile' ? '60%' : 0)} !important;
  background-color: transparent;

  

`;

 
const AnimatedTypingComponent = () => (
  <Typing>
    <h1 class="strokeme">Hi! I'm <span id="ibbytext"><b>Ibby.</b></span></h1>
  </Typing>
);
function Title({device}) {
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
      //   <body>

      //   <div id="header" class="home">

      //       <div class="container">
      //       <div class="header-content">
      //           {/* <h1>I'm <span class="typed"></span></h1>
      //           <p>designer, developeur, photographer</p> */}
      //           <AnimatedTypingComponent />
      //       </div>
      //       </div>
      // </div>
      // </body>

      <Canvas className="section" elevation={0}>
    <Landing device={device}>
      <VisibilityWrapper device={device}>
        {/* <Grid item>
          <Delay wait={400}>
            <Fade>
              <Catalyst device={device} variant="h5" component="h3" align="right">
                <CatalystChevron device={device} src={chevron} alt="Catalyst logo" />
                catalyst
              </Catalyst>
            </Fade>
          </Delay>
        </Grid> */}
        <Grid item style={{textAlign: "right"}}>
          <Delay wait={400}>
            <Fade>
              {/* <Subheader device={device} components="p" align="right">
                hey whatsup you guys.
              </Subheader> */}
              <AnimatedTypingComponent />
              {/* <p>hi</p> */}
            </Fade>
          </Delay>
        </Grid>
      </VisibilityWrapper>
    </Landing>
    </Canvas>
    );
}

export default Title;
