import React, { useState, useCallback } from 'react';
import MenuOverlay from './MenuOverlay';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setMenuOpen((prev) => !prev);
    }, []);

    return (
        <div>
            <header className="header">
                <div className="navbar">
                    <h1 className="headingTitle">HOME IS WHERE PEOPLE ARE</h1>

                    {/* Desktop Navigation */}
                    <nav className="navLinks">
                        <a href="#community">Community</a>
                        <a href="#charity">Charity</a>
                        <a href="#support">Support</a>
                        <a href="#donate">Donate</a>
                        <a href="#contact">Contact Us</a>
                    </nav>

                    {/* Menu Toggle Button (visible on mobile) */}
                    <button className="menu_button" onClick={toggleMenu} aria-label="Toggle menu">
                        <img
                            src="../../public/menu.png"
                            alt="menu icon"
                        />
                    </button>
                </div>
            </header>

             {/*Fullscreen overlay menu for mobile */}
            <MenuOverlay isOpen={menuOpen} onClose={toggleMenu} />
        </div>
    );
};

export default Header;
