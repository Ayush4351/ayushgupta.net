import React from 'react';
import './experience.css';
import {
	SiJavascript,
	SiPhp,
	SiCss3,
	SiCodeigniter,
	SiKubernetes,
	SiMicrosoftazure,
	SiGooglecloud,
} from 'react-icons/si';
import {
	FaHtml5,
	FaNodeJs,
	FaReact,
	FaLaravel,
	FaGitAlt,
	FaDocker,
	FaAws,
	FaGithub,
} from 'react-icons/fa';

const Experience = () => {
	return (
		<section id='experience'>
			<h5>Skills I have</h5>
			<h2>My Specialities</h2>

			<div className='container experience__container'>
				<div className='experience__frontend'>
					<h3>Development</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<FaHtml5 className='experience__details-icon' />
							<div>
								<h4>HTML5</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiCss3 className='experience__details-icon' />
							<div>
								<h4>CSS3</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiJavascript className='experience__details-icon' />
							<div>
								<h4>JavaScript</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<FaReact className='experience__details-icon' />
							<div>
								<h4>ReactJS</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<FaNodeJs className='experience__details-icon' />
							<div>
								<h4>NodeJS</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiPhp className='experience__details-icon' />
							<div>
								<h4>PHP</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiCodeigniter className='experience__details-icon' />
							<div>
								<h4>CodeIgniter</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<FaLaravel className='experience__details-icon' />
							<div>
								<h4>Laravel</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
					</div>
				</div>

				<div className='experience__backend'>
					<h3>Tools and Services</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<FaGitAlt className='experience__details-icon' />
							<div>
								<h4>Git</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<FaGithub className='experience__details-icon' />
							<div>
								<h4>Github</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<FaDocker className='experience__details-icon' />
							<div>
								<h4>Docker</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiKubernetes className='experience__details-icon' />
							<div>
								<h4>Kubernetes</h4>
								<small className='text-light'>Beginner</small>
							</div>
						</article>
						<article className='experience__details'>
							<FaAws className='experience__details-icon' />
							<div>
								<h4>AWS</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiMicrosoftazure className='experience__details-icon' />
							<div>
								<h4>HTML5</h4>
								<small className='text-light'>Beginner</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiGooglecloud className='experience__details-icon' />
							<div>
								<h4>Google Cloud</h4>
								<small className='text-light'>Beginner</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
