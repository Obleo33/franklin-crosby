import React, { Component } from 'react';

class About extends Component {

	componentDidMount() {
		console.log(window.scroll());
		this.props.scroll(window.innerHeight)
	}

	render() {
		return(
			<article id="about">
				<h2 className="section-title about-title">Hello</h2>
					<section className="about-text">
						<h2 className="about-name">FRANKLIN<span>CROSBY</span></h2>
						<p>Since a young age, I have been obsessed with puzzles, games and building. I love figuring out how things work and taking that knowledge to build new things. As a developer, I am constantly presented with new and challenging puzzles. It is my passion to draw from everything around me to fabricate a solution and work with others to bring ideas to life.</p>
					</section>
			</article>
		)	
	}
}

export default About;