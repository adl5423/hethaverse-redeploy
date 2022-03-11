import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './About.scss';

function About() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    return (
        <>
            <div className="page-container">
                <h1> It's working </h1>
            </div>
        </>
    )
}

export default About