import React from 'react';
import menuIcon from '/menu.png';


const MenuOverlay = ({ isOpen, onClose }) => {
    return (
        <div className={`overlayMenu ${isOpen ? 'open' : ''}`}>
            {/* Close Button Inside Overlay */}
            <button className="menu_button overlayCloseButton" onClick={onClose} aria-label="Close menu">
                <img src={menuIcon} alt="close menu icon" />
            </button>

            <nav className="overlayNav">
                <a href="#community" onClick={onClose}>Community</a>
                <a href="#charity" onClick={onClose}>Charity</a>
                <a href="#support" onClick={onClose}>Support</a>
                <a href="#donate" onClick={onClose}>Donate</a>
                <a href="#contact" onClick={onClose}>Contact Us</a>
            </nav>
        </div>
    );
};

export default MenuOverlay;
