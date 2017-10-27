import React from 'react';
import logo from '../assets/logo_rotate.svg'

import menu from '../../src/assets/menu-hamburger-closed.svg'
import menuOpen from '../../src/assets/menu-hamburger-open.svg'


const menuStyle = (open) => open?
	{backgroundImage: `url(${menuOpen})`}:
	{backgroundImage: `url(${menu})`} 

const Nav = (props) => {
	return(
		<nav id="nav">
			<img className="nav-logo" src={logo} alt="small logo"/>

			<h1 className="myname">FRANKLIN<span>CROSBY</span></h1>

			{ props.viewMenu && <ul className="nav-links">
				<a href="#about"><li>HELLO</li></a>
				<a href="#skills"><li>SKILLS</li></a>
				<a href="#projects"><li>PROJECTS</li></a>
				<a href="#contact"><li>CONTACT</li></a>
			</ul>}
			<div onClick={ props.navClick } className="nav-button" style={menuStyle(props.viewMenu)}></div>
		</nav>
	)
}

export default Nav;