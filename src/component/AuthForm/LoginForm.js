import { useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
const LoginForm = () => {
    const { setAuth, loginUser, persist, setPersist } = useAuth();
    const userRef = useRef();
    const errRef = useRef();
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: '',
    });
    const { username, password } = loginForm;
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        userRef.current?.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [username, password]);
    const onChangeLoginForm = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(loginForm);
            if (!response) throw new Error();
            if (response.data.success) {
                const accessToken = response?.data?.accessToken;
                setAuth({ username, password, accessToken });
                setLoginForm({ username: '', password: '' });
                setSuccess(true);
                // window.location.reload();
                document.querySelector('.auth-form').classList.remove('open-popup');
            } else {
                if (response.data) {
                    setErrMsg(response.data.message);
                } else setErrMsg('Login Failed');
            }
        } catch (error) {
            setErrMsg('No Server Response');
        }
        errRef.current?.focus();
    };
    const togglePersist = () => {
        setPersist((prev) => !prev);
    };
    useEffect(() => {
        localStorage.setItem('persist', persist);
    }, [persist]);
    return (
        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            {success ? (
                //Route
                <section>
                    <h1 className="dark-theme align-item-center">Login Success</h1>
                </section>
            ) : (
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
                            onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
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
                            onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                            value={password}
                            required
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
                                    onChange={togglePersist}
                                    checked={persist}
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
                    <button
                        disabled={!username || !password ? true : false}
                        type="submit"
                        className="btn btn-primary btn-block mb-4 font-15px"
                    >
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
            )}
        </div>
    );
};

export default LoginForm;
