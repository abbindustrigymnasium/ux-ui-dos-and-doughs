import "./FaqSection.css"

import FaqQuestion from "./FaqQuestion.tsx"

function FaqSection() {
    return (
        <section id="faq-section">
            <div className="faq-header">
                <h1>FAQ</h1>
            </div>
            <div className="faq-container">
                <FaqQuestion q="Question" a="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit at elit nec aliquet. Cras dapibus ipsum magna, nec porta orci finibus eget."/>
                <FaqQuestion q="Question" a="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit at elit nec aliquet. Cras dapibus ipsum magna, nec porta orci finibus eget."/>
                <FaqQuestion q="Question" a="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit at elit nec aliquet. Cras dapibus ipsum magna, nec porta orci finibus eget."/>
                <FaqQuestion q="Question" a="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit at elit nec aliquet. Cras dapibus ipsum magna, nec porta orci finibus eget."/>
                <FaqQuestion q="Question" a="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit at elit nec aliquet. Cras dapibus ipsum magna, nec porta orci finibus eget."/>
            </div>
            <p style={{textAlign: "center"}}>If you have more questions, don't hesitate to<br /> contact us at <span className="underline link"><a href="mailto:info@dosanddoughs.com">info@dosanddoughs.com</a></span></p>
        </section>
    )
}

export default FaqSection