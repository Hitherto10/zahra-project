import HomePage from "./HomePage.jsx";
import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function App(){
    return(
        <React.StrictMode>
            <div>
                <Header />
                <HomePage />
                <Footer />
            </div>
        </React.StrictMode>
    );
}

export default App;