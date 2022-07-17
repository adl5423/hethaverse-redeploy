import React, { useState } from 'react';
import './Topbar.scss';
import { ReactComponent as Logo } from "./images/HethaverseLogoGraphic.svg";
import { Link } from 'react-router-dom';
import Wallet from './Web3/Wallet.js'

function Topbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    /* const showButton = () => {
        setButton(true);
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton); */

    return (
        <>
            <nav className="navbar">
                <div className="top-bar">
                    <div className="top-bar-container">
                        <div className="logo-section">
                            <Link to='/' className="top-bar-logo">
                                <Logo />
                            </Link>
                            <h1 className="top-bar-logo-text">
                                Hethaverse
                            </h1>
                            <div className="wallet-container">
                                <Wallet />
                            </div>
                        </div>

                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <hr className='horizontal' />
                            <li className='nav-item'>
                                <Link
                                    to='/provider'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Provider
                                </Link>
                            </li>
                            <hr className='horizontal' />
                            <li className='nav-item'>
                                <Link
                                    to='/patient'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Patient
                                </Link>
                            </li>
                            <hr className='horizontal' />
                            <li className='nav-item'>
                                <Link
                                    to='/sponsor'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Sponsor
                                </Link>
                            </li>
                            <hr className='horizontal' />
                            <li className='nav-item'>
                                <Link
                                    to='/educational'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Educational
                                </Link>
                            </li>
                            <hr className='horizontal' />
                            <li className='nav-item'>
                                <Link
                                    to='/financial-planning'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Financial Planning
                                </Link>
                            </li>
                            <hr className='horizontal' />
                            <li className='nav-item'>
                                <Link
                                    to='/find-us'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Find Us
                                </Link>
                            </li>
                            <hr className='horizontal' />
                            <li className='nav-item'>
                                <Link
                                    to='/support'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Support
                                </Link>
                            </li>
                            <hr className='horizontal' />
                            <li className='nav-item'>
                                <Link
                                    to='/shopping'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Shopping
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Topbar;
