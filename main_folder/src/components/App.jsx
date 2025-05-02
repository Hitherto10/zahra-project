import HomePage from "./HomePage.jsx";
import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {Route, Routes} from "react-router-dom";
import CommunityPage from "./CommunityPage.jsx";
import CharityPage from "./CharityPage.jsx";
import SupportPage from "./SupportPage.jsx";
import Donate from "./Donate.jsx";
import ContactUsPage from "./ContactUsPage.jsx";

function App(){
    return(
        <React.StrictMode>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/community" element={ <CommunityPage /> } />
                    <Route path="/charity" element={ <CharityPage /> } />
                    <Route path="/support" element={ <SupportPage /> } />
                    <Route path="/donate" element={ <Donate /> } />
                    <Route path="/contact" element={ <ContactUsPage /> } />
                </Routes>
                <Footer />
            </div>
        </React.StrictMode>
    );
}

export default App;