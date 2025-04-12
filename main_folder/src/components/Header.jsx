import {useState} from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="navbar">
                <span className="headingTitle">HOME IS WHERE PEOPLE ARE</span>

                <nav className={`navLinks ${menuOpen ? 'active' : ''}`}>
                    <a href="#community">Community</a>
                    <a href="#charity">Charity</a>
                    <a href="#support">Support</a>
                    <a href="#donate">Donate</a>
                    <a href="#contact">Contact Us</a>
                </nav>

                <button className="menu_button" onClick={() => setMenuOpen(!menuOpen)}>
                    <img src="../../public/menu.png" alt="menu icon" />
                </button>
            </div>
        </header>
    );
};

export default Header;
