import React from 'react';
import Title from './sections/Title/Title';
import About from './sections/About/About';
import Team from './sections/Team/Team';
import Navbar from "./sections/Navbar/components/navbar/Navbar";
import Values from './sections/Values/Values';
import Organizations from './sections/Organizations/Organizations';
import Quotes from './sections/Quotes/Quotes';
import './App.js';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';

function App() {
    let options = {
        // sectionClassName:     'section',
        anchors:              ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive', 'sectionSix'],
        scrollBar:            false,
        navigation:           true,
        verticalAlign:        false,
        // sectionPaddingTop:    '50px',
        // sectionPaddingBottom: '50px',
        arrowNavigation:      true
    };
  return (
      <div>
          {/*<Header>*/}
              {/*<a href="#sectionOne">Section One</a>*/}
              {/*<a href="#sectionTwo">Section Two</a>*/}
              {/*<a href="#sectionThree">Section Three</a>*/}
          {/*</Header>*/}
          <SectionsContainer  {...options}>
              <Section ><Title/></Section>
              <Section color="#A7DBD8"><Values/></Section>
              <Section color="#E0E4CC"><Organizations/></Section>
              <Section color="#E0E4CC"><Quotes/></Section>
              <Section color="#E0E4CC"><About/></Section>
              <Section color="#E0E4CC"><Team/></Section>

          </SectionsContainer>
      </div>
  );
}

export default App;
