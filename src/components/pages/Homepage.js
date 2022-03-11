import React from 'react';
import Landing from '../Landing';
import HomeCardOne from '../HomeCardOne';
import HomeCardTwo from '../HomeCardTwo';
import HomeCardThree from '../HomeCardThree';
import HomeCardFour from '../HomeCardFour';
import HomeCardFive from '../HomeCardFive';
import HomeCardSix from '../HomeCardSix';
import Pagestatus from '../Pagestatus';

function Homepage() {
    return (
        <>
            <div id="homepage">
                <Landing />
                <HomeCardOne />
                <HomeCardTwo />
                <HomeCardThree />
                <HomeCardFour />
                <HomeCardFive />
                <HomeCardSix />
                <Pagestatus />
            </div>
        </>
    );
}

export default Homepage;