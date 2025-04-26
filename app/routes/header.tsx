export default function header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header_inner flex justify-between items-center">
                    {/* logo */}
                    <img src="/imgs/logo.svg" alt="Lucy" className="logo" />

                    {/* Navbar */}
                    <nav className="navbar">
                        <ul className="navbar__list flex">
                            <li className="navbar__item">
                                <a href="#!" className="navbar__link">
                                    Home
                                </a>
                            </li>
                            <li className="navbar__item">
                                <a href="#!" className="navbar__link">
                                    About
                                </a>
                            </li>
                            <li className="navbar__item">
                                <a href="#!" className="navbar__link">
                                    Services & Rates
                                </a>
                            </li>
                            <li className="navbar__item">
                                <a href="#!" className="navbar__link">
                                    Reviews
                                </a>
                            </li>
                            <li className="navbar__item">
                                <a href="#!" className="navbar__link">
                                    Contacts us
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
        </div>
    );
}
