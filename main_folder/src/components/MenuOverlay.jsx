import React from 'react';
import {Images} from "./Imports.jsx";
import {NavLink} from "react-router-dom";

const MenuOverlay = ({ isOpen, onClose }) => {
    return (
        <div className={`overlayMenu ${isOpen ? 'open' : ''}`}>

            <nav className="overlayNav">
                {/*<a href="#community" onClick={onClose}>Community</a>*/}
                {/*<a href="#charity" onClick={onClose}>Charity</a>*/}
                {/*<a href="#support" onClick={onClose}>Support</a>*/}
                {/*<a href="#donate" onClick={onClose}>Donate</a>*/}
                {/*<a href="#contact" onClick={onClose}>Contact Us</a>*/}

                <NavLink to="/community" onClick={onClose}>Community</NavLink>
                <NavLink to="/charity" onClick={onClose}>Charity</NavLink>
                <NavLink to="/support" onClick={onClose}>Support</NavLink>
                <NavLink to="/donate" onClick={onClose}>Donate</NavLink>
                <NavLink to="/contact" onClick={onClose}>Contact Us</NavLink>
            </nav>
        </div>
    );
};

export default MenuOverlay;
