import React from "react";
import './overlay.scss'

const Overlay = (props) => {

    const overlayCls = [
        'overlay-wrapper',
    ]

    if (props.isOpen) {
        overlayCls.push('opened');
    }

    return (
        <div className={ overlayCls.join(' ') }  onClick={ props.onToggle }></div>
    );
}

export default Overlay;