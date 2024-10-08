import Signup from "../components/Login/Signup"
import { Helmet, HelmetProvider } from 'react-helmet-async';

function SignupPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Do's & Doughs | Signup</title>
            </Helmet>
            <Signup />
        </HelmetProvider>
    )
}

export default SignupPage