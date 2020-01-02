import React from "react";
import Overlay from "../Overlay/Overlay";
import './portfolio-popup.scss';

const PortfolioPopup = (props) => {
    return (
        <div>
            <Overlay isOpen={props.isOpen} onToggle={props.toggleFunc}/>
            <div className={props.classes}>
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
        </div>
    );
}

export default PortfolioPopup;