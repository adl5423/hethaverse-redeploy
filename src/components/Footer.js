import React from 'react';
import { ReactComponent as Logo } from "./images/HethaverseLogoGraphic.svg";
import { Link } from 'react-router-dom';
import './Footer.scss'

function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="copyright-section">
                    <Link to='/' className="footer-logo">
                        <Logo />
                    </Link>
                    <p className="copyright-message">
                        Hethaverse ©2022 All Rights Reserved
                    </p>
                </div>
                <div className="footer-pages">
                    <ul className="footer-menu">
                        <li className="foot-item">
                            <Link to='/privacy-and-legal' className='foot-links'>
                                Privacy and Legal
                            </Link>
                        </li>
                        <li className="foot-item">
                            <Link to='/contact' className='foot-links'>
                                Contact
                            </Link>
                        </li>
                        <li className="foot-item">
                            <Link to='/careers' className='foot-links'>
                                Careers
                            </Link>
                        </li>
                        <li className="foot-item">
                            <Link to='/news' className='foot-links'>
                                News
                            </Link>
                        </li>
                        <li className="foot-item">
                            <Link to='/locations' className='foot-links'>
                                Locations
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer;
