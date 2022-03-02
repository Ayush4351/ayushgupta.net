import React from 'react';
import './about.css';
import Me from '../../assets/about-me.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
	return (
		<section id='about'>
			<h5>Get to Know</h5>
			<h2>About Me</h2>

			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={Me} alt='my_image' />
					</div>
				</div>

				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Industry Experience</h5>
							<small>1+ Years Industry Experience</small>
						</article>

						<article className='about__card'>
							<FiUsers className='about__icon' />
							<h5>Community Experience</h5>
							<small>3+ Years of Community Experience</small>
						</article>

						<article className='about__card'>
							<VscFolderLibrary className='about__icon' />
							<h5>Projects</h5>
							<small>Worked on many Projects</small>
						</article>

						<article className='about__card'>
							<VscFolderLibrary className='about__icon' />
							<h5>Projects</h5>
							<small>80+ Completed Projects</small>
						</article>
					</div>

					<p>
						Hello! My name is Ayush and I enjoy building systems for scale. I
						love building for performance and scale, and I am always open to
						learn new things(matter of fact, I enjoy that immensely!). But more
						than that, I aim to build user-centric software with an obsession on
						performance, which has an quality of life impact on the daily lives
						of the users of my software. The main pillars and ideology I follow
						behind the software I build are: usability, scalability,
						performance, reliablity and maintainablity. Fast-forward to today,
						and I've had the privilege of working at a few startups like Seraro
						Solutions and Blocknomic Technologies, a fintech corporation, one of
						the most popular API collaboration platforms, and currently, one of
						the biggest super apps ever. Here is a non-exhaustive list of
						technologies I've worked with:
					</p>

					<a href='#contact' className='btn btn-primary'>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
