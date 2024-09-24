import "./Follow.css"

import instagram from "/social-media-icons/instagram.svg"
import facebook from "/social-media-icons/facebook.svg"
import linkedin from "/social-media-icons/linkedin.svg"
import spotify from "/social-media-icons/spotify.svg"

function Follow() {
    return (
        <section id="follow">
            <hr style={{marginBottom: "4em"}} />
            <div className="follow-container">
                <h1>Follow Us</h1>
                <div className="follow-icons">
                    <div className="instagram"><img className="follow-icon" src={instagram} alt="instagram logo" /></div>
                    <div className="facebook"><img className="follow-icon" src={facebook} alt="facebook logo" /></div>
                    <div className="linkedin"><img className="follow-icon" src={linkedin} alt="linkedin logo" /></div>
                    <div className="spotify"><img className="follow-icon" src={spotify} alt="spotify logo" /></div>
                </div>
            </div>
        </section>
    )
}

export default Follow