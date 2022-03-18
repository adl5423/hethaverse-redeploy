import React, { useEffect } from 'react';
import Aos from 'aos';
import Consulting from './images/consulting.jpeg'
import 'aos/dist/aos.css';
import './About.scss';

function About() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    return (
        <>
            <div className="about-us-container">
                <h1 className="our-mission">
                    We Believe Health and Wealth is on the top of the pyramid
                </h1>
                <div className="hero">
                    <img src={Consulting} alt="consulting" className="hero-background" />
                </div>
            </div>
        </>
    )
}

export default About