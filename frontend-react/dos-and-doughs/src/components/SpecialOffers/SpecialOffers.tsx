import './SpecialOffers.css'

const homeCake1 = "/offers-cake-1.png"
const homeCake2 = "/offers-cake-2.png"

import SectionDivider from '../SectionDivider/SectionDivider.tsx'
import CustomButton from '../Button/CustomButton.tsx'

function SpecialOffers() {
    return (
        <section id="special-offers">
            <div className="special-offers-header">
                <SectionDivider />
                <h1>*Special Offers*</h1>
            </div>
            <div className="offer-cards">
                <div className="offer-card">
                    <div className="img-overlay">
                        <p>Sign up and get <span className="bold">50% off</span> your first order.</p>
                        <CustomButton href="#" content="&#9826;&nbsp;&nbsp;JOIN" width="160px" shadow="left" inv="true"/>
                    </div>
                    <div className="img-container">
                        <img className="offer-img img-styling" src={homeCake1} alt="" />
                    </div>
                </div>
                <div className="offer-card">
                    <div className="img-overlay">
                        <p>Hire us for your graduation party!</p>
                        <CustomButton href="#" content="&#9826;&nbsp;&nbsp;EMAIL US" width="160px" shadow="left" inv="true"/>
                    </div>
                    <div className="img-container">
                        <img className="offer-img img-styling" src={homeCake2} alt="" />
                    </div>
                </div>
            </div>
            <div className="offer-shoplink">
                <h2>View our full shop to see what we offer.</h2>
                <CustomButton href="#" content="&#9826;&nbsp;&nbsp;SHOP" width="140px" shadow="left"/>
            </div>
        </section>
    )
}

export default SpecialOffers
