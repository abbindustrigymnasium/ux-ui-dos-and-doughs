import { useState } from 'react';
import navDropdownArrow from "/nav-dropdown-arrow.svg"

function FaqQuestion(p : any) {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const toggleAnswerVisibility = () => {
        setIsAnswerVisible(!isAnswerVisible);
    };

    return (
        <div>
            <div className="faq-question-container" onClick={toggleAnswerVisibility} style={{ cursor: 'pointer', display: "flex", justifyContent: "space-between" }}>
                <h2 style={{ display: "inline-block" }}>{p.q}</h2>
                <img
                    src={navDropdownArrow}
                    alt="arrow"
                    style={{ display: "inline-block", marginBottom: "1em", transform: isAnswerVisible ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                />
            </div>
            {isAnswerVisible && <p>{p.a}</p>}
        </div>
    )
}

export default FaqQuestion