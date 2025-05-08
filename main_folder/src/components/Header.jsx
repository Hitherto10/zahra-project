import React, { useState, useCallback } from 'react';
import MenuOverlay from './MenuOverlay';
import {Images} from "./Imports.jsx";
import {NavLink, useLocation} from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setMenuOpen((prev) => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setMenuOpen(false);
    }, []);

    const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);

    const openSearchOverlay = () => setIsSearchOverlayOpen(true);
    const closeSearchOverlay = () => setIsSearchOverlayOpen(false);


    const location = useLocation();
    const isCommunityPage = location.pathname === '/community';

    return (
        <div>
            <header className="header">
                <div className="navbar">
                    <NavLink to="/" onClick={closeMenu}>
                        <h1 className="headingTitle">HOME IS WHERE PEOPLE ARE</h1>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <nav className="navLinks" id="navLinks">
                        <NavLink to="/community">Community</NavLink>
                        <NavLink to="/charity">Charity</NavLink>
                        <NavLink to="/support">Support</NavLink>
                        <NavLink to="/donate">Donate</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </nav>

                    {isCommunityPage && (
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="community-search"
                            />
                            <button className="search-icon" onClick={openSearchOverlay}>
                                {/*🔍*/}
                                <img
                                    src={Images.search}
                                    alt="Poeple Visual"
                                />
                            </button>
                        </div>
                    )}


                    <div className="icon" onClick={toggleMenu}>
                        <div className={`menu ${menuOpen ? 'open' : ''}`} aria-label="Toggle menu"></div>
                    </div>

                </div>
            </header>

            <MenuOverlay isOpen={menuOpen} onClose={toggleMenu} />
            {isSearchOverlayOpen && (
                <div className="search-overlay">
                    <input
                        type="text"
                        className="search-overlay-input"
                        placeholder="Type to search..."
                        autoFocus
                    />
                    <button className="close-overlay" onClick={closeSearchOverlay}>✖</button>
                </div>
            )}

        </div>
    );
};

export default Header;
