import React from "react";
import './menu.scss';

const Menu = () => {
    return (
        <ul className="nav-menu nav-menu_header">
            <li className="nav-menu_item"><a href="#about-us">About us</a></li>
            <li className="nav-menu_item"><a href="#services">Our Services</a></li>
            <li className="nav-menu_item"><a href="#portfolio">Portfolio</a></li>
        </ul>
    );
}

export default Menu;