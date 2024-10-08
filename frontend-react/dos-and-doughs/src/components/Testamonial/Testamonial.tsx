import "./Testamonial.css"
import TestamonialItem from "./TestamonialItem/TestamonialItem"

function Testamonial() {
    return (
        <section id="what-students-say">
            <div className="testamonial-header">
                <h1>What students say</h1>
            </div>
            <div id="mask-animation-trigger"></div>
            <div className="testamonial-container">
                <TestamonialItem layout="1" vid="1" quote="It&rsquo;s so much easier to study when you have a nice reliable place such as dos and doughs." name="Siri"/>
                <TestamonialItem layout="2" vid="2" quote="The sweets you make are incredible! Being able to pick one up right after class is the perfect way to end a day." name="Kevin"/>
            </div>
            <div className="extra-quotes-container">
                <ul>
                    <li><p>“Really good“<br /><span>-&nbsp;&nbsp;Eric</span></p></li>
                    <li><p>“Woah“<br /><span>-&nbsp;&nbsp;Alwin</span></p></li>
                    <li><p>“Crazy“<br /><span>-&nbsp;&nbsp;Hannes</span></p></li>
                </ul>
            </div>
            <div id="mask-animation-close-trigger"></div>
        </section>
    )
}

export default Testamonial
