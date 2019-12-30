import React from "react";
import { NavLink } from 'react-router-dom';

import './menu.scss';

const links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'About us',
        path: '/about-us',
    },
    {
        name: 'Our Services',
        path: '/services',
    },
    {
        name: 'Portfolio',
        path: '/portfolio',
    },
];

const Menu = () => {
    return (
        <ul className="nav-menu nav-menu_header">
            {links.map((link, index) => (
                <li key={index} className='nav-menu_item'><NavLink key={index} to={link.path} exact activeClassName="active">{link.name}</NavLink></li>
            ))}
        </ul>
    );
}

export default Menu;