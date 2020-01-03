import React, {Component} from 'react';
import logo from '../images/icons/any-logo.svg';
import MenuToggle from "../Components/Menu/MenuToggle"
import Overlay from "../Components/Overlay/Overlay";
import { Link } from 'react-router-dom';
import './header.scss'

class Header extends Component {
    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        });
    }

    render () {
        return(
            <header className="header">
                <div className="header_wrapper">
                    <Link to='/' exact activeClassName="active" className="logo-block logo_block_header"><img src={logo} alt="logo" className="logo"/></Link>

                    <MenuToggle
                        onToggle={this.toggleMenuHandler}
                        isOpen={this.state.menu}
                    />
                    <Overlay
                        onToggle={this.toggleMenuHandler}
                        isOpen={this.state.menu}
                    />
                </div>
            </header>
        );
    }
}

export default Header;