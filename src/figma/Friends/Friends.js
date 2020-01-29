import React from 'react';
import './Friends.css';
import ReactSwipe from 'react-swipe';
import buddies from '../../images/BestBuddies.jpg';
import leftarrow from '../../images/left-arrow.svg';
import antepli from '../../images/quotes/Abdullah Antepli.jpg';
import feroze from '../../images/quotes/feroze.jpg';
import erin from '../../images/quotes/erin.jpg';
import jenny from '../../images/quotes/jenny.jpg';
import brooke from '../../images/quotes/brooke.jpg';



function Friends() {
    const quotes = [
        {
            author: 'Erin McDermott',
            year: '2020',
            image: erin,
            quote: 'He cares about pushing what makes Duke a community, what makes Duke a home, pushing it forward. He’s the kind of person that, whenever anyone would need him to be there or would need help, he will drop everything and be that person.'
        },
        {
            author: 'Jenny Chin',
            year: '2020',
            image: jenny,
            quote: 'Ibby really steps up and commits himself for the people he cares about, and luckily for the student body that includes all of us.'
        },
        {
            author: 'Prof. Abdullah Antepli (via the Duke Chronicle)',
            year: '2020',
            image: antepli,
            quote: 'He has this burning fire in him. He understands the world through the lens of social justice ... that’s the goodness of this man who is keenly aware of his privileges, and he is so committed to turn his privileges into some sort of service, some sort of commitment.'
        },
        {
            author: 'Brooke Porter',
            year: '2020',
            image: brooke,
            quote: 'Since I met him our freshman year, Ibby has been dedicated to communities at Duke and our partners in Durham. His inner drive and work ethic never fail to impress me.'
        },
        {
            author: 'Feroze Mohideen',
            year: '2020',
            image: feroze,
            quote: 'There\`s no doubt Ibby is involved in a lot of things at Duke or within Durham, but to me, Ibby is plainly not only a true friend but someone I\'d call my brother. Whether it be 3 am Taylor Swift karaoke or guilty late-night Krafthouse runs, Ibby has been there for me through thick and thin, and I know he\'ll carry the same energy into every relationship he makes.'
        },
    ];
    let reactSwipeEl;
    return (
        <div id={"Friends"}>
            <div class="friends-title"><h2>Friends of Ibby</h2></div>
            <ReactSwipe
                id={"swipe-container-friends"}
                swipeOptions={{ continuous: true }}
                ref={el => (reactSwipeEl = el)}
            >
                {quotes.map((quote, i) => {
                    return <div id={"quote-container"}>
                        <div onClick={() => reactSwipeEl.prev()} class={"arrow-friends"}><img src={leftarrow} /></div>
                        <img key={i} id={"friend-pic"} src={quote.image}/>
                        <div id={'quote-text-container'}>
                            <div id={"quote-text"}>“{quote.quote}”</div>
                            <div id={"quote-author"}>- {quote.author}</div>
                        </div>
                        <div onClick={() => reactSwipeEl.next()} class={"arrow-friends"} id={"flip-arrow"}><img src={leftarrow} /></div>
                    </div>
                })}
            </ReactSwipe>
        </div>
    );
}

export default Friends;