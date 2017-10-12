import React from 'react';
import logo from '../assets/logo_white2.svg'

import menu from '../../src/assets/menu-hamburger-closed.svg'
import menuOpen from '../../src/assets/menu-hamburger-open.svg'


const menuStyle = (open) => open?
	{backgroundImage: `url(${menuOpen})`}:
	{backgroundImage: `url(${menu})`} 

const Nav = (props) => {
	return(
		<nav className="nav">
			<img className="nav-logo" src={logo} alt="small logo"/>

			<h1>FRANKLIN<span>CROSBY</span></h1>

			{ props.viewMenu && <ul className="nav-links">
				<li>HELLO</li>
				<li>SKILLS</li>
				<li>PROJECTS</li>
				<li>CONTACT</li>
			</ul>}
			<div onClick={ props.navClick } className="nav-button" style={menuStyle(props.viewMenu)}></div>
		</nav>
	)
}

export default Nav;
				// <li>EXPERIENCE</li>
				// <li>INTERESTS</li>