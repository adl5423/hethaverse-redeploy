import React, { useEffect } from 'react';
import './HomeCardFour.scss';
import Blockchain from './images/blockchain2-copy.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function HomeCardFour() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);
    return (
        <>
            <div data-aos="fade-up" data-aos-once="true" className="card-four-container">
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
