import React, { useEffect } from 'react';
import './Contactus.scss';
import Cubes from './videos/cubes.mp4';
import { ReactComponent as Caring } from "./images/caring.svg";
import Aos from 'aos';
import 'aos/dist/aos.css';

function Contactus() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);
    return (
        <>
            <div className="contact-us-container">
                <div className="contact-hero">
                    <h1 className="contact-header">
                        Contact Us
                    </h1>
                    <video className="cubes" playsinline autoPlay loop muted>
                        <source src={Cubes} type="video/mp4" />
                    </video>
                </div>
                <div data-aos="fade-up" data-aos-once="true" className="contact-info">
                    <p className="contact-desc">
                        We know that you are as excited as we are with Hethaverse, and we aim to inform you about our products and goals. Below you can find a calendar to schedule an appointment with us, as well as additional contact information. We hope to hear from you soon!
                    </p>
                    <Caring className="caring" />
                </div>
            </div>
        </>
    )
}

export default Contactus