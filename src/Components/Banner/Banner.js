import React from 'react';
import './banner.scss';
import {NavLink} from "react-router-dom";

const Banner = () => {
    return (
        <div className="baner">
            <p className="baner_text baner_text_big"> Drupal 8 Web and Mobile Apps development team</p>
            <p className="baner_text baner_text_small"> Make your projects easier with AnyforSoft</p>
            <button className="button default-btn banner-btn"><NavLink to="/portfolio" exact activeClassName="active">Our portfolio</NavLink></button>
        </div>
    );
}

export default Banner;