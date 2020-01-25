import React from 'react';
import './Quotes.css';
import buddies from '../../images/BestBuddies.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Quotes() {
    const quotes = [
        {
            author: 'Matthew O\'Boyle',
            year: '2020',
            image: buddies,
            quote: 'I’ve been fortunate to get to know Archana through Duke Conversations over the last two years. Working on a close-knit team, I saw Archana’s talent not just for getting the job done, but also for making everyone feel that they had a stake in the outcome. Thanks to her leadership, organization, and creative vision, we ended up hosting over 65 dinners between students and faculty in 2018. As Young Trustee, Archana can bring those same qualities to the table on the most pressing issues for Duke.'
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
    return (
        <div>
            <Carousel autoPlay={true} transitionTime={1000} className="presentation-mode"
                      showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false}>
                {quotes.map(quote => {
                    return <div id={'quote-container'}>
                        <img id={'quote-img'} src={quote.image}/>
                        <p id={'quote-author'}>{quote.author + " (" + quote.year + ")"}</p>

                        <p id={'quote-text'}>{quote.quote}</p>


                    </div>
                })}
            </Carousel>
        </div>
    );
}

export default Quotes;
