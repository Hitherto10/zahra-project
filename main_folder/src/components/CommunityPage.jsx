import React from "react";
import ReactDOM from "react-dom/client";
import {useLocation} from "react-router-dom";

function CommunityPage() {
    const location = useLocation();

    return (
        <div>
            <div className="community-container">
                {/*<div className="community-header">*/}
                    <h2 className="community-title">TOPICS</h2>

                </div>



                {/* Page content goes here */}
            {/*</div>*/}

        </div>
    );
}

export default CommunityPage;
