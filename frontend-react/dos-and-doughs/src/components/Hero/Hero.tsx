import './Hero.css'

const heroImg = '/hero-img.png'

import CustomButton from '../Button/CustomButton.tsx'
import VisualBox from '../VisualBox/VisualBox.tsx'
import SectionDivider from '../SectionDivider/SectionDivider.tsx'

function Hero() {
  return (
    <>
      <section id='hero'>
        <div className='hero-text'>
          <div>
            <SectionDivider />
            <h1>
              Fuel Your Studies
              <br />
              with Fresh Sweets
            </h1>
          </div>
          <div>
            <h2 className='bold'>Have a taste today!</h2>
            <p>
              Whether you're in a rush or need a spot to focus, we've got the comfort and
              convenience every student needs.
            </p>
          </div>
          <CustomButton
            href='#'
            content='&#9826;&nbsp;&nbsp;ORDER NOW'
            width='200px'
            shadow='left'
          />
        </div>
        <div style={{ position: 'relative' }}>
          <div className='img-container'>
            <img className='hero-img img-styling' src={heroImg} alt='hero image' />
          </div>
          <VisualBox
            width='860px'
            height='95px'
            right='0px'
            left='unset'
            top='unset'
            bottom='180px'
          />
          <VisualBox
            width='960px'
            height='70px'
            right='0px'
            left='unset'
            top='unset'
            bottom='80px'
          />
        </div>
      </section>
    </>
  )
}

export default Hero
