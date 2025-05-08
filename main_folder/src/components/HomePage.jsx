import React from "react";
import { Images } from './Imports';
import AuthTabs from "./AuthTabs.jsx";

function HomePage() {
    return (
        <div>

            {/* CONTAINER FOR THE HUDDLE LOGO*/}
            <div className="huddleContainer">
                <div className="huddleTitle">
                    <img src={Images.huddleH} alt=""/>
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

            {/* SECTION FOR TESTIMONIALS FROM USERS*/}
            <div className="testimonials">

                <div className="testimonialsHeader">
                    <p>TESTIMONIALS</p>
                </div>


                <div className="testimonial">
                    <div className="testimonialImage">
                        <img src={Images.testimonial_one} alt="testimonial one"/>
                    </div>
                    <div className="testimonialText">
                        <p>"This was a lifeline in a tough time."</p>
                        <span> USER 234</span>
                    </div>
                </div>

                <div className="testimonial reverse">
                    <div className="testimonialImage">
                        <img src={Images.testimonial_two} alt="testimonial two"/>
                    </div>
                    <div className="testimonialText">
                        <p>"I truly felt a sense of belonging"</p>
                        <span> USER 655</span>
                    </div>
                </div>

                <div className="testimonial">
                    <div className="testimonialImage">
                        <img src={Images.criticalResources} alt="testimonial three"/>
                    </div>
                    <div className="testimonialText">
                        <p>"It offered me critical resources."</p>
                        <span> USER 22</span>
                    </div>
                </div>
            </div>

            {/* LOGIN AND CHARITY SECTION*/}
            <div className="login-charity">
                <AuthTabs/>
            </div>

        </div>
    );
}

export default HomePage;
