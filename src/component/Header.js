import React from 'react';
export default function Header() {
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
                            <li>
                                <a href="/">Đăng nhập</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <input type="checkbox" hidden className="nav-input" id="nav-mobile-input" />
            <div className="toggle">
                <label htmlFor="nav-mobile-input">
                    <i className="fa-solid fa-bars"></i>
                </label>
            </div>
            <label className="overlay" htmlFor="nav-mobile-input"></label>
            <div className="nav-mobile">
                <nav className="nav-bar-mobile">
                    <ul className="menu-mobile">
                        <div className="close_btn">
                            <label htmlFor="nav-mobile-input">
                            <i class="fa-solid fa-xmark"></i>
                            </label>
                        </div>
                        <li>
                            <a href="/">Trang Chủ</a>
                        </li>
                        <li>
                            <a href="/">Đăng Nhập</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
