import React from 'react';
import './banner.scss';

const Banner = () => {
    return (
        <div className="baner">
            <p className="baner_text baner_text_big">Drupal Team</p>
            <p className="baner_text baner_text_small">extension for digital agencies</p>
            <button className="button button_more">view cases</button>
        </div>
    );
}

export default Banner;