import Login from "../components/Login/Login"
import { Helmet, HelmetProvider } from 'react-helmet-async';

function LoginPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Do's & Doughs | Login</title>
            </Helmet>
            <Login />
        </HelmetProvider>
    )
}

export default LoginPage