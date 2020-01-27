import React from 'react';
// import Title from './sections/Title/Title';
// import About from './sections/About/About';
// import Team from './sections/Team/Team';
// import Navbar from "./sections/Navbar/components/navbar/Navbar";
// import Values from './sections/Values/Values';
// import Organizations from './sections/Organizations/Organizations';
// import Quotes from './sections/Quotes/Quotes';
// import './App.js';
// import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';

// import Responsive from 'react-responsive';
// import Home from './Home';
import About from './figma/About/About';
import WhyYoungTrustee from './figma/WhyYoungTrustee/WhyYoungTrustee';
import Friends from './figma/Friends/Friends';
import Team from './figma/Team/Team';
import AtDuke from "./figma/AtDuke/AtDuke";
import Connect from "./figma/Connect/Connect";
import World from "./figma/World/World";
import Title from "./figma/Title/Title";



// const Desktop = props => <Responsive {...props} minWidth={1024} />;
// const Mobile = props => <Responsive {...props} maxWidth={1023} />;

function App() {
//     let options = {
//         sectionClassName:     'section',
//         anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
//         scrollBar:            false,
//         navigation:           true,
//         verticalAlign:        false,
//         sectionPaddingTop:    '50px',
//         sectionPaddingBottom: '50px',
//         arrowNavigation:      true
//     };
//   return (
//       <div>
//           <Header>
//               <a href="#sectionOne">Section One</a>
//               <a href="#sectionTwo">Section Two</a>
//               <a href="#sectionThree">Section Three</a>
//           </Header>
//           <SectionsContainer  {...options}>
//               <Section verticalAlign="true" color="#69D2E7"><Title/></Section>
//               <Section color="#A7DBD8"><Values/></Section>
//               <Section color="#E0E4CC"><Organizations/></Section>
//           </SectionsContainer>
//       </div>
//   );
//       return(
//             <>
//             <Desktop>
//                 <Home device="desktop" />
//             </Desktop>
//             <Mobile>
//                 <Home device="mobile" />
//             </Mobile>
//         </>
//       )



    return (
        <div>
            <Title/>
            <About/>
            <WhyYoungTrustee/>
            <Friends/>
            <Team/>
            <World/>
            <AtDuke/>
            <Connect/>
            {/*<p>Here's text at the bottom</p>*/}
        </div>
    )
}

export default App;
