import "./Footer.css"

import CustomButton from "../NiceButton/NiceButton"

import logo from "/footer-logo.svg"

import { Link } from 'react-router-dom'
import ScrollToHashElement from "../ScrollToHashElement";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Footer() {
    let footer : any;

    if (document.getElementById('footer')) {
        footer = document.getElementById('footer');
    }

    useGSAP(() => {
        setTimeout(() => {
            gsap.fromTo(footer, {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: footer,
                    toggleActions: "play none none reverse",
                },
                ease: "power1.inOut",
            });
        }, 1000);
    });

    return (
        <footer id="footer">
            <ScrollToHashElement />
            <div className="footer-layout">
                <div className="footer-left-content">
                    <img className="footer-logo" src={logo} alt="logo" />
                    <div>
                        <p style={{marginBottom: "1em"}}>Fuel Your Studies with Fresh Sweets</p>
                        <CustomButton width="120px" content="Visit" inv={true} />
                    </div>
                </div>
                <div className="vertical-line"></div>
                <div className="footer-middle-content">
                    <div>
                        <h2>Home</h2>
                        <ul>
                            <Link to="/#special-offers" className="link-inv"><li>Offers</li></Link>
                            <Link to="/#what-students-say" className="link-inv"><li>What students say</li></Link>
                            <Link to="/#about" className="link-inv"><li>About</li></Link>
                            <Link to="/#faq-section" className="link-inv"><li>FAQ</li></Link>
                            <Link to="/#follow" className="link-inv"><li>Follow</li></Link>
                        </ul>
                    </div>
                    <div>
                        <h2>Shop</h2>
                        <ul>
                            <Link to="/shop" className="link-inv"><li>Shop</li></Link>
                            <Link to="" className="link-inv"><li>Cart</li></Link>
                        </ul>
                    </div>
                    <div>
                        <h2>Visit</h2>
                        <Link to="/visit" className="link-inv">Search for your city</Link>
                    </div>
                </div>
                <div className="footer-right-content">
                    <h2>Sign Up</h2>
                    <form action="">
                        <input type="email" placeholder="Enter your email" />
                        <button>Sign Up</button>
                    </form>
                    <p style={{color: "var(--graphics-color-hover-light)", fontWeight: "600"}}>Sign up and recieve special offers, discounts, general news and more.</p>
                </div>
            </div>
            <hr />
            <p className="copyright-notice">© {(new Date().getFullYear())} Do's & Doughs</p>
        </footer>
    )
}

export default Footer