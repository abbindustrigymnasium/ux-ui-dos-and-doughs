import Hero from '../components/Hero/Hero.tsx'
import Checklist from '../components/Checklist/Checklist.tsx'
import SpecialOffers from '../components/SpecialOffers/SpecialOffers.tsx'
import Testamonial from '../components/Testamonial/Testamonial.tsx'
import MaskAnimation from '../components/MaskAnimation/MaskAnimation.tsx'
import About from '../components/About/About.tsx'
import FAQ from '../components/FaqSection/FaqSection.tsx'
import Follow from '../components/Follow/Follow.tsx'

import { Helmet, HelmetProvider } from 'react-helmet-async';

function Home() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Do's & Doughs</title>
            </Helmet>
            <Hero />
            <Checklist />
            <SpecialOffers />
            <div style={{position: 'relative', zIndex: '1'}}>
                <MaskAnimation />
                <Testamonial />
            </div>
            <About />
            <FAQ />
            <Follow />
        </HelmetProvider>
    )
}

export default Home
