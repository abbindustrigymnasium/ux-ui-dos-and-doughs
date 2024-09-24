import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/home.tsx'
import Shop from './pages/shop.tsx'
import Visit from './pages/visit.tsx'

import Layout from './layout.tsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='visit' element={<Visit />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

/*

//import { useRef, useEffect } from 'react';

import './App.css'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

//import { ReactLenis, useLenis } from 'lenis/react'

import Navbar from './components/Navbar/Navbar.tsx'
import FixedNavbar from './components/Navbar/FixedNavbar.tsx'
import Hero from './components/Hero/Hero.tsx'
import Checklist from './components/Checklist/Checklist.tsx'
import SpecialOffers from './components/SpecialOffers/SpecialOffers.tsx'
import Testamonial from './components/Testamonial/Testamonial.tsx'

function App() {
  useGSAP(() => {
    gsap.fromTo(".fixed-navbar", {
      opacity: 0,
      y: -20,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#special-offers",
        toggleActions: "play none none reverse",
      },
      ease: "power1.inOut",
    });
  });

  return (
    <>
      <Navbar />
      <FixedNavbar />
      <main>
        <Hero />
        <Checklist />
        <SpecialOffers />
        <Testamonial />
      </main>
    </>
  )
}

export default App

*/
