import React from 'react';
import './HomeCardTwo.scss';
import Telehealth from './images/tele-health.jpg';

function HomeCardTwo() {
    return (
        <>
            <div className="card-two-container">
                <div className="photo-section">
                    <img src={Telehealth} alt="tele-health.jpeg" className="telehealth" />
                </div>
                <div className="text-section">
                    <h2 className="card-two-title">
                        Be Healthy and Stable
                    </h2>
                    <p className="card-two-desc">
                        At Hethaverse, we believe that health and financial stability are top priorities. That's why we offer a range of services and educational content that will help you reach your goals and preserve you and your family's health.
                    </p>
                </div>
            </div>
        </>
    );
}

export default HomeCardTwo;
