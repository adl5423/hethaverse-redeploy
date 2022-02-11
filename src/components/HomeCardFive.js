import React from 'react';
import './HomeCardFive.scss';
import Security from './images/security.jpg';

function HomeCardFive() {
    return (
        <>
            <div className="card-five-container">
                <div className="five-text-section">
                    <h2 className="card-five-title">
                        Plan your Wealth, Protect your Family
                    </h2>
                    <p className="card-five-desc">
                        We offer an extensive network of healthcare providers that can help you receive the best treatments for yourself and the people you care at the best cost.
                    </p>
                </div>
                <div className="five-photo-section">
                    <img src={Security} alt="security.jpeg" className="security" />
                </div>
            </div>
        </>
    );
}

export default HomeCardFive;
