export default function Header() {
    return (
        <div className="container-content">
            {/* flex justify-between items-center */}
            <div className="header_inner ">
                {/* Menu on tablet and mobile */}
                <div className="menu-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                    </svg>
                    <nav className="mobile-nav">
                        <input
                            type="checkbox"
                            name="icon"
                            id="menu-checkbox"
                            className="menu-checkbox"
                            // hidden
                        />

                        {/* <!-- Overlay --> */}
                        <label
                            htmlFor="menu-checkbox"
                            className="menu-overlay"
                        ></label>
                        <div className="menu-drawer">
                            <ul id="mobile-nav">
                                <img
                                    src="/img/logo.svg"
                                    alt="Lucy"
                                    className="logo"
                                />
                                <div className="seprate"></div>
                                <li className="navbar__item">
                                    <div className="item-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 576 512"
                                        >
                                            <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c.2 35.5-28.5 64.3-64 64.3l-320.4 0c-35.3 0-64-28.7-64-64l0-160.4-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80l-64 0z" />
                                        </svg>
                                    </div>
                                    <a href="/" className="navbar__link">
                                        Home
                                    </a>
                                </li>
                                <li className="navbar__item">
                                    <div className="item-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                        </svg>
                                    </div>
                                    <a href="/about" className="navbar__link">
                                        About
                                    </a>
                                </li>
                                <li className="navbar__item">
                                    <div className="item-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 576 512"
                                        >
                                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                        </svg>
                                    </div>
                                    <a href="/service" className="navbar__link">
                                        Services & Rates
                                    </a>
                                </li>
                                <li className="navbar__item">
                                    <div className="item-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
                                        </svg>
                                    </div>
                                    <a href="/review" className="navbar__link">
                                        Reviews
                                    </a>
                                </li>
                                <div className="meme-container">
                                    <img
                                        src="/img/meme.jpg"
                                        alt=""
                                        className="meme-img"
                                    />
                                </div>
                            </ul>
                        </div>
                    </nav>
                </div>

                {/* logo */}
                <a href="/">
                    <img src="/img/logo.svg" alt="Lucy" className="logo" />
                </a>

                {/* Navbar */}
                <nav className="navbar">
                    <ul className="navbar__list flex">
                        <li className="navbar__item">
                            <a href="/" className="navbar__link">
                                Home
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a href="/about" className="navbar__link">
                                About
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a href="/service" className="navbar__link">
                                Services & Rates
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a href="/review" className="navbar__link">
                                Reviews
                            </a>
                        </li>
                    </ul>
                </nav>

                {/*  Header action */}
                <div className="header-action">
                    <a href="#!" className="header-action__link">
                        Sign in
                    </a>
                    <a href="#!" className="btn header-action__btn">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    );
}
