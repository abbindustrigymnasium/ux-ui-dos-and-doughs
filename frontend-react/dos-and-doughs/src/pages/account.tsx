import Login from "../components/Login/Login"
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Account() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Do's & Doughs | Account</title>
            </Helmet>
            <Login />
        </HelmetProvider>
    )
}

export default Account