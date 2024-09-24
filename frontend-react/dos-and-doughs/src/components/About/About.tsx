import './About.css'

const scriptText = "/script-text.svg"
const scriptLogo = "/script-logo.svg"

import SectionDivider from "../SectionDivider/SectionDivider.tsx"

function About() {
    return (
        <section id="about">
            <div className="about-header">
                <div>
                    <SectionDivider />
                    <h1>About Us</h1>
                </div>
                <img className="script-text" src={scriptText} alt="script text" />
            </div>
            <div className="about-container">
                <div className='about-grid'>
                    <div>
                        <h2>01</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit at elit nec aliquet. Cras dapibus ipsum magna, nec porta orci finibus eget.</p>
                    </div>
                    <div>
                        <h2>02</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit at elit nec aliquet. Cras dapibus ipsum magna, nec porta orci finibus eget.</p>
                    </div>
                    <div>
                        <h2>03</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit at elit nec aliquet. Cras dapibus ipsum magna, nec porta orci finibus eget.</p>
                    </div>
                    <div>
                        <h2>04</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit at elit nec aliquet. Cras dapibus ipsum magna, nec porta orci finibus eget.</p>
                    </div>
                </div>
                <img className='script-logo' src={scriptLogo} alt="script logo of dos and doughs" />
            </div>
        </section>
    )
}

export default About