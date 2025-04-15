import React from "react";
import huddleH from '/huddle.png';

function HomePage() {
    return (
        <div>

            {/* CONTAINER FOR THE HUDDLE LOGO*/}
            <div className="huddleContainer">
                <div className="huddleTitle">
                    <img src={huddleH} alt=""/>
                    <span>UDDLE</span>
                </div>
            </div>

            {/* INTRODUCTORY TEXT WITH LINKS TO THE LEARN MORE SECTION*/}
            <div className="welcomeSection">
                <div className="welcomeTitle">
                    <p>WELCOME TO OUR HOME</p>
                </div>
                <div className="welcomeBody">
                    <div className="welcomeBriefsContainer">
                        <div className="welcomeBriefsTexts">
                            <div className="welcomeBriefs1">
                                <p>
                                    Delve into the profound depths of our origin story, where every chapter is filled
                                    with emotion, purpose, and resilience. Discover the people, places, and powerful
                                    events that inspired our first steps, the transformative moments that shaped our
                                    direction, and the deep-rooted passion that continues to drive our mission forward.
                                    Learn how adversity became our teacher, compassion our compass, and community our
                                    anchor.
                                </p>
                                <div className="welcomeBriefButton">
                                    <button className="learnMoreButton">
                                        LEARN MORE
                                    </button>
                                </div>
                            </div>

                            <div className="welcomeBriefs2">
                                <p>
                                    Explore our journey from humble beginnings to impactful initiatives, learn about
                                    the thoughtful processes we’ve developed to serve our community effectively, and
                                    uncover the deeply rooted inspirations, stories, and values that continue to drive
                                    our unwavering mission to make a meaningful and lasting difference in the lives of
                                    those we support.
                                </p>
                                <div className="welcomeBriefButton">
                                    <button className="learnMoreButton">
                                        LEARN MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="reviewsSection">
                <div className="testimonials">
                    <p>TESTIMONIALS</p>
                </div>
                <div className="reviewsTexts">

                    <p className="review1">
                        "The shelter feels like home. I like the people that are here, the food,
                        and all the other things that are available to us."
                    </p>
                    <p className="review2">
                        "This place means a lot to me. It wakes me up and gives me hope for the future.
                        On a scale of 1-10, the people here are an 11."
                    </p>
                    <p className="review3">
                        "The food, the staff, and the environment here are all excellent. Here,
                        it's quiet and calm, and I always feel safe."
                    </p>
                    <p className="review4">
                        "This pantry lets me have a proper diet. Food is so expensive,
                        and without this place, I wouldn't be able to eat properly."
                    </p>
                </div>

            </div>


        </div>
    );
}

export default HomePage;
