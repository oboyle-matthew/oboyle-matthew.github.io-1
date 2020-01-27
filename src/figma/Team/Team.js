import React from 'react';
import './Team.css';
import ReactSwipe from 'react-swipe';
import buddies from '../../images/BestBuddies.jpg';

function Friends() {
    const quotes = [
        {
            author: 'Matthew O\'Boyle1',
            year: '2020',
            image: buddies,
            quote: 'I’ve been fortunate to get to know Archana through Duke Conversations over the last two years. Working on a close-knit team, I saw Archana’s talent not just for getting the job done, but also for making everyone feel that they had a stake in the outcome.'
        },
        {
            author: 'Feroze fds2',
            year: '2020',
            image: buddies,
            quote: 'gf ngfdng fdjkg fdkjg fdkgj fgkjf dkgj fdjkg fdkjg fsjkgfskjgdfggfdg'
        },
        {
            author: 'Ibby But3t',
            year: '2020',
            image: buddies,
            quote: 'fg jkg fdkjg fkg dfgkjf dgkj fdgjk gkj gkvj dvbkj tbkvj tvkjbr vkjr vjk rjvrtjv krv'
        },
        {
            author: 'Erin McDerm4ott',
            year: '2020',
            image: buddies,
            quote: 'fgk ndgfs dmfgjkdfs gjkrfs vgvf msv fnbvx hsb xvmvxkvm ncxbmnb bnbmcdnx nvsn nfvfmvcndcvdnv nfv vnfvn vf hvnmv fsvnm n'
        },
        {
            author: 'fsdd na5me',
            year: '2020',
            image: buddies,
            quote: 'sfgbj sbvxfbjds bvsbfjdsv cxbdfjnvcjx mbsfjnv bmsfdsvncxv msbdmcvmbnvd bcxnlvds bcksdn bcsdkfnds vbdfnv sbdmfndsv mdfnlsvm sdfnvm dsfnvcsd mfbdnvcsdf mbdsvncsd fbmsvndf bdskvjnfb bdsvjnfbeb dsnjkb dsk'
        },
        {
            author: 'Matthew O\'B6oyle',
            year: '2020',
            image: buddies,
            quote: 'I’ve been fortunate to get to know Archana through Duke Conversations over the last two years. Working on a close-knit team, I saw Archana’s talent not just for getting the job done, but also for making everyone feel that they had a stake in the outcome.'
        },
        {
            author: 'Feroze Moh7ideen',
            year: '2020',
            image: buddies,
            quote: 'gf ngfdng fdjkg fdkjg fdkgj fgkjf dkgj fdjkg fdkjg fsjkgfskjgdfggfdg'
        },
        {
            author: 'Ibby f8s',
            year: '2020',
            image: buddies,
            quote: 'fg jkg fdkjg fkg dfgkjf dgkj fdgjk gkj gkvj dvbkj tbkvj tvkjbr vkjr vjk rjvrtjv krv'
        },
        {
            author: 'asd McDer9mott',
            year: '2020',
            image: buddies,
            quote: 'fgk ndgfs dmfgjkdfs gjkrfs vgvf msv fnbvx hsb xvmvxkvm ncxbmnb bnbmcdnx nvsn nfvfmvcndcvdnv nfv vnfvn vf hvnmv fsvnm n'
        },
        {
            author: 'Another nam10e',
            year: '2020',
            image: buddies,
            quote: 'sfgbj sbvxfbjds bvsbfjdsv cxbdfjnvcjx mbsfjnv bmsfdsvncxv msbdmcvmbnvd bcxnlvds bcksdn bcsdkfnds vbdfnv sbdmfndsv mdfnlsvm sdfnvm dsfnvcsd mfbdnvcsdf mbdsvncsd fbmsvndf bdskvjnfb bdsvjnfbeb dsnjkb dsk'
        },
        {
            author: 'Matthew O\'B11oyle',
            year: '2020',
            image: buddies,
            quote: 'I’ve been fortunate to get to know Archana through Duke Conversations over the last two years. Working on a close-knit team, I saw Archana’s talent not just for getting the job done, but also for making everyone feel that they had a stake in the outcome.'
        },
        {
            author: 'Feroze Mohid12een',
            year: '2020',
            image: buddies,
            quote: 'gf ngfdng fdjkg fdkjg fdkgj fgkjf dkgj fdjkg fdkjg fsjkgfskjgdfggfdg'
        },
        {
            author: 'Ibby f13ds',
            year: '2020',
            image: buddies,
            quote: 'fg jkg fdkjg fkg dfgkjf dgkj fdgjk gkj gkvj dvbkj tbkvj tvkjbr vkjr vjk rjvrtjv krv'
        },
        {
            author: 'Erin McDerm14ott',
            year: '2020',
            image: buddies,
            quote: 'fgk ndgfs dmfgjkdfs gjkrfs vgvf msv fnbvx hsb xvmvxkvm ncxbmnb bnbmcdnx nvsn nfvfmvcndcvdnv nfv vnfvn vf hvnmv fsvnm n'
        },
        {
            author: 'Another na15me',
            year: '2020',
            image: buddies,
            quote: 'sfgbj sbvxfbjds bvsbfjdsv cxbdfjnvcjx mbsfjnv bmsfdsvncxv msbdmcvmbnvd bcxnlvds bcksdn bcsdkfnds vbdfnv sbdmfndsv mdfnlsvm sdfnvm dsfnvcsd mfbdnvcsdf mbdsvncsd fbmsvndf bdskvjnfb bdsvjnfbeb dsnjkb dsk'
        },
        {
            author: 'Matthew O\'Bo16yle',
            year: '2020',
            image: buddies,
            quote: 'I’ve been fortunate to get to know Archana through Duke Conversations over the last two years. Working on a close-knit team, I saw Archana’s talent not just for getting the job done, but also for making everyone feel that they had a stake in the outcome.'
        },
        {
            author: 'czx Mohide17en',
            year: '2020',
            image: buddies,
            quote: 'gf ngfdng fdjkg fdkjg fdkgj fgkjf dkgj fdjkg fdkjg fsjkgfskjgdfggfdg'
        },
        {
            author: 'Ibby B18utt',
            year: '2020',
            image: buddies,
            quote: 'fg jkg fdkjg fkg dfgkjf dgkj fdgjk gkj gkvj dvbkj tbkvj tvkjbr vkjr vjk rjvrtjv krv'
        },
        {
            author: 'Erin fs19df',
            year: '2020',
            image: buddies,
            quote: 'fgk ndgfs dmfgjkdfs gjkrfs vgvf msv fnbvx hsb xvmvxkvm ncxbmnb bnbmcdnx nvsn nfvfmvcndcvdnv nfv vnfvn vf hvnmv fsvnm n'
        },
        {
            author: 'Another na20me',
            year: '2020',
            image: buddies,
            quote: 'sfgbj sbvxfbjds bvsbfjdsv cxbdfjnvcjx mbsfjnv bmsfdsvncxv msbdmcvmbnvd bcxnlvds bcksdn bcsdkfnds vbdfnv sbdmfndsv mdfnlsvm sdfnvm dsfnvcsd mfbdnvcsdf mbdsvncsd fbmsvndf bdskvjnfb bdsvjnfbeb dsnjkb dsk'
        },
        {
            author: 'Matthew O\'fd21sf',
            year: '2020',
            image: buddies,
            quote: 'I’ve been fortunate to get to know Archana through Duke Conversations over the last two years. Working on a close-knit team, I saw Archana’s talent not just for getting the job done, but also for making everyone feel that they had a stake in the outcome.'
        },
        {
            author: 'Feroze Mohid22een',
            year: '2020',
            image: buddies,
            quote: 'gf ngfdng fdjkg fdkjg fdkgj fgkjf dkgj fdjkg fdkjg fsjkgfskjgdfggfdg'
        },
        {
            author: 'Ibby Butt23',
            year: '2020',
            image: buddies,
            quote: 'fg jkg fdkjg fkg dfgkjf dgkj fdgjk gkj gkvj dvbkj tbkvj tvkjbr vkjr vjk rjvrtjv krv'
        },
        {
            author: 'Erin McDerm24ott',
            year: '2020',
            image: buddies,
            quote: 'fgk ndgfs dmfgjkdfs gjkrfs vgvf msv fnbvx hsb xvmvxkvm ncxbmnb bnbmcdnx nvsn nfvfmvcndcvdnv nfv vnfvn vf hvnmv fsvnm n'
        },
        {
            author: 'Another nam25e',
            year: '2020',
            image: buddies,
            quote: 'sfgbj sbvxfbjds bvsbfjdsv cxbdfjnvcjx mbsfjnv bmsfdsvncxv msbdmcvmbnvd bcxnlvds bcksdn bcsdkfnds vbdfnv sbdmfndsv mdfnlsvm sdfnvm dsfnvcsd mfbdnvcsdf mbdsvncsd fbmsvndf bdskvjnfb bdsvjnfbeb dsnjkb dsk'
        },
        {
            author: 'Erin McDer26mott',
            year: '2020',
            image: buddies,
            quote: 'fgk ndgfs dmfgjkdfs gjkrfs vgvf msv fnbvx hsb xvmvxkvm ncxbmnb bnbmcdnx nvsn nfvfmvcndcvdnv nfv vnfvn vf hvnmv fsvnm n'
        },
        {
            author: 'Another n27ame',
            year: '2020',
            image: buddies,
            quote: 'sfgbj sbvxfbjds bvsbfjdsv cxbdfjnvcjx mbsfjnv bmsfdsvncxv msbdmcvmbnvd bcxnlvds bcksdn bcsdkfnds vbdfnv sbdmfndsv mdfnlsvm sdfnvm dsfnvcsd mfbdnvcsdf mbdsvncsd fbmsvndf bdskvjnfb bdsvjnfbeb dsnjkb dsk'
        },
        {
            author: 'Matthew O\'B28oyle',
            year: '2020',
            image: buddies,
            quote: 'I’ve been fortunate to get to know Archana through Duke Conversations over the last two years. Working on a close-knit team, I saw Archana’s talent not just for getting the job done, but also for making everyone feel that they had a stake in the outcome.'
        },
        {
            author: 'czx Mohide29en',
            year: '2020',
            image: buddies,
            quote: 'gf ngfdng fdjkg fdkjg fdkgj fgkjf dkgj fdjkg fdkjg fsjkgfskjgdfggfdg'
        },
        {
            author: 'Ibby Butt30',
            year: '2020',
            image: buddies,
            quote: 'fg jkg fdkjg fkg dfgkjf dgkj fdgjk gkj gkvj dvbkj tbkvj tvkjbr vkjr vjk rjvrtjv krv'
        },
        {
            author: 'Erin fsd31f',
            year: '2020',
            image: buddies,
            quote: 'fgk ndgfs dmfgjkdfs gjkrfs vgvf msv fnbvx hsb xvmvxkvm ncxbmnb bnbmcdnx nvsn nfvfmvcndcvdnv nfv vnfvn vf hvnmv fsvnm n'
        },
        {
            author: 'Matthew 32O\'Boyle',
            year: '2020',
            image: buddies,
            quote: 'I’ve been fortunate to get to know Archana through Duke Conversations over the last two years. Working on a close-knit team, I saw Archana’s talent not just for getting the job done, but also for making everyone feel that they had a stake in the outcome.'
        },
        {
            author: 'czx Moh33ideen',
            year: '2020',
            image: buddies,
            quote: 'gf ngfdng fdjkg fdkjg fdkgj fgkjf dkgj fdjkg fdkjg fsjkgfskjgdfggfdg'
        },
        {
            author: 'Ibby Bu34tt',
            year: '2020',
            image: buddies,
            quote: 'fg jkg fdkjg fkg dfgkjf dgkj fdgjk gkj gkvj dvbkj tbkvj tvkjbr vkjr vjk rjvrtjv krv'
        },
        {
            author: 'Erin fs35df',
            year: '2020',
            image: buddies,
            quote: 'fgk ndgfs dmfgjkdfs gjkrfs vgvf msv fnbvx hsb xvmvxkvm ncxbmnb bnbmcdnx nvsn nfvfmvcndcvdnv nfv vnfvn vf hvnmv fsvnm n'
        },
        {
            author: 'Erin McD36ermott',
            year: '2020',
            image: buddies,
            quote: 'fgk ndgfs dmfgjkdfs gjkrfs vgvf msv fnbvx hsb xvmvxkvm ncxbmnb bnbmcdnx nvsn nfvfmvcndcvdnv nfv vnfvn vf hvnmv fsvnm n'
        },
        {
            author: 'Another 37name',
            year: '2020',
            image: buddies,
            quote: 'sfgbj sbvxfbjds bvsbfjdsv cxbdfjnvcjx mbsfjnv bmsfdsvncxv msbdmcvmbnvd bcxnlvds bcksdn bcsdkfnds vbdfnv sbdmfndsv mdfnlsvm sdfnvm dsfnvcsd mfbdnvcsdf mbdsvncsd fbmsvndf bdskvjnfb bdsvjnfbeb dsnjkb dsk'
        },
    ];
    let reactSwipeEl;
    return (
        <div id={"team-container"}>
            <div id={"team-title"}>The Team</div>
            <div onClick={() => reactSwipeEl.prev()} id={"arrow-left"}/>
            <div onClick={() => reactSwipeEl.next()} id={"arrow-right"}/>
            <ReactSwipe
                id={"swipe-container"}
                swipeOptions={{ continuous: true }}
                ref={el => (reactSwipeEl = el)}
            >
                {[...Array(Math.ceil(quotes.length / 10)).keys()].map((quote, i) => {
                    console.log(i);
                    return <div style={{height: '800px'}}>
                        <div id={'photo-icons'}>
                            {[...Array(Math.min(10, quotes.length - i*10 - 1)).keys()].map((elem, j) => {
                                return <div className={'photo-row'}
                                            style={{
                                                position: 'absolute',
                                                left: ((j%5)*246).toString() + 'px',
                                                top: j < 5 ? 0 : '271px',
                                            }}>
                                    <img id={'photo-image'} src={buddies} />
                                </div>
                            })}
                            {[...Array(Math.min(10, quotes.length - i*10 - 1)).keys()].map((elem, j) => {
                                console.log(j);
                                return <div className={'member-name'}
                                            style={{
                                                position: 'absolute',
                                                left: ((j%5)*246).toString() + 'px',
                                                top: j < 5 ? '198px' : '475.6px',
                                            }}>
                                        {quotes[(i*10) + j].author}
                                </div>
                            })}
                            {[...Array(Math.min(10, quotes.length - i*10 - 1)).keys()].map((elem, j) => {
                                return <div className={'member-role'}
                                            style={{
                                                position: 'absolute',
                                                left: ((j%5)*246).toString() + 'px',
                                                top: j < 5 ? '223.6px' : '501.2px',
                                            }}>
                                    {quotes[(i*10) + j].year}
                                </div>
                            })}
                        </div>

                    </div>
                })}
            </ReactSwipe>
        </div>
    );
}

export default Friends;
