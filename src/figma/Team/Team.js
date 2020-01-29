import React from 'react';
import './Team.css';
import ReactSwipe from 'react-swipe';
import buddies from '../../images/BestBuddies.jpg';
import leftarrow from '../../images/left-arrow.svg';
import aisha from '../../images/team/Aisha Greene.jpg';
import aliceJ from '../../images/team/Alice Jiang.jpg';
import aliceW from '../../images/team/Alice Wu.jpg';
import beza from '../../images/team/Beza Gebremariam.jpg';
import brooke from '../../images/team/Brooke Porter.jpg';
import charlie from '../../images/team/Charlie Berman.jpg';
import christina from '../../images/team/Christina Li.jpg';
import claire from '../../images/team/Claire Gibbs.jpg';
import dima from '../../images/team/Dima Fayyad.jpg';
import doha from '../../images/team/Doha Ali.jpg';
import erin from '../../images/team/Erin McDermott.jpg';
import feroze from '../../images/team/Feroze Mohideen.jpg';
import gabriel from '../../images/team/Gabriel Crowell.jpg';
import janel from '../../images/team/Janel Ramkalawan.jpg';
import jenny from '../../images/team/Jenny Chin.jpg';
import joel from '../../images/team/Joel Kim.jpg';
import julia from '../../images/team/Julia Searby.jpg';
import kam from '../../images/team/Kameron Sedigh.JPG';
import katie from '../../images/team/Katie Cassedy.jpg';
import mariaE from '../../images/team/Maria Espinosa.jpg';
import mariaN from '../../images/team/Maria Naclerio.jpg';
import matt from '../../images/team/Matthew O’Boyle.jpg';
import michaelT from '../../images/team/Michael Tan .jpeg';
import michaelZ from '../../images/team/Michael Zhang.jpg';
import naira from '../../images/team/Naira Ikram.jpg';
import nick from '../../images/team/Nick Turecky.jpg';
import nico from '../../images/team/Nico Bodkin.jpg';
import rasheca from '../../images/team/Rasheca Logendran.jpg';
import saheel from '../../images/team/Saheel Chodavadia.jpg';
import selin from '../../images/team/Selin Ocal.jpg';
import shreya from '../../images/team/Shreya Bhatia.jpg';
import spencer from '../../images/team/Spencer Lafata.jpg';
import zoe from '../../images/team/Zoe King.jpg';




class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenSize: 'large',
        };
         this.quotes = [
            {
                author: 'Aisha Greene',
                year: '2022',
                image: aisha,
            },
             {
                 author: 'Alice Jiang',
                 year: '2020',
                 image: aliceJ,
             },
             {
                 author: 'Alice Wu',
                 year: '2022',
                 image: aliceW,
             },
             {
                 author: 'Beza Gebremariam',
                 year: '2020',
                 image: beza,
             },
             {
                 author: 'Brooke Porter',
                 year: '2020',
                 image: brooke,
             },
             {
                 author: 'Charlie Berman',
                 year: '2020',
                 image: charlie,
             },
             {
                 author: 'Christina Li',
                 year: '2020',
                 image: christina,
             },
             {
                 author: 'Claire Gibbs',
                 year: '2020',
                 image: claire,
             },
             {
                 author: 'Dima Fayyad',
                 year: '2020',
                 image: dima,
             },
             {
                 author: 'Doha Ali',
                 year: '2021',
                 image: doha,
             },
             {
                 author: 'Erin McDermott',
                 year: '2020',
                 image: erin,
             },
             {
                 author: 'Feroze Mohideen',
                 year: '2020',
                 image: feroze,
             },
             {
                 author: 'Gabriel Crowell',
                 year: '2020',
                 image: gabriel,
             },
             {
                 author: 'Janel Ramkalawan',
                 year: '2020',
                 image: janel,
             },
             {
                 author: 'Jenny Chin',
                 year: '2020',
                 image: jenny,
             },
             {
                 author: 'Joel Kim',
                 year: '2022',
                 image: joel,
             },
             {
                 author: 'Julia Searby',
                 year: '2020',
                 image: julia,
             },
             {
                 author: 'Kameron Sedigh',
                 year: '2020',
                 image: kam,
             },
             {
                 author: 'Katie Cassedy',
                 year: '2020',
                 image: katie,
             },
             {
                 author: 'Maria Espinosa',
                 year: '2020',
                 image: mariaE,
             },
             {
                 author: 'Maria Naclerio',
                 year: '2020',
                 image: mariaN,
             },
             {
                 author: 'Matthew O\'Boyle',
                 year: '2020',
                 image: matt,
             },
             {
                 author: 'Michael Tan',
                 year: '2020',
                 image: michaelT,
             },
             {
                 author: 'Michael Zhang',
                 year: '2020',
                 image: michaelZ,
             },
             {
                 author: 'Naira Ikram',
                 year: '2022',
                 image: naira,
             },
             {
                 author: 'Nick Turecky',
                 year: '2021',
                 image: nick,
             },
             {
                 author: 'Nico Bodkin',
                 year: '2020',
                 image: nico,
             },
             {
                 author: 'Rasheca Logendran',
                 year: '2020',
                 image: rasheca,
             },
             {
                 author: 'Saheel Chodavadia',
                 year: '2020',
                 image: saheel,
             },
             {
                 author: 'Selin Ocal',
                 year: '2020',
                 image: selin,
             },
             {
                 author: 'Shreya Bhatia',
                 year: '2020',
                 image: shreya,
             },
             {
                 author: 'Spencer Lafata',
                 year: '2021',
                 image: spencer,
             },
             {
                 author: 'Zoe King',
                 year: '2021',
                 image: zoe,
             },
        ];
    }

    updateScreenSize() {
        if (window.innerWidth < 800) {
            this.setState({
                screenSize: 'small',
            })
        } else if (window.innerWidth < 1200) {
            this.setState({
                screenSize: 'medium',
            })
        } else {
            this.setState({
                screenSize: 'large',
            })
        }
    }

    componentDidMount() {
        this.updateScreenSize();
        window.addEventListener("resize", this.updateScreenSize.bind(this));
    }

    renderSmallScreen() {
        const quotes = this.quotes;
        let reactSwipeEl;
        const numElements = 12;
        const elementsPerRow = 3;
        return (
            <div id={"team-container"}>
                <div id={"team-title"}><p style={{'margin-left': '5%'}}>The Team</p></div>
                <ReactSwipe
                    id={"swipe-container"}
                    swipeOptions={{ continuous: true }}
                    ref={el => (reactSwipeEl = el)}
                >
                    {[...Array(Math.ceil((quotes.length-1) / numElements)).keys()].map((quote, i) => {
                        return <div id={'swipe-inner-container'}>
                            <div id={'photo-icons'}>
                                {[...Array(Math.min(numElements, quotes.length - i*numElements - 1)).keys()].map((elem, j) => {
                                    return <div className={'photo-row'}
                                                style={{
                                                    position: 'absolute',
                                                    left: ((j % elementsPerRow) * 29) + 'vw',
                                                    top: (Math.floor(j / elementsPerRow) * 25) + 'vw',
                                                }}>
                                        <img id={'small-photo-image'} src={quotes[(i*numElements) + j].image} />
                                    </div>
                                })}
                                {[...Array(Math.min(numElements, quotes.length - i*numElements - 1)).keys()].map((elem, j) => {
                                    return <div className={'member-name'} id={'small-member-name'}
                                                style={{
                                                    position: 'absolute',
                                                    left: ((j%elementsPerRow)*29).toString() + 'vw',
                                                    top: (15.5 + Math.floor(j / elementsPerRow) * 25) + 'vw',
                                                }}>
                                        {quotes[(i*numElements) + j].author}
                                    </div>
                                })}
                                {[...Array(Math.min(numElements, quotes.length - i*numElements - 1)).keys()].map((elem, j) => {
                                    return <div className={'member-role'} id={'small-member-role'}
                                                style={{
                                                    position: 'absolute',
                                                    left: ((j%elementsPerRow)*29).toString() + 'vw',
                                                    top: (19 + Math.floor(j / elementsPerRow) * 25) + 'vw',
                                                }}>
                                        {quotes[(i*numElements) + j].year}
                                    </div>
                                })}
                            </div>

                        </div>
                    })}
                </ReactSwipe>
                <div onClick={() => reactSwipeEl.prev()} id={"arrow-left"}><img src={leftarrow}/></div>
                <div onClick={() => reactSwipeEl.next()} id={"arrow-right"}><img src={leftarrow}/></div>
            </div>
        )

    }

    renderBigScreen() {
        const quotes = this.quotes;
        const {screenSize} = this.state;
        let reactSwipeEl;
        const numElements = screenSize === 'large' ? 10 : 15;
        const elementsPerRow = 5;
        return (
            <div id={"team-container"}>
                <div id={"team-title"}><p style={{'margin-left': '5%'}}>The Team</p></div>
                <ReactSwipe
                    id={"swipe-container"}
                    swipeOptions={{ continuous: true }}
                    ref={el => (reactSwipeEl = el)}
                >
                    {[...Array(Math.ceil(quotes.length / numElements)).keys()].map((quote, i) => {
                        return <div id={'swipe-inner-container'}>
                            <div id={'photo-icons'}>
                                {[...Array(Math.min(numElements, quotes.length - i*numElements - 1)).keys()].map((elem, j) => {
                                    return <div className={'photo-row'}
                                                style={{
                                                    position: 'absolute',
                                                    left: ((j % elementsPerRow) * 17.6) + 'vw',
                                                    top: (Math.floor(j / elementsPerRow) * 19) + 'vw',
                                                    // left: ((j%5)*17.6).toString() + 'vw',
                                                    // top: j < 5 ? 0 : '20vw',
                                                }}>
                                        <img id={'big-photo-image'} src={quotes[(i*numElements) + j].image} />
                                    </div>
                                })}
                                {[...Array(Math.min(numElements, quotes.length - i*numElements - 1)).keys()].map((elem, j) => {
                                    return <div className={'member-name'}
                                                style={{
                                                    position: 'absolute',
                                                    left: ((j%5)*17.6).toString() + 'vw',
                                                    top: (13 + Math.floor(j / elementsPerRow) * 19) + 'vw',
                                                    // top: j < 5 ? '13vw' : '33vw',
                                                }}>
                                        {quotes[(i*numElements) + j].author}
                                    </div>
                                })}
                                {[...Array(Math.min(numElements, quotes.length - i*numElements - 1)).keys()].map((elem, j) => {
                                    return <div className={'member-role'}
                                                style={{
                                                    position: 'absolute',
                                                    left: ((j%5)*17.6).toString() + 'vw',
                                                    top: (15 + Math.floor(j / elementsPerRow) * 19) + 'vw',
                                                }}>
                                        {quotes[(i*numElements) + j].year}
                                    </div>
                                })}
                            </div>

                        </div>
                    })}
                </ReactSwipe>

                <div onClick={() => reactSwipeEl.prev()} id={"arrow-left"}><img src={leftarrow}/></div>
                <div onClick={() => reactSwipeEl.next()} id={"arrow-right"}><img src={leftarrow}/></div>
            </div>
        );

    }

    render() {
        const { screenSize } = this.state;
        return (
            screenSize === 'small' ? this.renderSmallScreen() : this.renderBigScreen()
        );

    }
}

export default Team;
