import "./FaqSection.css"

import FaqQuestion from "./FaqQuestion.tsx"

function FaqSection() {
    return (
        <section id="faq-section">
            <div className="faq-header">
                <h1>FAQ</h1>
            </div>
            <div className="faq-container">
                <FaqQuestion q="When are you open?" a="Usally Monday to Friday, 6:00 am to 11:00 pm every day."/>
                <FaqQuestion q="Do you take custom orders?" a="Absolutely! We specialize in custom cakes for graduation parties, birthdays and other events. Please provide at least 14 days notice for custom orders. You can contact us in-store or through email."/>
                <FaqQuestion q="Can I order online?" a="Yes, you can order online through our website on the shop page."/>
                <FaqQuestion q="Do you offer discounts for bulk orders?" a="Yes, we offer discounts on large or bulk orders. Please contact us for pricing details based on your specific needs."/>
                <FaqQuestion q="Do you offer gluten-free or vegan options?" a="Yes, we offer a selection of gluten-free and vegan items, including cakes, cookies, and bread. Check our menu for details."/>
                <FaqQuestion q="What payment methods do you accept?" a="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit at elit nec aliquet. Cras dapibus ipsum magna, nec porta orci finibus eget."/>
                <FaqQuestion q="Is it free to sign up?" a="Yes! So you should do so now and get 50% off your first order."/>
            </div>
            <p style={{textAlign: "center"}}>If you have more questions, don't hesitate to<br /> contact us at <span className="underline link"><a href="mailto:info@dosanddoughs.com">info@dosanddoughs.com</a></span></p>
        </section>
    )
}

export default FaqSection