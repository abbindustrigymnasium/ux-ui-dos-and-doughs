import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const accountIcon = '/account-icon.svg'
const navDropdownArrow = '/nav-dropdown-arrow.svg'

function FixedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <nav className="fixed-navbar">
                <div className="navbar-links">
                    <ul>
                        <li className="home-nav-wrapper">
                            <menu className="nav-dropdown" style = {{opacity: isMenuOpen ? "1" : "0", pointerEvents: isMenuOpen ? "auto" : "none"}} onMouseEnter={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)}>
                                <a className="link-inv" href="#special-offers">Offers</a>
                                <a className="link-inv" href="#what-students-say">What students say</a>
                                <a className="link-inv" href="#">About</a>
                                <a className="link-inv" href="#">Partners</a>
                                <a className="link-inv" href="#">FAQ</a>
                                <a className="link-inv" href="#">Contact</a>
                                <a className="link-inv" href="#">Follow</a>
                            </menu>
                            <div className="nav-home link-inv" onMouseEnter={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)}>
                                <Link to="/" className='current'>Home</Link>
                                <img className="nav-dropdown-arrow" src={navDropdownArrow} alt="nav dropdown arrow" />
                            </div>
                        </li>
                        <li><Link to="/shop" className='link-inv'>Shop</Link></li>
                        <li><Link to="/visit" className='link-inv'>Visit</Link></li>
                    </ul>
                    <div className="vertical-line"></div>
                    <div className="account-nav">
                        <img className="account-icon" src={accountIcon} alt="account icon" />
                        <a className="link-inv" href="#">Account</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default FixedNavbar
