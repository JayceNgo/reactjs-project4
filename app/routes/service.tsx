export default function Service() {
    return (
        // <!-- Service -->
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
                                Helping your new pup to be a good boy or girl
                                isn’t always easy, but we’re here to help.
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
                                Choose from a 30, 45, or 60-minute visit to give
                                your pet their daily dose of fun-filled.
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
                                While you’re away we can make sure your pet has
                                all the food, water, exercise, and, of course.
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
                                If you’re away for the night, we can stay the
                                night or stop by in the evening and morning.
                            </p>
                            <a href="#!" className="service-item__more">
                                Read More
                            </a>
                        </article>

                        {/* <!-- Service item 5 --> */}
                        <article className="service-item">
                            <h3 className="service-item__heading">Pet Taxi</h3>
                            <p className="service-item__desc">
                                Does your pet need a lift to the groomers, vet,
                                or dog park? We’ve got their tail covered.
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
                                Our team of experienced professionals can help
                                with everything from pills to injections.
                            </p>
                            <a href="#!" className="service-item__more">
                                Read More
                            </a>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
