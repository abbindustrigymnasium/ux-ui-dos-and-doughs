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
                    <h1>Fun facts about us</h1>
                </div>
                <img className="script-text" src={scriptText} alt="script text" />
            </div>
            <div className="about-container">
                <div className='about-grid'>
                    <div>
                        <h2>01 - The Beginning</h2>
                        <p>Dos and Doughs was founded in 1723 at Cambridge University. In the early years, the bakery primarily served the town of Cambridge, but we eventually moved to campus and started catering to the students and staff.</p>
                    </div>
                    <div>
                        <h2>02 - The Name</h2>
                        <p>Once the local Cambridge Bakery moved to campus, the owner wanted a new catchy name to make the shop stand out and further market to students. After many minutes of deliberation, Alwin Forslund came up with the name "Dos and Doughs".</p>
                    </div>
                    <div>
                        <h2>03 - The Pastries</h2>
                        <p>Our most popular pastry is the chocolate chip cookie. We sell 4.2 trillion cookies every year. The cookies are baked using an ancient, secret recipe from 1493, when Columbus rediscovered the american contintent.</p>
                    </div>
                    <div>
                        <h2>04 - The Future</h2>
                        <p>We hope to expand our business in the future and we hope to serve joy at over 100 locations at the end of the year. In order for students to afford our pastries, we will attempt to keep our prices low amid inflation.</p>
                    </div>
                </div>
                <img className='script-logo' src={scriptLogo} alt="script logo of dos and doughs" />
            </div>
        </section>
    )
}

export default About