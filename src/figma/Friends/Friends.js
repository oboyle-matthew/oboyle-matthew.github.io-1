import React from 'react';
import './Friends.css';
import ReactSwipe from 'react-swipe';
import buddies from '../../images/BestBuddies.jpg';


function Friends() {
    const quotes = [
        {
            author: 'Matthew O\'Boyle',
            year: '2020',
            image: buddies,
            quote: 'I’ve been fortunate to get to know Archana through Duke Conversations over the last two years. Working on a close-knit team, I saw Archana’s talent not just for getting the job done, but also for making everyone feel that they had a stake in the outcome.'
        },
        {
            author: 'Feroze Mohideen',
            year: '2020',
            image: buddies,
            quote: 'gf ngfdng fdjkg fdkjg fdkgj fgkjf dkgj fdjkg fdkjg fsjkgfskjgdfggfdg'
        },
        {
            author: 'Ibby Butt',
            year: '2020',
            image: buddies,
            quote: 'fg jkg fdkjg fkg dfgkjf dgkj fdgjk gkj gkvj dvbkj tbkvj tvkjbr vkjr vjk rjvrtjv krv'
        },
        {
            author: 'Erin McDermott',
            year: '2020',
            image: buddies,
            quote: 'fgk ndgfs dmfgjkdfs gjkrfs vgvf msv fnbvx hsb xvmvxkvm ncxbmnb bnbmcdnx nvsn nfvfmvcndcvdnv nfv vnfvn vf hvnmv fsvnm n'
        },
        {
            author: 'Another name',
            year: '2020',
            image: buddies,
            quote: 'sfgbj sbvxfbjds bvsbfjdsv cxbdfjnvcjx mbsfjnv bmsfdsvncxv msbdmcvmbnvd bcxnlvds bcksdn bcsdkfnds vbdfnv sbdmfndsv mdfnlsvm sdfnvm dsfnvcsd mfbdnvcsdf mbdsvncsd fbmsvndf bdskvjnfb bdsvjnfbeb dsnjkb dsk'
        },
    ];
    let reactSwipeEl;
    return (
        <div id={"friends-container"}>
            <div onClick={() => reactSwipeEl.prev()} id={"arrow-left"}/>
            <div onClick={() => reactSwipeEl.next()} id={"arrow-right"}/>
            <ReactSwipe
                id={"swipe-container"}
                swipeOptions={{ continuous: true }}
                ref={el => (reactSwipeEl = el)}
            >
                {quotes.map((quote, i) => {
                    return <div id={"quote-container"}>
                        <img key={i} id={"friend-pic"} src={quote.image}/>
                        <div id={"quote-string"}>"</div>
                        <div id={"quote-text"}>{quote.quote}</div>
                        <div id={"quote-author"}>{quote.author}</div>
                    </div>
                })}
            </ReactSwipe>
        </div>
    );
}

export default Friends;
