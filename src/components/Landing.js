import React from 'react';
import Doctor from "./images/doctor.png";
import Financial from "./images/financial.png"
import './Landing.scss';
import { ReactComponent as Logo } from "./images/HethaverseLogoGraphic.svg";

function Landing() {
    return (
        <>
            <div className="home-container">
                <div className="main-container">
                    <img src={Doctor} alt="doctor.png" className="doctor" />
                    <div className="center-info">
                        <h1 className="healthcare">
                            Prioritizing Healthcare
                        </h1>
                        <h1 className="wealthcare">
                            Protecting Wealthcare
                        </h1>
                        <h2 className="slogan">
                            Powered by today's technology
                        </h2>
                        <div className="landing-info">
                            <div className="landing-logo">
                                <Logo />
                            </div>
                            <h1 className="landing-logo-text">
                                Hethaverse
                            </h1>
                        </div>
                    </div>
                    <img src={Financial} alt="financial-advisor.png" className="financial-advisor" />
                </div>
            </div>
        </>
    );
}

export default Landing;
