export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__inner flex items-center justify-between">
                    {/* <!-- Hero media --> */}
                    <div className="hero__media">
                        <div className="hero__img-wrap">
                            <img
                                src="/img/pet-01.png"
                                alt=""
                                className="hero__img animate__animated animate__backInLeft"
                            />

                            {/* <!-- Decorators --> */}
                            <img
                                src="/img/decor-01.svg"
                                alt=""
                                className="hero__decor hero__decor-left"
                            />
                            <img
                                src="/img/decor-02.svg"
                                alt=""
                                className="hero__decor hero__decor-right"
                            />
                        </div>

                        <div className="hero__img-wrap hero__img-wrap-small">
                            <img
                                src="/img/pet-02.png"
                                alt=""
                                className="hero__img animate__animated animate__backInUp"
                            />
                        </div>
                        {/* Hero List */}
                        <div className="hero__list animate__animated animate__backInUp">
                            {/* <!-- Hero list item 1 --> */}
                            <section className="hero-list-item ">
                                <img
                                    src="/img/pet-03.png"
                                    alt=""
                                    className="hero-list-item__thumb"
                                />
                                <div className="hero-list-item__info">
                                    <p className="hero-list-item__title">
                                        Pet Health
                                    </p>
                                    <div className="hero-list-item__skeleton"></div>
                                    <div
                                        className="hero-list-item__skeleton"
                                        // style="--width: 39px"
                                    ></div>
                                </div>
                            </section>

                            <div className="hero-list-item__separate"></div>

                            {/* <!-- Hero list item 2 --> */}
                            <section className="hero-list-item">
                                <img
                                    src="/img/pet-04.png"
                                    alt=""
                                    className="hero-list-item__thumb"
                                />
                                <div className="hero-list-item__info">
                                    <p className="hero-list-item__title">
                                        Pet care
                                    </p>
                                    <div className="hero-list-item__skeleton"></div>
                                    <div className="hero-list-item__skeleton"></div>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* <!-- Hero content --> */}
                    <section className="hero__content">
                        <h1 className="hero__heading animate__animated animate__backInRight">
                            Established & Trusted Pet Care Service
                        </h1>
                        <p className="hero__desc animate__animated animate__backInRight">
                            Discover a wide variety of Pawsitive services to
                            choose from, including daycare, private walks,
                            office duty and spa.
                        </p>
                        <div className="hero__row animate__animated animate__backInUp">
                            <a
                                href="#!"
                                className="btn btn--primary hero__cta-btn animate__animated animate__backInTop"
                            >
                                Book a Meet
                                <span className="btn__icon">
                                    <svg
                                        width="5"
                                        height="6"
                                        viewBox="0 0 5 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.48584 0.5L3.98584 3L1.48584 5.5"
                                            stroke="#FD5056"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </span>
                            </a>
                            <a href="#!" className="hero__cta-link ">
                                Schedule a Call
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}
