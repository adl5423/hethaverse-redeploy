import React from 'react';
import './HomeCardFour.scss';
import Blockchain from './images/blockchain2-copy.jpg';

function HomeCardFour() {
    return (
        <>
            <div className="card-four-container">
                <div className="four-photo-section">
                    <img src={Blockchain} alt="blockchain.jpeg" className="blockchain" />
                </div>
                <div className="four-text-section">
                    <h2 className="card-four-title">
                        Your Records, Preserved in The Future
                    </h2>
                    <p className="card-four-desc">
                        Our Blockchain storage technology offers maximum protection and privacy of your most sensitive information, which is only accessed on your demand.
                    </p>
                </div>
            </div>
        </>
    );
}

export default HomeCardFour;
