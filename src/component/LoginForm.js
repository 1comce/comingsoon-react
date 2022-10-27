import React from 'react';
export default function LoginForm() {
    return (
        <div className="login-js">
            <div className="input-form">
                <button
                    className="btn btn-danger float-right font-15px btn-close"
                    type="button"
                    onClick={() => {
                        document.querySelector('.login-js').classList.remove('open-popup');
                    }}
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
                                onClick={() => {
                                    document.querySelector('#tab-login').classList.add('active');
                                    document.querySelector('#tab-register').classList.remove('active');
                                    document.querySelector('#pills-login').classList.add('active', 'show');
                                    document.querySelector('#pills-register').classList.remove('active', 'show');
                                }}
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
                                onClick={() => {
                                    document.querySelector('#tab-register').classList.add('active');
                                    document.querySelector('#tab-login').classList.remove('active');
                                    document.querySelector('#pills-register').classList.add('active', 'show');
                                    document.querySelector('#pills-login').classList.remove('active', 'show');
                                }}
                            >
                                Register
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div
                            className="tab-pane fade show active"
                            id="pills-login"
                            role="tabpanel"
                            aria-labelledby="tab-login"
                        >
                            <form>
                                <div className="text-center mb-3 ">
                                    <p className="dark-theme">Sign in with:</p>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-facebook-f dark-theme font-15px"></i>
                                    </button>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-google dark-theme font-15px"></i>
                                    </button>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-twitter dark-theme font-15px"></i>
                                    </button>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-github dark-theme font-15px"></i>
                                    </button>
                                </div>
                                <p className="text-center dark-theme">or:</p>
                                <div className="form-outline mb-4">
                                    <label className="form-label dark-theme font-15px" htmlFor="loginName">
                                        Email or username
                                    </label>
                                    <input
                                        type="email"
                                        id="loginName"
                                        className="form-control font-15px border-dark rounded"
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label dark-theme font-15px" htmlFor="loginPassword">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="loginPassword"
                                        className="form-control font-15px border-dark rounded"
                                    />
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <div className="form-check mb-3 mb-md-0">
                                            <input
                                                className="form-check-input font-15px border-dark rounded"
                                                type="checkbox"
                                                value=""
                                                id="loginCheck"
                                            />
                                            <label
                                                className="form-check-label dark-theme font-15px"
                                                htmlFor="loginCheck"
                                            >
                                                {' '}
                                                Remember me{' '}
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <a href="#!" className="dark-theme font-15px">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mb-4 font-15px">
                                    Sign in
                                </button>
                                <div className="text-center">
                                    <p className="dark-theme">
                                        Not a member?{' '}
                                        <a
                                            href="#!"
                                            onClick={() => {
                                                document.querySelector('#tab-register').classList.add('active');
                                                document.querySelector('#tab-login').classList.remove('active');
                                                document
                                                    .querySelector('#pills-register')
                                                    .classList.add('active', 'show');
                                                document
                                                    .querySelector('#pills-login')
                                                    .classList.remove('active', 'show');
                                            }}
                                        >
                                            Register
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-register"
                            role="tabpanel"
                            aria-labelledby="tab-register"
                        >
                            <form>
                                <div className="text-center mb-3">
                                    <p className="dark-theme">Sign up:</p>
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label dark-theme font-15px" htmlFor="registerName">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="registerName"
                                        className="form-control font-15px border-dark rounded"
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label dark-theme font-15px" htmlFor="registerUsername">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        id="registerUsername"
                                        className="form-control font-15px border-dark rounded"
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label dark-theme font-15px" htmlFor="registerEmail">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="registerEmail"
                                        className="form-control font-15px border-dark rounded"
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label dark-theme font-15px" htmlFor="registerPassword">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="registerPassword"
                                        className="form-control font-15px border-dark rounded"
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label dark-theme font-15px" htmlFor="registerRepeatPassword">
                                        Repeat password
                                    </label>
                                    <input
                                        type="password"
                                        id="registerRepeatPassword"
                                        className="form-control font-15px border-dark rounded"
                                    />
                                </div>
                                <div className="form-check d-flex justify-content-center mb-4">
                                    <input
                                        className="form-check-input me-2 font-15px border-dark rounded"
                                        type="checkbox"
                                        value=""
                                        id="registerCheck"
                                        aria-describedby="registerCheckHelpText"
                                    />
                                    <label className="form-check-label dark-theme font-15px" htmlFor="registerCheck">
                                        I have read and agree to the terms
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mb-3 font-15px">
                                    Sign up
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
