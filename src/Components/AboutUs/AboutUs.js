import React from 'react';
import './about-us.scss';

const AboutUs = () => {
    return (
        <div id="about-us" className="about-us">
            <h2 className="title about-us_title">About Us</h2>
            <p className="about-us_text">Drulap mobile & development team</p>
            <div className="about-us-info">
                <div className="about-us-info_item">
                    <p className="text text_big">8 years</p>
                    <p className="text text_small">in intetational market</p>
                </div>
                <div className="about-us-info_item">
                    <p className="text text_big">80+</p>
                    <p className="text text_small">completed projects</p>
                </div>
                <div className="about-us-info_item">
                    <p className="text text_big">28 developers</p>
                    <p className="text text_small">drupal and front-end</p>
                </div>
                <div className="about-us-info_item">
                    <p className="text text_big">5 clients</p>
                    <p className="text text_small">over the globe:</p>
                    <p className="text text_small">Europe, Us, Canada</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;