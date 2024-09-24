import Hero from '../components/Hero/Hero.tsx'
import Checklist from '../components/Checklist/Checklist.tsx'
import SpecialOffers from '../components/SpecialOffers/SpecialOffers.tsx'
import Testamonial from '../components/Testamonial/Testamonial.tsx'
import MaskAnimation from '../components/MaskAnimation/MaskAnimation.tsx'
import About from '../components/About/About.tsx'
import FAQ from '../components/FaqSection/FaqSection.tsx'
import Follow from '../components/Follow/Follow.tsx'

function Home() {
    return (
        <>
            <Hero />
            <Checklist />
            <SpecialOffers />
            <MaskAnimation />
            <Testamonial />
            <About />
            <FAQ />
            <Follow />
        </>
    )
}

export default Home