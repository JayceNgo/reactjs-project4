export default function About() {
    return (
        // <!-- About -->
        <section className="about">
            <div className="container-content">
                <div className="about__inner">
                    <section className="about__content">
                        <p className="about__label">// About //</p>
                        <h2 className="about__heading section-heading">
                            Chào chị Phương Ly Xinh đẹp. Em tên là Hiệp.
                        </h2>
                        <p className="about__desc section-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                        <div className="about__checklist">
                            <span className="about__check-item">
                                Certified Groomer
                            </span>
                            <span className="about__check-item">
                                Animal Lover
                            </span>
                            <span className="about__check-item">
                                14+ Years Experience
                            </span>
                            <span className="about__check-item">
                                Pet Parent Of 3 Dogs
                            </span>
                        </div>
                    </section>

                    <div className="about__media">
                        {/* <!-- About card --> */}
                        <div className="about__card">
                            <b className="about__card-title">20+</b>
                            <p className="about__card-desc">Years Experience</p>
                            <img
                                src="/img/about-decor-01.svg"
                                alt=""
                                className="about__card-decor"
                            />
                        </div>

                        {/* <!-- About image wrapper --> */}
                        <figure className="about__img-wrap">
                            <img
                                src="/img/ig.png"
                                alt=""
                                className="about__img"
                            />
                        </figure>

                        <img
                            src="/img/about-decor-02.svg"
                            alt=""
                            className="about__media-decor"
                        />
                    </div>

                    <div className="about__media">
                        <figure className="about__img-wrap about__img-wrap-bottom">
                            <img
                                src="/img/about-02.png"
                                alt=""
                                className="about__img about__img-bottom"
                            />

                            {/* <!-- Decorators --> */}
                            <div>
                                <img
                                    src="/img/about-decor-03.svg"
                                    alt=""
                                    className="about__decor-img"
                                />
                                <img
                                    src="/img/about-decor-04.svg"
                                    alt=""
                                    className="about__decor-img"
                                />
                                <img
                                    src="/img/about-decor-05.svg"
                                    alt=""
                                    className="about__decor-img"
                                />
                                <img
                                    src="/img/about-decor-06.svg"
                                    alt=""
                                    className="about__decor-img"
                                />
                                <img
                                    src="/img/about-decor-07.svg"
                                    alt=""
                                    className="about__decor-img"
                                />
                                <img
                                    src="/img/about-decor-08.svg"
                                    alt=""
                                    className="about__decor-img"
                                />
                                <img
                                    src="/img/about-decor-08.svg"
                                    alt=""
                                    className="about__decor-img"
                                />
                                <img
                                    src="/img/about-decor-08.svg"
                                    alt=""
                                    className="about__decor-img"
                                />
                            </div>
                        </figure>
                    </div>

                    <section className="about__content">
                        <h2 className="section-heading">
                            Taking A Vacation? So Is Your Pet.
                        </h2>
                        <p className="section-desc about__desc-bottom">
                            We offer long-term and short-term boarding. Every
                            dog has its own private, spacious room and daily
                            individual time in our large play yard.
                        </p>
                        <div className="tab">
                            <ul className="tab__list">
                                <li className="tab__item tab__item--active">
                                    <img
                                        src="/icons/home.png"
                                        alt=""
                                        className="tab__icon"
                                    />
                                    <span className="tab__title">
                                        Pet Boarding
                                    </span>
                                </li>
                                <li className="tab__item">
                                    <img
                                        src="/icons/health.png"
                                        alt=""
                                        className="tab__icon"
                                    />
                                    <span className="tab__title">
                                        Pet Daycare
                                    </span>
                                </li>
                                <li className="tab__item">
                                    <img
                                        src="/icons/bag.png"
                                        alt=""
                                        className="tab__icon"
                                    />
                                    <span className="tab__title">
                                        Pet Transport
                                    </span>
                                </li>
                            </ul>
                            <div className="tab__contents">
                                {/* <!-- Tab content 1 --> */}
                                <div className="tab__content-item tab__content-item--active">
                                    <p className="tab__content-desc">
                                        While you're on holiday, here's where
                                        your furry friends will spend their time
                                        1.
                                    </p>
                                    <a href="#!" className="tab__content-more">
                                        View more
                                    </a>
                                </div>

                                {/* <!-- Tab content 2 --> */}
                                <div className="tab__content-item">
                                    <p className="tab__content-desc">
                                        While you're on holiday, here's where
                                        your furry friends will spend their time
                                        2.
                                    </p>
                                    <a href="#!" className="tab__content-more">
                                        View more
                                    </a>
                                </div>

                                {/* <!-- Tab content 3 --> */}
                                <div className="tab__content-item">
                                    <p className="tab__content-desc">
                                        While you're on holiday, here's where
                                        your furry friends will spend their time
                                        3.
                                    </p>
                                    <a href="#!" className="tab__content-more">
                                        View more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}
