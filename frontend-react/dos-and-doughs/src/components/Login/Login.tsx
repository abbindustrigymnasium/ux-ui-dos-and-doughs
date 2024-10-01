import './Login.css'

import { useState } from 'react'

function Login() {
    const [type, setType] = useState('login')

    return (
        <>
            {type == 'login' && (
                <div className='login-container'>
                    <h1 style={{textAlign: 'center', marginBottom: '1em'}}>Login</h1>
                    <div className='login-form'>
                        <form action="">
                            <input type="email" placeholder="Email" />
                            <div className="vertical-line"></div>
                            <input type="password" placeholder="Password"/>
                            <button className='login-button'>Login</button>
                        </form>
                        <div className='login-methods'>
                            <button className="gsi-material-button">
                                <div className="gsi-material-button-state"></div>
                                <div className="gsi-material-button-content-wrapper">
                                    <div className="gsi-material-button-icon">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlnsXlink="http://www.w3.org/1999/xlink" style={{display: "block"}}>
                                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                        <path fill="none" d="M0 0h48v48H0z"></path>
                                    </svg>
                                    </div>
                                    <span className="gsi-material-button-contents">Continue with Google</span>
                                    <span style={{display: "none"}}>Continue with Google</span>
                                </div>
                            </button>
                            <button className='facebook-login-button'>
                                <img src="/social-media-icons/facebook.svg" />
                                <span>Continue with Facebook</span>
                            </button>
                        </div>
                    </div>
                    <div className='account-benefits'>
                        <div>
                            <h2>Benefits of having an account:</h2>
                            <ul>
                                <li>Save your favorite order as a preset</li>
                                <li>Get access to exclusive discounts and offers, inlcuding 50% off on your first order</li>
                            </ul>
                        </div>
                    </div>
                    <p style={{textAlign: 'center'}}>Don't have an account? <a className='link underline' onClick={() => setType('signup')}>Sign up</a></p>
                </div>
            )}

            {type == 'signup' && (
                <div className='login-container'>
                    <h1 style={{textAlign: 'center', marginBottom: '1em'}}>Sign up</h1>
                    <div className='login-form'>
                        <form action="">
                            <input type="email" placeholder="Email" />
                            <div className="vertical-line"></div>
                            <input type="password" placeholder="Password"/>
                            <button className='login-button'>Sign up</button>
                        </form>
                        <div className='login-methods'>
                            <button className="gsi-material-button">
                                <div className="gsi-material-button-state"></div>
                                <div className="gsi-material-button-content-wrapper">
                                    <div className="gsi-material-button-icon">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlnsXlink="http://www.w3.org/1999/xlink" style={{display: "block"}}>
                                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                        <path fill="none" d="M0 0h48v48H0z"></path>
                                    </svg>
                                    </div>
                                    <span className="gsi-material-button-contents">Continue with Google</span>
                                    <span style={{display: "none"}}>Continue with Google</span>
                                </div>
                            </button>
                            <button className='facebook-login-button'>
                                <img src="/social-media-icons/facebook.svg" />
                                <span>Continue with Facebook</span>
                            </button>
                        </div>
                    </div>
                    <p style={{textAlign: 'center'}}>Already have an account? <a className='link underline' onClick={() => setType('login')}>Log in</a></p>
                </div>
            )}
        </>
    )
}

export default Login