import React, { useState, useEffect } from 'react';

const AuthTabs = () => {
    const [isLoginActive, setIsLoginActive] = useState(true);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 992);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const LoginForm = () => (
        <form className="auth-form">
            <p className="auth-title">LOGIN</p>
            {/*<div className="social-icons">*/}
            {/*    <i className="fab fa-facebook-f"></i>*/}
            {/*    <i className="fab fa-google"></i>*/}
            {/*    <i className="fab fa-twitter"></i>*/}
            {/*    <i className="fab fa-github"></i>*/}
            {/*</div>*/}
            {/*<p className="or-text">or:</p>*/}
            <div className="userCredentials">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last Name" />
            </div>

            <input type="email" placeholder="Email" />
            <div className="form-options">
                {/*<label><input type="checkbox" /> Remember me</label>*/}
                {/*<a href="#">Forgot password?</a>*/}
            </div>
            <button className="submit-btn">SIGN IN</button>
            <p className="auth-footer">Already a member? <a href="#">Login</a></p>
        </form>
    );

    const CharityForm = () => (
        <form className="auth-form">
            <p className="auth-title">CHARITY</p>
            {/*<div className="social-icons">*/}
            {/*    <i className="fab fa-facebook-f"></i>*/}
            {/*    <i className="fab fa-google"></i>*/}
            {/*    <i className="fab fa-twitter"></i>*/}
            {/*    <i className="fab fa-github"></i>*/}
            {/*</div>*/}
            {/*<p className="or-text">or:</p>*/}
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Services Provided" />
            <label className="terms"><input type="checkbox" /> I have read and agree to the terms</label>
            <button className="submit-btn">PROCEED</button>
        </form>
    );

    return (
        <div className="auth-container">
            <div className="sign_charityHeader">
                <p>JOIN THE COMMUNITY !</p>
            </div>
            {!isLargeScreen && (
                <div className="auth-tabs">
                    <button
                        className={`tab ${isLoginActive ? 'active' : ''}`}
                        onClick={() => setIsLoginActive(true)}
                        id="formText-Login"
                    >
                        USER
                    </button>
                    <button
                        className={`tab ${!isLoginActive ? 'active' : ''}`}
                        onClick={() => setIsLoginActive(false)}
                        id="formText-Charity"
                    >
                        CHARITY
                    </button>
                </div>
            )}

            <div className={`auth-content ${isLargeScreen ? 'dual-column' : ''}`}>
                {isLargeScreen ? (
                    <>
                        <LoginForm />
                        <CharityForm />
                    </>
                ) : (
                    isLoginActive ? <LoginForm /> : <CharityForm />
                )}
            </div>
        </div>
    );
};

export default AuthTabs;
