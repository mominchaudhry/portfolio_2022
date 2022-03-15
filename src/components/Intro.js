import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faEnvelope, faHome, faFile } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import personal from '../img/personal.jpg'

function Intro() {
    return (
        <section className="home_banner_area">
           	<div className="container box_1620">
           		<div className="banner_inner d-flex align-items-center justify-content-center">
					<div className="banner_content d-flex flex-column align-items-center">
						<div className="media d-flex">
							<img src={personal} alt="headshot" className="headshot"></img>
							<div className="media-body">
								<div className="personal_text">
									<h6>Hi, I'm</h6>
									<h3>Momin Chaudhry</h3>
									<h4>Software Engineer - BSc. Computer Science (Co-op)</h4>
									<p className="about_me">Passion for developing eye-catching web and mobile applications with a strong interest in machine learning and AI. Fluent in Javascript (React, Node) and Python. Always learning and looking for new opportunities!</p>
									<div className='d-flex links'>
										<ul className="list basic_info">
											<li><p><FontAwesomeIcon icon={faPhone} /> (416)-317-6213</p></li>
											<li><p><FontAwesomeIcon icon={faEnvelope} /> momin@chaudhry.tv</p></li>
											<li><p><FontAwesomeIcon icon={faHome} /> Toronto, ON, Canada</p></li>
										</ul>
										<ul className="list basic_info">
											<li><a href="https://github.com/mominchaudhry" target="_blank" rel="noreferrer" className='mylink'><FontAwesomeIcon icon={faGithub} /> Github</a></li>
											<li><a href="https://www.linkedin.com/in/momin-chaudhry-b9364917b" target="_blank" rel="noreferrer" className='mylink'><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
											<li><a href="https://momin-portfolio-data.s3.amazonaws.com/data/resume.pdf" target="_blank" rel="noreferrer" className='mylink'><FontAwesomeIcon icon={faFile} /> Resume</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
        </section>
    )
}

export default Intro
