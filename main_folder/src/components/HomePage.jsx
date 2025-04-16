import React from "react";
import huddleH from '/huddle.png';
import testi1Image from '/lifeline.jpg';

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

            <div className="testimonials">

                <div className="testimonialsHeader">
                    <p>TESTIMONIALS</p>
                </div>


                <div className="testimonial1">

                    <div className="testimonial1image">
                        <img src={testi1Image} className="testimony-image-one" alt=""/>
                    </div>

                    <div className="testimonial1text">
                        <div className="welcomeBriefs1">
                            <p>
                                "THIS WAS A LIFELINE IN A TOUGH TIME."
                            </p>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
}

export default HomePage;
