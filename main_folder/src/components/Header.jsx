import React, { useState, useCallback } from 'react';
import MenuOverlay from './MenuOverlay';
import {Images} from "./Imports.jsx";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setMenuOpen((prev) => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setMenuOpen(false);
    }, []);

    return (
        <div>
            <header className="header">
                <div className="navbar">
                    <NavLink to="/" onClick={closeMenu}>
                        <h1 className="headingTitle">HOME IS WHERE PEOPLE ARE</h1>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <nav className="navLinks">
                        <NavLink to="/community">Community</NavLink>
                        <NavLink to="/charity">Charity</NavLink>
                        <NavLink to="/support">Support</NavLink>
                        <NavLink to="/donate">Donate</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </nav>

                    <div className="icon" onClick={toggleMenu}>
                        <div className={`menu ${menuOpen ? 'open' : ''}`} aria-label="Toggle menu"></div>
                    </div>

                </div>
            </header>

            <MenuOverlay isOpen={menuOpen} onClose={toggleMenu} />
        </div>
    );
};

export default Header;
