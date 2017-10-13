// 

import React from 'react';

const Projects = () => {
	return(
		<section id="projects">
			<h2>Projects</h2>
			<section className="projects-container">

				<article className="project">
					<a href="https://jetfuel-.herokuapp.com/" target="_blank" rel="noopener noreferrer">
						<div className="project-img jetfuel-img" alt="jet fuel project image"></div>
					</a>
					<section>
						<h3 className="project-title">JetFuel</h3>
						<p className="project-desctiption">Jet Fuel is a URL shortening service. Users are able to create a login/ sign in/ create a folders/ add urls to be shortened. Folders and shortened urls are stored on the database.</p>
						<div className="project-links">
							<a href="https://jetfuel-.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live</a>
							<a href="https://github.com/Obleo33/jet_fuel" target="_blank" rel="noopener noreferrer">GitHub</a>
						</div>
					</section>
				</article>

				<article className="project">
						<a href="https://movingshadows.herokuapp.com/" target="_blank" rel="noopener noreferrer">
							<div className="project-img movingshadows-img" alt="moving shadows project image"></div>
						</a>
					<section>
						<h3 className="project-title">MovingShadows</h3>
						<p className="project-desctiption">This project is working off the The Movie DB API (https://www.themoviedb.org/documentation/api). Users should be able to sign in and save favorite movies. Once a movie has been added to favorites the user should be able to navigate to a favorites page and remove it.</p>
						<div className="project-links">
							<a href="https://movingshadows.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live</a>
							<a href="https://github.com/Obleo33/movie-tracker" target="_blank" rel="noopener noreferrer">GitHub</a>
						</div>
					</section>
				</article>

				<article className="project">
						<a href="https://github.com/Obleo33/wbwr" target="_blank" rel="noopener noreferrer">
							<div className="project-img wbwr-img" alt="word by word reader project image"></div>
						</a>
					<section>
						<h3 className="project-title">WBWR</h3>
						<p className="project-desctiption">Word by word reader is a menu bar application built in electron. Copy and paste a text block into the application and WBWR will display each word in the reader at the designated wpm. By displaying each word in the same place you are able to read at a faster pace.</p>
						<div className="project-links">
							<a href="https://github.com/Obleo33/wbwr" target="_blank" rel="noopener noreferrer">GitHub</a>
						</div>
					</section>
				</article>

			</section>
		</section>
	)
}

export default Projects;