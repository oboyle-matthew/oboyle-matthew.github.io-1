import React from 'react';
import styled from 'styled-components';
import Title from './sections/Title/Title';
import About from './sections/About/About';
import Team from './sections/Team/Team';
import Values from './sections/Values/Values';
import Organizations from './sections/Organizations/Organizations';
import Quotes from './sections/Quotes/Quotes';

import ReactFullpage from '@fullpage/react-fullpage';
import PropTypes from 'prop-types';
import Section from './Section';

const sectionList = ['home', 'good', 'evening', 'everybody'];

const Home = ({ device }) => (
    <ReactFullpage
      navigation
      autoScrolling={device === 'desktop'}
      fitToSection={device === 'desktop'}
      sectionsColor={['#ffffff', '#6aa84f', '#6aa84f', '#6aa84f', '#ebeeee', '#ebeeee']}
      navigationTooltips={sectionList}
      render={() => (
        <div>
          {/* <LandingSplash device={device} /> */}
          {/* <Title /> */}
        <Title device={device} />
          {/* <div className="section">
            <Section
              device={device}
            //   titleWhite="mission statement"
            //   titlePink=";"
              bodyComponent={(
                // <BodyWrapper device={device}>
                //   <Blurbs section="who we are" />
                // </BodyWrapper>
                <Title />
  )}
              widthRatio={0}
            />
          </div> */}
  
          <div className="section">
            <Section
              device={device}
              titleWhite="what we "
              titlePink="do()"
              bodyComponent={(
                // <BodyWrapper device={device}>
                //   <Blurbs section="what we do" />
                // </BodyWrapper>
                <About />

  )}
              widthRatio={0}
            />
          </div>
  
          {/* <Members device={device} /> */}
           {/* <Title /> */}

  

          <div className="section">
            <Section
              device={device}
              titleWhite="faq"
              titlePink="?"
              bodyComponent={                <Values />
              }
              widthRatio={0}
            />
          </div>
            <div className="section">
                <Section
                    device={device}
                    titleWhite="where we've worked"
                    titlePink=":"
                    bodyComponent={(
                        // <CompanyWrapper device={device}>
                        //   <CompanyCarousel />
                        // </CompanyWrapper>
                        <Team />

                    )}
                    widthRatio={0}
                />
            </div>
            <div className="section">
                <Section
                    device={device}
                    titleWhite="Organizations"
                    titlePink="?"
                    bodyComponent={ <Organizations />
                    }
                    widthRatio={0}
                />
            </div>
            <div className="section">
                <Section
                    device={device}
                    titleWhite="Quotes"
                    titlePink="?"
                    bodyComponent={ <Quotes />
                    }
                    widthRatio={0}
                />
            </div>
        </div>
      )}
    />
  );
  
//   Home.propTypes = {
//     device: PropTypes.string.isRequired,
//   };
  
  export default Home;