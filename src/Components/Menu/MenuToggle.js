import React from 'react';
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Menu from "./Menu";
import './menu-toggle.scss';


const MenuToggle = props => {
	const cls = [
		'burger-menu'
	];

	const menuCls = [
		'navigation',
	]

	let faBurgerIcons;
	
	if (props.isOpen) {
		faBurgerIcons = faTimes;			
		cls.push('opened');
		menuCls.push('opened');
	}
	else {
		faBurgerIcons = faBars;	
	}


	return (
		<div className="menu">
			<div className={ cls.join(' ') } onClick={ props.onToggle }><FontAwesomeIcon icon={faBurgerIcons}/></div>
			<div className={ menuCls.join(' ') }>
	                    <Menu/>
	        </div>	
		</div>
	)	
}

export default MenuToggle;