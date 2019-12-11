import React, {Component} from 'react';
import logo from '../images/icons/any-logo.svg';
import Menu from "../Components/Menu/Menu";
import './header.scss'

class Header extends Component {
    render () {
        return(
            <header className="header">
                <div className="header_wrapper">
                    <a className="logo-block logo_block_header" href="#home"><img src={logo} alt="logo" className="logo"/></a>

                    <Menu/>
                </div>
            </header>
        );
    }
}

export default Header;