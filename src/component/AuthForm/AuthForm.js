import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
export default function AuthForm() {
    const authFormHandle = () => {
        document.querySelector('.auth-form').classList.remove('open-popup');
    };
    const loginFormHandle = () => {
        document.querySelector('#tab-login').classList.add('active');
        document.querySelector('#tab-register').classList.remove('active');
        document.querySelector('#pills-login').classList.add('active', 'show');
        document.querySelector('#pills-register').classList.remove('active', 'show');
    };
    const registerFormHandle = () => {
        document.querySelector('#tab-register').classList.add('active');
        document.querySelector('#tab-login').classList.remove('active');
        document.querySelector('#pills-register').classList.add('active', 'show');
        document.querySelector('#pills-login').classList.remove('active', 'show');
    };

    return (
        <div className="auth-form">
            <div className="input-form">
                <button
                    className="btn btn-danger float-right font-15px btn-close"
                    type="button"
                    onClick={authFormHandle}
                ></button>
                <div className="pill-content">
                    <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a
                                className="nav-link font-2rem active"
                                id="tab-login"
                                data-mdb-toggle="pill"
                                href="#pills-login"
                                role="tab"
                                aria-controls="pills-login"
                                aria-selected="true"
                                onClick={loginFormHandle}
                            >
                                Login
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a
                                className="font-2rem nav-link"
                                id="tab-register"
                                data-mdb-toggle="pill"
                                href="#pills-register"
                                role="tab"
                                aria-controls="pills-register"
                                aria-selected="false"
                                onClick={registerFormHandle}
                            >
                                Register
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <LoginForm />
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
