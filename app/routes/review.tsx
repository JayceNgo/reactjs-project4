export default function Review() {
    return (
        <div>
            {/* <!-- Review --> */}
            <section className="review">
                <div className="container-content">
                    <div className="review__inner">
                        {/* <!-- Review previous --> */}
                        <button
                            className="review__control"
                            aria-label="Previous review"
                        >
                            <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.875 10.9985H3.125"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M8.75 5.37354L3.125 10.9985L8.75 16.6235"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>

                        {/* <!-- Review content --> */}
                        <div className="review__content">
                            {/* <!-- Review list --> */}
                            <div className="review__list">
                                {/* <!-- Review item 1 --> */}
                                <article className="review-item">
                                    <figure className="review-item__media">
                                        <img
                                            src="/img/review-01.png"
                                            alt=""
                                            className="review-item__img"
                                        />
                                    </figure>
                                    <section className="review-item__content">
                                        <h2 className="section-heading">
                                            Our Reviews
                                        </h2>
                                        <blockquote className="review-item__quote">
                                            “It was very comforting to recieve a
                                            text and pics each day about our
                                            pets and how they were doing. It was
                                            also nice that my pets were in the
                                            comfortable environment of their own
                                            home and received playfull attention
                                            from our pet sitters as well. Thanks
                                            so much!”
                                        </blockquote>
                                        <p className="review-item__author">
                                            Karla Deras
                                        </p>
                                    </section>
                                </article>

                                {/* <!-- Review item 2 --> */}
                                <article className="review-item">
                                    <figure className="review-item__media">
                                        <img
                                            src="/img/review-01.png"
                                            alt=""
                                            className="review-item__img"
                                        />
                                    </figure>
                                    <section className="review-item__content">
                                        <h2 className="section-heading">
                                            Our Reviews
                                        </h2>
                                        <blockquote className="review-item__quote">
                                            “It was very comforting to recieve a
                                            text and pics each day about our
                                            pets and how they were doing. It was
                                            also nice that my pets were in the
                                            comfortable environment of their own
                                            home and received playfull attention
                                            from our pet sitters as well. Thanks
                                            so much!”
                                        </blockquote>
                                        <p className="review-item__author">
                                            Karla Deras
                                        </p>
                                    </section>
                                </article>

                                {/* <!-- Review item 3 --> */}
                                <article className="review-item">
                                    <figure className="review-item__media">
                                        <img
                                            src="/img/review-01.png"
                                            alt=""
                                            className="review-item__img"
                                        />
                                    </figure>
                                    <section className="review-item__content">
                                        <h2 className="section-heading">
                                            Our Reviews
                                        </h2>
                                        <blockquote className="review-item__quote">
                                            “It was very comforting to recieve a
                                            text and pics each day about our
                                            pets and how they were doing. It was
                                            also nice that my pets were in the
                                            comfortable environment of their own
                                            home and received playfull attention
                                            from our pet sitters as well. Thanks
                                            so much!”
                                        </blockquote>
                                        <p className="review-item__author">
                                            Karla Deras
                                        </p>
                                    </section>
                                </article>

                                {/* <!-- Review item 4 --> */}
                                <article className="review-item">
                                    <figure className="review-item__media">
                                        <img
                                            src="/img/review-01.png"
                                            alt=""
                                            className="review-item__img"
                                        />
                                    </figure>
                                    <section className="review-item__content">
                                        <h2 className="section-heading">
                                            Our Reviews
                                        </h2>
                                        <blockquote className="review-item__quote">
                                            “It was very comforting to recieve a
                                            text and pics each day about our
                                            pets and how they were doing. It was
                                            also nice that my pets were in the
                                            comfortable environment of their own
                                            home and received playfull attention
                                            from our pet sitters as well. Thanks
                                            so much!”
                                        </blockquote>
                                        <p className="review-item__author">
                                            Karla Deras
                                        </p>
                                    </section>
                                </article>
                            </div>

                            {/* <!-- Review dots --> */}
                            <div className="review__dots">
                                <div className="review__dot review__dot--active"></div>
                                <div className="review__dot"></div>
                                <div className="review__dot"></div>
                                <div className="review__dot"></div>
                            </div>
                        </div>

                        {/* <!-- Review next --> */}
                        <button
                            className="review__control"
                            aria-label="Previous review"
                        >
                            <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.125 10.9985H16.875"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M11.25 5.37354L16.875 10.9985L11.25 16.6235"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* <!-- Blog --> */}
            <section className="blog">
                <div className="container-content">
                    <div className="blog__top">
                        <h2 className="section-heading">Our Blog</h2>
                        <div className="blog__info">
                            <p className="blog__desc section-desc">
                                Stay up to date with the latest tech trands and
                                news in the pets.
                            </p>
                            <a href="#!" className="btn blog__cta">
                                View All Blog
                            </a>
                        </div>
                    </div>
                    <div className="blog__list">
                        {/* <!-- Blog item 1 --> */}
                        <article className="blog-item">
                            <figure className="blog-item__img-wrap">
                                <time className="blog-item__time">
                                    21 june 2021
                                </time>
                                <a href="#!">
                                    <img
                                        src="/img/blog-01.jpg"
                                        alt=""
                                        className="blog-item__img"
                                    />
                                </a>
                            </figure>
                            <section className="blog-item__info">
                                <h3>
                                    <a className="blog-item__title" href="#!">
                                        Building Bonds and Trusting
                                        Relationships with Your Pets.
                                    </a>
                                </h3>
                                <p className="blog-item__desc">
                                    There isn’t a relationship around that can
                                    survive without trust. My relationship with
                                    my dog Peyton is deep...
                                </p>
                            </section>
                        </article>

                        {/* <!-- Blog item 2 --> */}
                        <article className="blog-item">
                            <figure className="blog-item__img-wrap">
                                <time className="blog-item__time">
                                    28 june 2021
                                </time>
                                <a href="#!">
                                    <img
                                        src="/img/blog-02.jpg"
                                        alt=""
                                        className="blog-item__img"
                                    />
                                </a>
                            </figure>
                            <section className="blog-item__info">
                                <h3>
                                    <a className="blog-item__title" href="#!">
                                        Celebrity pet photographer Grace Chon on
                                        taking ...
                                    </a>
                                </h3>
                                <p className="blog-item__desc">
                                    Doting pet parents have a relentless need to
                                    constantly photograph every adorable pet
                                    moment...
                                </p>
                            </section>
                        </article>

                        {/* <!-- Blog item 3 --> */}
                        <article className="blog-item">
                            <figure className="blog-item__img-wrap">
                                <time className="blog-item__time">
                                    10 july 2021
                                </time>
                                <a href="#!">
                                    <img
                                        src="/img/blog-03.jpg"
                                        alt=""
                                        className="blog-item__img"
                                    />
                                </a>
                            </figure>
                            <section className="blog-item__info">
                                <h3>
                                    <a className="blog-item__title" href="#!">
                                        5 Simple Tricks To Create A More
                                        Conscious ...
                                    </a>
                                </h3>
                                <p className="blog-item__desc">
                                    It is easy to forget that animals are living
                                    creatures with a beating heart.
                                </p>
                            </section>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
}
