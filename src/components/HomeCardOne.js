import React, { useEffect } from 'react';
import './HomeCardOne.scss';
import Plexus from './videos/plexus.mp4';
import Aos from 'aos';
import 'aos/dist/aos.css';

function HomeCardOne() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);
    return (
        <>
            <div data-aos="fade-up" data-aos-once="true" className="card-one-container">
                <h1 className="card-one-header">
                    We have no limits
                </h1>
                <video className="plexus" playsinline autoPlay loop muted>
                    <source src={Plexus} type="video/mp4" />
                </video>
            </div>
        </>
    );
}

export default HomeCardOne;
