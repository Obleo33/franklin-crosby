import React from 'react';
import logo from '../assets/logo_white2.svg'

const Nav = () => {
	return(
		<nav className="nav">
			<img className="nav-logo" src={logo} alt="small logo"/>
			<ul className="nav-links">
				<li>HELLO</li>
				<li>SKILLS</li>
				<li>EXPERIENCE</li>
				<li>PROJECTS</li>
				<li>CONTACT</li>
				<li>INTERESTS</li>
			</ul>
		</nav>
	)
}

export default Nav;