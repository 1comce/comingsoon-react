import React from 'react';
import { useRef, useState, useEffect } from 'react';
import './AuthStyles.css';
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export default function RegisterForm() {
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        userRef.current?.focus();
    }, []);
    useEffect(() => {
        setValidUsername(USER_REGEX.test(username));
    }, [username]);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
        setValidMatch(password === matchPassword);
    }, [password, matchPassword]);

    useEffect(() => {
        setErrMsg('');
    }, [username, password, matchPassword]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(username);
        const v2 = PWD_REGEX.test(password);
        if (!v1 || !v2) {
            setErrMsg('Invalid Entry');
            return;
        }
        console.log(username, password);
        setSuccess(true);
    };
    return (
        <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
            {success ? (
                //Route
                <section>
                    <h1 className="dark-theme align-item-center">Success!</h1>
                    <p>
                        <a
                            href="#pills-login"
                            onClick={() => {
                                document.querySelector('#tab-login').classList.add('active');
                                document.querySelector('#tab-register').classList.remove('active');
                                document.querySelector('#pills-login').classList.add('active', 'show');
                                document.querySelector('#pills-register').classList.remove('active', 'show');
                            }}
                        >
                            Sign In
                        </a>
                    </p>
                </section>
            ) : (
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
                        {errMsg}
                    </p>
                    <div className="text-center mb-3">
                        <p className="dark-theme font-2rem">Sign up:</p>
                    </div>
                    {/* <div className="form-outline mb-4">
                    <label className="form-label dark-theme font-15px" htmlFor="registerName">
                        Name
                    </label>
                    <input type="text" id="registerName" className="form-control font-15px border-dark rounded" />
                </div> */}
                    <div className="form-outline mb-4">
                        <label className="form-label dark-theme font-15px" htmlFor="username">
                            Username:
                            <span className={validUsername ? 'valid' : 'hide'}>
                                <i className="fa-solid fa-check"></i>
                            </span>
                            <span className={validUsername || !username ? 'hide' : 'invalid'}>
                                <i className="fa-solid fa-times"></i>
                            </span>
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            aria-invalid={validUsername ? 'false' : 'true'}
                            aria-describedby="uidnote"
                            onChange={(e) => setUsername(e.target.value)}
                            onFocus={() => {
                                setUsernameFocus(true);
                            }}
                            onBlur={() => {
                                setUsernameFocus(false);
                            }}
                            className="form-control font-15px border-dark rounded"
                        />
                        <p
                            id="uidnote"
                            className={usernameFocus && username && !validUsername ? 'instructions' : 'offscreen'}
                        >
                            <i class="fa fa-info-circle" aria-hidden="true"></i>
                            4 to 24 characters.
                            <br />
                            Must begin with a letter.
                            <br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label dark-theme font-15px" htmlFor="email">
                            Email:
                            <span className={validEmail ? 'valid' : 'hide'}>
                                <i className="fa-solid fa-check"></i>
                            </span>
                            <span className={validEmail || !email ? 'hide' : 'invalid'}>
                                <i className="fa-solid fa-times"></i>
                            </span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            aria-invalid={validEmail ? 'false' : 'true'}
                            aria-describedby="emailnote"
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => {
                                setEmailFocus(true);
                            }}
                            onBlur={() => {
                                setEmailFocus(false);
                            }}
                            className="form-control font-15px border-dark rounded"
                        />
                        <p id="emailnote" className={emailFocus && email && !validEmail ? 'instructions' : 'offscreen'}>
                            <i class="fa fa-info-circle" aria-hidden="true"></i>
                            Must be a valid email example@example.com
                        </p>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label dark-theme font-15px" htmlFor="password">
                            Password:
                            <span className={validPassword ? 'valid' : 'hide'}>
                                <i className="fa-solid fa-check"></i>
                            </span>
                            <span className={validPassword || !password ? 'hide' : 'invalid'}>
                                <i className="fa-solid fa-times"></i>
                            </span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            aria-invalid={validPassword ? 'false' : 'true'}
                            aria-describedby="pwdnote"
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                            className="form-control font-15px border-dark rounded"
                        />
                        <p id="pwdnote" className={passwordFocus && !validPassword ? 'instructions' : 'offscreen'}>
                            <i class="fa fa-info-circle" aria-hidden="true"></i>
                            8 to 24 characters.
                            <br />
                            Must include uppercase and lowercase letters, a number and a special character.
                            <br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span>{' '}
                            <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span>{' '}
                            <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label dark-theme font-15px" htmlFor="RepeatPassword">
                            Repeat password:
                            <span className={validMatch && matchPassword ? 'valid' : 'hide'}>
                                <i className="fa-solid fa-check"></i>
                            </span>
                            <span className={validMatch || !matchPassword ? 'hide' : 'invalid'}>
                                <i className="fa-solid fa-times"></i>
                            </span>
                        </label>
                        <input
                            type="password"
                            id="RepeatPassword"
                            onChange={(e) => setMatchPassword(e.target.value)}
                            required
                            aria-invalid={validMatch ? 'false' : 'true'}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                            className="form-control font-15px border-dark rounded"
                        />
                        <p
                            id="confirmnote"
                            className={matchFocus && !validMatch && matchPassword ? 'instructions' : 'offscreen'}
                        >
                            <i class="fa fa-info-circle" aria-hidden="true"></i>
                            Must match the first password input field.
                        </p>
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
            )}
        </div>
    );
}
