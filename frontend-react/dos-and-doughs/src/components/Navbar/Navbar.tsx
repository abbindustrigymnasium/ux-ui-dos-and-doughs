import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { Link } from 'react-router-dom'

import './Navbar.css';

const logo = "/logo.svg";
const accountIcon = "/account-icon.svg";
const navDropdownArrow = "/nav-dropdown-arrow.svg";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navBarUlScope = useRef(null);

    useGSAP(() => {
        gsap.fromTo("li", {
            opacity: 0,
            y: -10,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power1.inOut",
        });
    }, {scope: navBarUlScope});

    useGSAP(() => {
        gsap.fromTo(".logo", {
            opacity: 0,
            x: -20,
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power1.inOut",
        });

        gsap.fromTo(".account-nav", {
            opacity: 0,
            x: 20,
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power1.inOut",
        });

        gsap.fromTo(".vertical-line", {
            opacity: 0,
            y: -10,
        }, {
            opacity: 1,
            y: 0,
            duration: 2,
            delay: 0.5,
            ease: "power1.inOut",
        })
    });

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="link"><img className="logo" src={logo} alt="dos and doughs logo" /></Link>
                <div className="navbar-links">
                    <ul ref={navBarUlScope}>
                        <li className="home-nav-wrapper">
                            <menu className="nav-dropdown" style = {{opacity: isMenuOpen ? "1" : "0", pointerEvents: isMenuOpen ? "auto" : "none"}} onMouseEnter={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)}>
                                <a className="link" href="#special-offers">Offers</a>
                                <a className="link" href="#what-students-say">What students say</a>
                                <a className="link" href="#">About</a>
                                <a className="link" href="#">Partners</a>
                                <a className="link" href="#">FAQ</a>
                                <a className="link" href="#">Contact</a>
                                <a className="link" href="#">Follow</a>
                            </menu>
                            <div className="nav-home link" onMouseEnter={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)}>
                                <Link to="/" className='current'>Home</Link>
                                <img className="nav-dropdown-arrow" src={navDropdownArrow} alt="nav dropdown arrow" />
                            </div>
                        </li>
                        <li><Link to="/shop" className='link'>Shop</Link></li>
                        <li><Link to="/visit" className='link'>Visit</Link></li>
                    </ul>
                    <div className="vertical-line" ></div>
                    <div className="account-nav">
                        <img className="account-icon" src={accountIcon} alt="account icon" />
                        <Link to="/account" className="link">Account</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar