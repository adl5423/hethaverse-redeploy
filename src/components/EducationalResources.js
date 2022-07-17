import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pills from "./images/pillsgroup.jpeg";
import Exercising from "./images/exercising-gym.jpeg";
import Piggy from "./images/piggybank.jpeg";
import './EducationalResources.scss';
import './Button.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

function EducationalResources() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    return (
        <>
            <div className="educational-container">
                <div className="educational-hero">
                    <h1 className="educational-title">
                        Educational
                    </h1>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-once="true" className="educational-description">
                <p className="educational-desc">
                    We provide various resources and tools that will help you make the best decisions for your health and wealth. Our resources are 100% made by professionals and experts in the matter, and can be contacted upon request for additional inquires. Click any of the buttons below to access your desired resource.
                </p>
            </div>

            <div data-aos="fade-up" data-aos-once="true" className="dictionary-container">
                <img src={Pills} alt="pills.jpeg" className="pills-picture" />
                <div className="dictionary-description">
                    <h2 className="dict-title">
                        Top 300 Dictionary
                    </h2>
                    <p className="dict-desc">
                        A complete dictionary of the top 300 drugs around the world - all at your disposition!
                    </p>
                    <div className="button">
                        <Link to={{ pathname: "/" }} target="_blank">Learn More</Link>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-once="true" className="hb-container">
                <img src={Exercising} alt="exercising.jpeg" className="exercising-picture" />
                <div className="hb-description">
                    <h2 className="hb-title">
                        Hethaverse Health Blog
                    </h2>
                    <p className="hb-desc">
                        Experts from all around the world share and discuss health topics to create awareness and help you make the best medical decisions.
                    </p>
                    <div className="button">
                        <Link to={{ pathname: "/" }} target="_blank">Visit Blog</Link>
                    </div>

                </div>
            </div>

            <div data-aos="fade-up" data-aos-once="true" className="fb-container">
                <img src={Piggy} alt="piggy.jpeg" className="piggy-picture" />
                <div className="fb-description">
                    <h2 className="fb-title">
                        Hethaverse Financial Blog
                    </h2>
                    <p className="fb-desc">
                        The best information - from financial markets to retirement savings - crafted to help you manage your wealth.
                    </p>
                    <div className="button">
                        <Link to={{ pathname: "/" }} target="_blank">Visit Blog</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EducationalResources