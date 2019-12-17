import React from "react";
import './portfolio-popup.scss';

const PortfolioPopup = (props) => {
    let  style = {};

    if (!props.isOpen) {
        style.display = 'none';
    }
    else {
        style.display = 'block';
    }

    return (
        <div className={props.classes} style={style}>
            <button className="close-btn" onClick={props.toggleFunc}>
                X
            </button>
            <h2 className="popup-title">{props.title}</h2>
            <div>{props.popupContent}</div>
            <div className="image-wrapper">
                <img alt="thumbnail" src={props.image} className="images"/>
            </div>
            <a className="button view-project" href={props.projectPath} target="_blank" rel="noopener noreferrer">
                Go to project!
            </a>
        </div>
    );
}

export default PortfolioPopup;