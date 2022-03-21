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
                    We Believe Health and Wealth are the top priorities
                </h1>
                <div className="hero">
                    <img src={Consulting} alt="consulting" className="hero-background" />
                </div>
            </div>
            <div className="summary-container" data-aos="fade-up" data-aos-once="true">
                <h2 className="summary-title">
                    About Us
                </h2>
                <p className="summary">
                    The Hethaverse is a cutting-edge platform that seamlessly links users with healthcare providers and financial tools to provide high quality, affordably priced care and financial advice.

                    The project's innovative design provides an easy and affordable way for anyone in need of medical services or financial guide via the metaverse without having any difficulty finding nearby appointments or wealth conservation.
                </p>
            </div>
        </>
    )
}

export default About