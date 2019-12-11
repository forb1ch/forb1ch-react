import React from "react";
import './menu.scss';

const links = [
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
            {links.map(link => (
                <li className='nav-menu_item'><a href={link.path}>{link.name}</a></li>
            ))}
        </ul>
    );
}

export default Menu;