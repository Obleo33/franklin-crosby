import React from 'react';

const Contact = () => {
	return(
		<footer id="contact">
			<h2 className="contact-title">Contact</h2>
			<p>lets collaborate <a href="mailto:obleo33@gmail.com">obleo33@gmail.com</a></p>
			
			<div className="contact-links">
				<a href="https://github.com/Obleo33" target="_blank" rel="noopener noreferrer"><div className="contact-link git"></div></a>
				<a href="https://www.linkedin.com/in/franklincrosby" target="_blank" rel="noopener noreferrer"><div className="contact-link linkedin"></div></a>
				<a href="mailto:obleo33@gmail.com"><div className="contact-link email"></div></a>
			</div>

			<div className="source-link">
				<a href="https://github.com/Obleo33/franklin-crosby" target="_blank" rel="noopener noreferrer">Check out the source code for this page</a>
			</div>
			<p>Built in React</p>
		</footer>
	)
}

export default Contact;


