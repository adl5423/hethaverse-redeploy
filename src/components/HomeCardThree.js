import React, { useEffect } from 'react';
import './HomeCardThree.scss';
import Checkup from './images/physical.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function HomeCardThree() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);
    return (
        <>
            <div data-aos="fade-up" data-aos-once="true" className="card-three-container">
                <div className="three-text-section">
                    <h2 className="card-three-title">
                        Get The Care for You and Your Family
                    </h2>
                    <p className="card-three-desc">
                        We offer an extensive network of healthcare providers that can help you receive the best treatments for yourself and the people you care at the best cost.
                    </p>
                </div>
                <div className="three-photo-section">
                    <img src={Checkup} alt="checkup.jpeg" className="checkup" />
                </div>
            </div>
        </>
    );
}

export default HomeCardThree;
