import React, { useEffect } from 'react';
import './HomeCardSix.scss';
import Educating from './images/educating.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function HomeCardSix() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);
    return (
        <>
            <div data-aos="fade-up" data-aos-once="true" className="card-six-container">
                <div className="six-photo-section">
                    <img src={Educating} alt="educating.jpeg" className="educating" />
                </div>
                <div className="six-text-section">
                    <h2 className="card-six-title">
                        Education: The Right Way
                    </h2>
                    <p className="card-six-desc">
                        Hethaverse offers the best articles, videos, and blog posts so you can learn about healthcare and finance the right way.
                    </p>
                </div>
            </div>
        </>
    );
}

export default HomeCardSix;
