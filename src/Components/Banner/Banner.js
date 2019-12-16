import React from 'react';
import './banner.scss';

const Banner = () => {
    return (
        <div className="baner">
            <p className="baner_text baner_text_big"> Drupal 8 Web and Mobile Apps development team</p>
            <p className="baner_text baner_text_small"> Make your projects easier with AnyforSoft</p>
            <button className="button button_more"><a href="/portfolio">Our portfolio</a></button>
        </div>
    );
}

export default Banner;