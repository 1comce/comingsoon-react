import React from 'react';

import { useRef, useState, useEffect, useContext } from 'react';
export default function LoginForm() {
    const userRef = useRef();
    const errRef = useRef();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current?.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [username, password]);
    const handleSubmit = async (e) => {
        e.preventDefault();
    };
    return (
        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            <form onSubmit={handleSubmit}>
                <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
                    {errMsg}
                </p>
                <div className="text-center mb-3 ">
                    <p className="dark-theme font-2rem">Sign in with:</p>
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
                <p className="text-center dark-theme font-2rem">or:</p>
                <div className="form-outline mb-4">
                    <label className="form-label dark-theme font-15px" htmlFor="loginName">
                        Username:
                    </label>
                    <input
                        type="email text"
                        id="loginName"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control font-15px border-dark rounded"
                        value={username}
                        required
                    />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label dark-theme font-15px" htmlFor="loginPassword">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="loginPassword"
                        className="form-control font-15px border-dark rounded"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        value={password}
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
                            <label className="form-check-label dark-theme font-15px" htmlFor="loginCheck">
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
                    {/* react router */}
                    <p className="dark-theme font-15px">
                        Not a member?{' '}
                        <a
                            href="#!"
                            onClick={() => {
                                document.querySelector('#tab-register').classList.add('active');
                                document.querySelector('#tab-login').classList.remove('active');
                                document.querySelector('#pills-register').classList.add('active', 'show');
                                document.querySelector('#pills-login').classList.remove('active', 'show');
                            }}
                        >
                            Register
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
}
