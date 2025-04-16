import React from "react";
import huddleH from '/huddle.png';
import testi1Image from '/lifeline.jpg';
import testi2Image from '/belonging.jpg';
import testi3Image from '/background.webp';

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


                <div className="testimonial">
                    <div className="testimonialImage">
                        <img src={testi1Image} alt="testimonial one"/>
                    </div>
                    <div className="testimonialText">
                        <p>"THIS WAS A LIFELINE IN A TOUGH TIME."</p>
                        <span> USER 234</span>
                    </div>
                </div>

                <div className="testimonial reverse">
                    <div className="testimonialImage">
                        <img src={testi2Image} alt="testimonial two"/>
                    </div>
                    <div className="testimonialText">
                        <p>"I TRULY FELT A SENSE OF BELONGING"</p>
                        <span> USER 655</span>
                    </div>
                </div>

                <div className="testimonial">
                    <div className="testimonialImage">
                        <img src={testi3Image} alt="testimonial three"/>
                    </div>
                    <div className="testimonialText">
                        <p>"IT OFFERED ME CRITICAL RESOURCES."</p>
                        <span> USER 22</span>
                    </div>
                </div>

                {/*<div className="testimonial reverse">*/}
                {/*    <div className="testimonialImage">*/}
                {/*        <img src={testi3Image} alt="testimonial four"/>*/}
                {/*    </div>*/}
                {/*    <div className="testimonialText">*/}
                {/*        <p>"THEIR SUPPORT CHANGED MY LIFE."</p>*/}
                {/*    </div>*/}
                {/*</div>*/}


            </div>
        </div>
    );
}

export default HomePage;
