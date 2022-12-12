import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
const Header = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();
    const logout = useLogout();
    const signout = async () => {
        await logout();
        navigate('/');
        // window.location.reload();
    };
    return (
        <header>
            <div className="nav-pc">
                {/* <a href="/">ComingSoon</a> */}
                <nav className="nav-bar-pc">
                    <div className="menu">
                        <ul>
                            <li>
                                <a href="/">Trang chủ</a>
                            </li>
                            {auth.accessToken ? (
                                <>
                                    <li>
                                        <a href="/testing">Dash Board</a>
                                    </li>
                                    <li className="font-2rem float-right">
                                        <span>{auth.username}</span>
                                        <button className="mx-2" onClick={signout}>
                                            LOG OUT
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <a
                                            href="#"
                                            onClick={() => {
                                                document.querySelector('.auth-form').classList.add('open-popup');
                                            }}
                                        >
                                            Đăng nhập
                                        </a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </nav>
            </div>
            <input type="checkbox" hidden className="nav-input" id="nav-mobile-input" />
            <div className="toggle">
                <label htmlFor="nav-mobile-input">
                    <i className="fa-solid fa-bars"></i>
                </label>
                {auth.username ? <span className="font-2rem float-right">{auth.username}</span> : <span></span>}
            </div>
            <label className="overlay" htmlFor="nav-mobile-input"></label>
            <div className="nav-mobile">
                <nav className="nav-bar-mobile">
                    <ul className="menu-mobile">
                        <div className="close_btn">
                            <label htmlFor="nav-mobile-input">
                                <i className="fa-solid fa-xmark"></i>
                            </label>
                        </div>
                        {!auth.accessToken ? (
                            <>
                                <li>
                                    <a href="/">Trang Chủ</a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        onClick={() => {
                                            document.querySelector('.auth-form').classList.add('open-popup');
                                            document.getElementById('nav-mobile-input').checked = false;
                                        }}
                                    >
                                        Đăng Nhập
                                    </a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <a href="/">Trang Chủ</a>
                                </li>
                                <li>
                                    <a href="/testing">Dash Board</a>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Header;
