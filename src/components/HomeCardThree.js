import React from 'react';
import './HomeCardThree.scss';
import Checkup from './images/physical.jpg';

function HomeCardThree() {
    return (
        <>
            <div className="card-three-container">
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
