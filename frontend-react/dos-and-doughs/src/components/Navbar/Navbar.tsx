import { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP);

import { Link } from 'react-router-dom'
import ScrollToHashElement from "../ScrollToHashElement";

import './Navbar.css'

const logo = '/logo.svg'
const accountIcon = '/account-icon.svg'
const navDropdownArrow = '/nav-dropdown-arrow.svg'

function Navbar({ currentPage }: { currentPage: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navBarUlScope = useRef(null)

  useGSAP(
    () => {
      gsap.fromTo(
        'li',
        {
          opacity: 0,
          y: -10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power1.inOut',
        },
      )
    },
    { scope: navBarUlScope },
  )

  useGSAP(() => {
    gsap.fromTo(
      '.logo',
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power1.inOut',
      },
    )

    gsap.fromTo(
      '.account-nav',
      {
        opacity: 0,
        x: 20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power1.inOut',
      },
    )

    gsap.fromTo(
      '.vertical-line',
      {
        opacity: 0,
        y: -10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        delay: 0.5,
        ease: 'power1.inOut',
      },
    )
  })

  return (
    <>
      <nav className='navbar'>
        <ScrollToHashElement />
        <Link to='/' className='link'>
          <img className='logo' src={logo} alt='dos and doughs logo' />
        </Link>
        <div className='navbar-links'>
          <ul ref={navBarUlScope}>
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
                <Link to="#special-offers" className='link'>Offers</Link>
                <Link to="#what-students-say" className='link'>What students say</Link>
                <Link to="#about" className='link'>About</Link>
                <Link to="#faq-section" className='link'>FAQ</Link>
                <Link to="#follow" className='link'>Follow Us</Link>
              </menu>
              <div
                className='nav-home link'
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <Link to='/' className={currentPage === '/' ? 'underline' : 'link'}>
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
              <Link to='/shop' className={currentPage === '/shop' ? 'underline link' : 'link'}>
                Shop
              </Link>
            </li>
            <li>
              <Link to='/visit' className={currentPage === '/visit' ? 'underline link' : 'link'}>
                Visit
              </Link>
            </li>
          </ul>
          <div className='vertical-line'></div>
          <div className='account-nav'>
            <img className='account-icon' src={accountIcon} alt='account icon' />
            <Link to='/account' className={currentPage === '/account' ? 'underline link' : 'link'}>
              Account
            </Link>
          </div>
        </div>
      </nav>
      <nav className='mobile-navbar'>
        <ScrollToHashElement />
        <Link to='/' className='link'>
          <img className='logo' src={logo} alt='dos and doughs logo' />
        </Link>
        <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='hamburger-menu-wrapper'>
          <img src="/hamburger-menu.svg" alt="hamburger menu" className="hamburger-menu" style={{display: isMobileMenuOpen ? 'none' : 'block'}} />
          <img src="/close-icon.svg" alt="close icon" className="hamburger-menu" style={{display: isMobileMenuOpen ? 'block' : 'none'}} />
        </div>
        <div className='navbar-links' style={{display: isMobileMenuOpen ? 'flex' : 'none'}}>
          <ul ref={navBarUlScope}>
            <li>
              <Link to='/' className={currentPage === '/' ? 'underline' : 'link'}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/shop' className={currentPage === '/shop' ? 'underline link' : 'link'}>
                Shop
              </Link>
            </li>
            <li>
              <Link to='/visit' className={currentPage === '/visit' ? 'underline link' : 'link'}>
                Visit
              </Link>
            </li>
          </ul>
          <div className='account-nav'>
            <img className='account-icon' src={accountIcon} alt='account icon' />
            <Link to='/account' className={currentPage === '/account' ? 'underline link' : 'link'}>
              Account
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
