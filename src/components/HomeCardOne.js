import React from 'react';
import './HomeCardOne.scss';
import Plexus from './videos/plexus.mp4';

function HomeCardOne() {
    return (
        <>
            <div className="card-one-container">
                <h1 className="card-one-header">
                    We have no limits
                </h1>
                <video className="plexus" autoPlay loop muted>
                    <source src={Plexus} type="video/mp4" />
                </video>
            </div>
        </>
    );
}

export default HomeCardOne;
