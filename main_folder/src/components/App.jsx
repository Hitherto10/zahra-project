import HomePage from "./HomePage.jsx";
import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {Route, Routes} from "react-router-dom";
import CommunityPage from "./CommunityPage.jsx";

function App(){
    return(
        <React.StrictMode>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/community" element={ <CommunityPage /> } />
                </Routes>
                <Footer />
            </div>
        </React.StrictMode>
    );
}

export default App;