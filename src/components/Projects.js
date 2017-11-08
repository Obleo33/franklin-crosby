import React from 'react';
import projects from '../../src/helper/projectArray.js'

const Projects = () => {
	return(
		<section id="projects">
			<h2 className=" section-title projects-title">Projects</h2>

			<section className="projects-container">

				{ projects.map((project, i) => {

					let projectStyle = {
						backgroundImage: `url(${project.imagePath})`
					}

					return (
						<article className="project" key={i}>

							<a href={ project.live !== null? project.live: project.github } 
							   target="_blank" rel="noopener noreferrer">

								<div style={ projectStyle } 
									 className="project-img jetfuel-img" 
									 alt={ project.projectTitle + " snapshot" }></div>

							</a>

							<section>
								<h3 className="project-title">{project.projectTitle}</h3>
								<p className="project-desctiption">{project.projectDescription}</p>

								<div className="project-links">
									{ project.live !== null && <a href="" target="_blank" rel="noopener noreferrer">Live</a> }
									{ project.github !== null && <a href="" target="_blank" rel="noopener noreferrer">GitHub</a> }
								</div>

							</section>
						</article>
					)
				}) }

			</section>
		</section>
	)
}

export default Projects;