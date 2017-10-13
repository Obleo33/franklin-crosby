import React from 'react';

const Skills = () => {
	return(
		<section id="skills">
			<div className="skills-container">
				<h2 className="skills-title">Skills</h2>
				<section className="listed-skills">
					<article className="skills dev-skills">
						<h3>Development</h3>
						<ul>
							<li>JavaScript ES5/ES6</li>
							<li>CSS3</li>
							<li>HTML5</li>
							<li>React</li>
							<li>React Router 4</li>
							<li>Redux</li>
							<li>Node</li>
							<li>Express</li>
							<li>PostgreSQL</li>
							<li>Knex</li>
							<li>Electron</li>
							<li>Git</li>
							<li>Webpack</li>
						</ul>
					</article>
					<article className="skills dev-skills">
						<h3>Design</h3>
						<ul>
							<li>Photoshop</li>
							<li>Illustrator</li>
							<li>InDesign</li>
							<li>Sketch</li>
						</ul>
					</article>
					<article className="skills dev-skills">
						<h3>Other</h3>
						<ul>
							<li>Concept Ideation</li>
							<li>Drawing</li>
							<li>Microsoft Excel</li>
							<li>Microsoft Word</li>
							<li>SalesForce</li>
							<li>Parenting</li>
							<li>Gaming</li>
						</ul>
					</article>
				</section>
			</div>
		</section>
	)
}

export default Skills;