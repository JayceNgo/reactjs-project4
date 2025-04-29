export default function Service() {
    return (
        <>
            {/* // <!-- Service --> */}
            <section className="service">
                <div className="container-content">
                    <section className="service__top">
                        <p className="service__desc">What we do for you?</p>
                        <h2 className="section-heading service-heading">
                            Our Services
                        </h2>
                    </section>

                    <div className="service__body">
                        <div className="service__column">
                            {/* <!-- Service item 1 --> */}
                            <article className="service-item">
                                <h3 className="service-item__heading">
                                    Puppy Sitting
                                </h3>
                                <p className="service-item__desc">
                                    Helping your new pup to be a good boy or
                                    girl isn’t always easy, but we’re here to
                                    help.
                                </p>
                                <a href="#!" className="service-item__more">
                                    Read More
                                </a>
                            </article>

                            {/* <!-- Service item 2 --> */}
                            <article className="service-item">
                                <h3 className="service-item__heading">
                                    Dog Walking
                                </h3>
                                <p className="service-item__desc">
                                    Choose from a 30, 45, or 60-minute visit to
                                    give your pet their daily dose of
                                    fun-filled.
                                </p>
                                <a href="#!" className="service-item__more">
                                    Read More
                                </a>
                            </article>

                            {/* <!-- Service item 3 --> */}
                            <article className="service-item">
                                <h3 className="service-item__heading">
                                    Pet Sitting
                                </h3>
                                <p className="service-item__desc">
                                    While you’re away we can make sure your pet
                                    has all the food, water, exercise, and, of
                                    course.
                                </p>
                                <a href="#!" className="service-item__more">
                                    Read More
                                </a>
                            </article>
                        </div>
                        <div className="service__column">
                            <figure className="service__media">
                                <img
                                    src="/img/service-01.png"
                                    alt=""
                                    className="service__img"
                                />
                            </figure>
                            <div className="service__cta-wrap">
                                <a href="#!" className="btn service__cta">
                                    View All Services
                                </a>
                            </div>
                        </div>{" "}
                        <div className="service__column">
                            {/* <!-- Service item 4 --> */}
                            <article className="service-item">
                                <h3 className="service-item__heading">
                                    Overnight Care
                                </h3>
                                <p className="service-item__desc">
                                    If you’re away for the night, we can stay
                                    the night or stop by in the evening and
                                    morning.
                                </p>
                                <a href="#!" className="service-item__more">
                                    Read More
                                </a>
                            </article>

                            {/* <!-- Service item 5 --> */}
                            <article className="service-item">
                                <h3 className="service-item__heading">
                                    Pet Taxi
                                </h3>
                                <p className="service-item__desc">
                                    Does your pet need a lift to the groomers,
                                    vet, or dog park? We’ve got their tail
                                    covered.
                                </p>
                                <a href="#!" className="service-item__more">
                                    Read More
                                </a>
                            </article>

                            {/* <!-- Service item 6 --> */}
                            <article className="service-item">
                                <h3 className="service-item__heading">
                                    Pet Medical Admin
                                </h3>
                                <p className="service-item__desc">
                                    Our team of experienced professionals can
                                    help with everything from pills to
                                    injections.
                                </p>
                                <a href="#!" className="service-item__more">
                                    Read More
                                </a>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Staff --> */}
            <section className="staff">
                <div className="container-content">
                    <p className="staff__desc">Pet Care Staff</p>
                    <h2 className="section-heading staff__heading">
                        Meet Our Groomers
                    </h2>

                    <div className="staff__list">
                        {/* <!-- Staff item 1 --> */}
                        <article className="staff-item">
                            <figure className="staff-item__img-wrap">
                                <img
                                    src="/img/staff-01.png"
                                    alt=""
                                    className="staff-item__img"
                                />
                            </figure>
                            <p className="staff-item__title">Pet Trainer</p>
                            <h3 className="staff-item__name">Meghan Samit</h3>
                        </article>

                        {/* <!-- Staff item 2 --> */}
                        <article className="staff-item">
                            <figure className="staff-item__img-wrap">
                                <img
                                    src="/img/staff-02.png"
                                    alt=""
                                    className="staff-item__img"
                                />
                            </figure>
                            <p className="staff-item__title">Veterinarian</p>
                            <h3 className="staff-item__name">Alissa Silva</h3>
                        </article>

                        {/* <!-- Staff item 3 --> */}
                        <article className="staff-item">
                            <figure className="staff-item__img-wrap">
                                <img
                                    src="/img/staff-03.png"
                                    alt=""
                                    className="staff-item__img"
                                />
                            </figure>
                            <p className="staff-item__title">Veterinarian</p>
                            <h3 className="staff-item__name">Cindy Harris</h3>
                        </article>

                        {/* <!-- Staff item 4 --> */}
                        <article className="staff-item">
                            <figure className="staff-item__img-wrap">
                                <img
                                    src="/img/staff-04.png"
                                    alt=""
                                    className="staff-item__img"
                                />
                            </figure>
                            <p className="staff-item__title">
                                Animal Caretaker
                            </p>
                            <h3 className="staff-item__name">Lucas Tony</h3>
                        </article>
                    </div>

                    <div className="staff__cta-wrap">
                        <a href="#!" className="btn staff__cta">
                            View All Team
                        </a>
                    </div>
                </div>
            </section>

            {/* <!-- Pricing --> */}
            <section className="pricing">
                <div className="container-content pricing__container">
                    <h2 className="section-heading pricing__heading">
                        The Best Choice
                    </h2>
                    <p className="section-desc pricing__desc">
                        We offer long-term and short-term boarding. Every dog
                        has its own private, spacious room and daily individual
                        time in our large play yard.
                    </p>

                    <div className="pricing__switch-wrap">
                        <div className="pricing__switch-inner">
                            {/* <!-- Switch --> */}
                            <div className="pricing__switch">
                                <input
                                    type="checkbox"
                                    name=""
                                    id="pricing-switch"
                                    className="pricing__switch-input"
                                    checked
                                    hidden
                                />
                                <label
                                    htmlFor="pricing-switch"
                                    className="pricing__switch-label"
                                >
                                    <span className="pricing__switch-value">
                                        Monthly
                                    </span>
                                    <span className="pricing__switch-value">
                                        Yearly
                                    </span>
                                </label>
                            </div>

                            {/* <!-- Sale off --> */}
                            <img
                                src="/img/pricing-sale-off.svg"
                                alt=""
                                className="pricing__sale-off"
                            />
                        </div>
                    </div>

                    <div className="pricing__list">
                        {/* <!-- Pricing item 1 --> */}
                        <article className="pricing-item">
                            <p className="pricing-item__type">Basic</p>
                            <h3 className="pricing-item__heading">Day care</h3>
                            <p className="pricing-item__price">$150</p>
                            <button className="btn pricing-item__btn">
                                Purchase Now
                            </button>
                            <ul className="pricing-item__list">
                                <li className="pricing-item__item">
                                    Single room
                                </li>
                                <li className="pricing-item__item">
                                    Socialist Exercise
                                </li>
                                <li className="pricing-item__item">
                                    Custom Meals
                                </li>
                                <li className="pricing-item__item">
                                    Spa and Grooming
                                </li>
                                <li className="pricing-item__item">
                                    Exercise 2x
                                </li>
                                <li className="pricing-item__item">
                                    Custom Meals
                                </li>
                                <li className="pricing-item__item">
                                    Grooming 2x
                                </li>
                            </ul>
                        </article>

                        {/* <!-- Pricing item 2 --> */}
                        <article className="pricing-item">
                            <p className="pricing-item__type">Exclusive</p>
                            <h3 className="pricing-item__heading">2X Care</h3>
                            <p className="pricing-item__price">$199</p>
                            <button className="btn pricing-item__btn">
                                Purchase Now
                            </button>
                            <ul className="pricing-item__list">
                                <li className="pricing-item__item">
                                    Single room
                                </li>
                                <li className="pricing-item__item">
                                    Socialist Exercise
                                </li>
                                <li className="pricing-item__item">
                                    Custom Meals
                                </li>
                                <li className="pricing-item__item">
                                    Spa and Grooming
                                </li>
                                <li className="pricing-item__item">
                                    Exercise 2x
                                </li>
                                <li className="pricing-item__item">
                                    Custom Meals
                                </li>
                                <li className="pricing-item__item">
                                    Grooming 2x
                                </li>
                            </ul>
                        </article>

                        {/* <!-- Pricing item 3 --> */}
                        <article className="pricing-item">
                            <p className="pricing-item__type">Platinum</p>
                            <h3 className="pricing-item__heading">4X Care</h3>
                            <p className="pricing-item__price">$299</p>
                            <button className="btn pricing-item__btn">
                                Purchase Now
                            </button>
                            <ul className="pricing-item__list">
                                <li className="pricing-item__item">
                                    Single room
                                </li>
                                <li className="pricing-item__item">
                                    Socialist Exercise
                                </li>
                                <li className="pricing-item__item">
                                    Custom Meals
                                </li>
                                <li className="pricing-item__item">
                                    Spa and Grooming
                                </li>
                                <li className="pricing-item__item">
                                    Exercise 2x
                                </li>
                                <li className="pricing-item__item">
                                    Custom Meals
                                </li>
                                <li className="pricing-item__item">
                                    Grooming 2x
                                </li>
                            </ul>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}
