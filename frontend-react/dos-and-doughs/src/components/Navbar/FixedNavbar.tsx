import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollToHashElement from '../ScrollToHashElement'

import './Navbar.css'

const accountIcon = '/account-icon.svg'
const navDropdownArrow = '/nav-dropdown-arrow.svg'

function FixedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className='fixed-navbar'>
        <ScrollToHashElement />
        <div className='navbar-links'>
          <ul>
            <li className='home-nav-wrapper'>
              <menu
                className='nav-dropdown'
                style={{
                  opacity: isMenuOpen ? '1' : '0',
                  pointerEvents: isMenuOpen ? 'auto' : 'none',
                }}
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <Link to='/#special-offers' className='link'>
                  Offers
                </Link>
                <Link to='/#what-students-say' className='link'>
                  What students say
                </Link>
                <Link to='/#about' className='link'>
                  About
                </Link>
                <Link to='/#faq-section' className='link'>
                  FAQ
                </Link>
                <Link to='/#follow' className='link'>
                  Follow Us
                </Link>
              </menu>
              <div
                className='nav-home link-inv'
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <Link to='/' className='current'>
                  Home
                </Link>
                <img
                  className='nav-dropdown-arrow'
                  src={navDropdownArrow}
                  alt='nav dropdown arrow'
                />
              </div>
            </li>
            <li>
              <Link to='/shop' className='link-inv'>
                Shop
              </Link>
            </li>
            <li>
              <Link to='/visit' className='link-inv'>
                Visit
              </Link>
            </li>
          </ul>
          <div className='vertical-line'></div>
          <div className='account-nav'>
            <img className='account-icon' src={accountIcon} alt='account icon' />
            <Link to={'/account/login'} className='link-inv'>
              Account
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default FixedNavbar
