import React, { useEffect } from 'react';
import './Contactus.scss';
// import Bookings from './Bookings';
import Cubes from './videos/cubes.mp4';
import { ReactComponent as Caring } from "./images/caring.svg";
// import Calendar from "./images/calendar-template.png";
// import { Link } from 'react-router-dom';
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
                <div data-aos="fade-up" data-aos-once="true" className="informational-container">
                    <div className="calendar-section">
                        <h2 className="calendar-heading">
                            Appointment Calendar
                        </h2>
                        <div>
                            {/* <Bookings /> */}
                            
                        </div>
                    </div>
                    <div className="info-contact">
                        <h1 className="info-title">
                            Email
                        </h1>
                        <p className="info-content">
                            main@hethaverse.com
                        </p>
                        <h1 className="info-title">
                            Phone Number
                        </h1>
                        <a href="tel:3013313718" className="info-content">
                            301.331.3718
                        </a>
                        <h1 className="info-title">
                            Webmaster Email
                        </h1>
                        <p className="info-content">
                            webmaster@hethaverse.com
                        </p>
                        <h1 className="info-title">
                            Webmaster Phone Number
                        </h1>
                        <a href="tel:3045196953" className="info-content">
                            304.519.6953
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactus