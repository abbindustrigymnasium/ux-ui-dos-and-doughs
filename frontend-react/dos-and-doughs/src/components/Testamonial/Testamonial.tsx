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
                <TestamonialItem layout="1" vid="1" quote="I love the way you make dough. It&rsquo;s so easy to make and it&rsquo;s so delicious." name="Name"/>
                <TestamonialItem layout="2" vid="2" quote="I love the way you make dough. It&rsquo;s so easy to make and it&rsquo;s so delicious." name="Name"/>
            </div>
            <div className="extra-quotes-container">
                <ul>
                    <li><p>“Quote“<br /><span>-&nbsp;&nbsp;Name</span></p></li>
                    <li><p>“Quote“<br /><span>-&nbsp;&nbsp;Name</span></p></li>
                    <li><p>“Quote“<br /><span>-&nbsp;&nbsp;Name</span></p></li>
                    <li><p>“Quote“<br /><span>-&nbsp;&nbsp;Name</span></p></li>
                </ul>
            </div>
            <div id="mask-animation-close-trigger"></div>
        </section>
    )
}

export default Testamonial