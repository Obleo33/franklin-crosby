// 

import React from 'react';

const Projects = () => {
	return(
		<section id="projects">
			<h2>Projects</h2>
			<section className="projects-container">
				<article className="project">
					<h3 className="project-title">JetFuel</h3>
					<div className="project-img jetfuel-img" alt="jet fuel project image"></div>
					<p className="project-desctiption">
					</p>
					<div className="project-links">
						<a href="https://jetfuel-.herokuapp.com/" target="_blank">Live Site</a>
						<a href="" target="_blank">GitHub Repo</a>
					</div>
				</article>
				<article className="project">
					<h3 className="project-title">MovingShadows</h3>
					<div className="project-img movingshadows-img" alt="moving shadows project image"></div>
					<p className="project-desctiption">
					</p>
					<div className="project-links">
						<a href="https://movingshadows.herokuapp.com/" target="_blank">Live Site</a>
						<a href="" target="_blank">GitHub Repo</a>
					</div>
				</article>
				<article className="project">
					<h3 className="project-title">WBWR</h3>
					<div className="project-img wbwr-img" alt="word by word reader project image"></div>
					<p className="project-desctiption">
					</p>
					<div className="project-links">
						<a href="" target="_blank">GitHub Repo</a>
					</div>
				</article>
			</section>
		</section>
	)
}

export default Projects;