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

			<ul className="nav-links">
				<li className="hello-nav nav-link" 
					onClick={props.handleView} 
					value="0">HELLO</li>

				<li className="projects-nav nav-link" 
					onClick={props.handleView} 
					value="1">PROJECTS</li>

				<li className="skills-nav nav-link" 
					onClick={props.handleView} 
					value="2">SKILLS</li>
					
				<li className="contact-nav nav-link" 
					onClick={props.handleView} 
					value="3">CONTACT</li>
			</ul>

			<div onClick={ props.navClick } className="nav-button" style={menuStyle(props.viewMenu)} hidden></div>
		</nav>
	)
}

export default Nav;