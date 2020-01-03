import React from "react";
import { Link } from 'react-router-dom';

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
    {
        name: 'Skills',
        path: '/skills',
    },
];

const Menu = (props) => {
    let componentDidMount = (prop) => {
        window.scrollTo(0, 0);
    }

    return (
        <ul className="nav-menu nav-menu_header">
            {links.map((link, index) => (
                <li key={index} className='nav-menu_item' onClick={ componentDidMount }><Link key={index} to={link.path} exact activeClassName="active" onClick={ props.onOpenLink }>{link.name}</Link></li>
            ))}
        </ul>
    );
}

export default Menu;