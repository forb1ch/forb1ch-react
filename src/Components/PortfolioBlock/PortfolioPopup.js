import React from "react";



const PortfolioPopup = (props) => {
    let  style = {};

    if (!props.isOpen) {
        style.display = 'none'
    }
    else {
        style.display = 'block'
    }

    return (
        <div className="portfolio-popup" style={style}>
            <button onClick={props.toggleFunc}>
                hide Dialog
            </button>
            <h2>{props.title}</h2>
            <div>{props.popupContent}</div>
            <img alt="thumbnail" src={props.image} className="images"/>
        </div>
    );
}

export default PortfolioPopup;