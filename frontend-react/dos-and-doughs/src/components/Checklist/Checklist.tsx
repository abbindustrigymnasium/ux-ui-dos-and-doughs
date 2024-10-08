import './Checklist.css'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger, useGSAP)

const checkIcon = '/check-icon.svg'
const scriptArrow = '/script-arrow.svg'

import CustomButton from '../Button/Button.tsx'

function Checklist() {
  useGSAP(() => {
    gsap.fromTo(
      '.checklist-item',
      {
        opacity: 0,
        x: -100,
      },
      {
        scrollTrigger: {
          trigger: '.checklist-item',
          start: '-500px bottom',
          scrub: 0.5,
        },
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power1.inOut',
      },
    )
  })

  return (
    <section id='checklist'>
      <h1>All for your convenience...</h1>
      <div className='checklist-layout'>
        <div className='checklist-item'>
          <hr />
          <div className='item-content'>
            <h2>Fast delivery</h2>
            <div className='item-columns'>
              <p>Order from your school and get your delivery within 5-10 hours.</p>
              <img className='check-icon' src={checkIcon} alt='check icon' />
            </div>
          </div>
          <hr />
        </div>
        <div className='checklist-item'>
          <hr />
          <div className='item-content'>
            <h2>Every tool you need</h2>
            <div className='item-columns'>
              <p>Power outlets at every table and free Wi-Fi for your fact researching.</p>
              <img className='check-icon' src={checkIcon} alt='check icon' />
            </div>
          </div>
          <hr />
        </div>
        <div className='checklist-item'>
          <hr />
          <div className='item-content'>
            <h2>Open early morning, late night</h2>
            <div className='item-columns' style={{ marginBottom: '2em' }}>
              <p>
                Come and relax or spice up your productivity with a sweet, we are open 17 hours a
                day.
              </p>
              <img className='check-icon' src={checkIcon} alt='check icon' />
            </div>
            <CustomButton href='/visit' content='VISIT' width='140px' shadow='left' />
          </div>
          <hr />
        </div>
        <div></div>
        <div></div>
      </div>
      <img src={scriptArrow} alt='script arrow' />
    </section>
  )
}

export default Checklist
