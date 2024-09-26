import "./Footer.css"

import CustomButton from "../Button/CustomButton"

import logo from "/footer-logo.svg"

function Footer() {
    return (
        <footer id="footer">
            <div className="footer-layout">
                <div className="footer-left-content">
                    <img className="footer-logo" src={logo} alt="logo" />
                    <div>
                        <p style={{marginBottom: "1em"}}>Fuel Your Studies with Fresh Sweets</p>
                        <CustomButton width="120px" content="Visit" />
                    </div>
                </div>
                <div className="vertical-line"></div>
                <div className="footer-middle-content">
                    <div>
                        <h2>Home</h2>
                        <ul>
                            <li>Offers</li>
                            <li>What students say</li>
                            <li>About</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                            <li>Follow</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Shop</h2>
                        <ul>
                            <li>Shop</li>
                            <li>Cart</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Visit</h2>
                        <a href="">Search for your city</a>
                    </div>
                </div>
                <div className="footer-right-content">
                    <h2>Sign Up</h2>
                    <form action="">
                        <input type="email" placeholder="Enter your email" />
                        <button>Sign Up</button>
                    </form>
                    <p>Sign up and recieve special offers, discounts, general news and more.</p>
                </div>
            </div>
            <hr />
        </footer>
    )
}

export default Footer