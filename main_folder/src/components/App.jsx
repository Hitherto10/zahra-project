import HomePage from "./HomePage.jsx";
import React from "react";
import Header from "./Header.jsx";

function App(){
    return(
        <React.StrictMode>
            <div>
                <Header />
                <HomePage />
            </div>
        </React.StrictMode>
    );
}

export default App;