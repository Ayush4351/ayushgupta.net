import React from 'react';
import './about.css';
import Me from '../../assets/about-me.jpg';
import { FaReact, FaAws } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';
import { SiSolidity } from 'react-icons/si';

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
							<FaReact className='about__icon' />
							<h5>Frontend Development</h5>
							<small>3+ Years of Experience</small>
						</article>

						<article className='about__card'>
							<IoLogoNodejs className='about__icon' />
							<h5>Backend Development</h5>
							<small>3+ Years of Experience</small>
						</article>

						<article className='about__card'>
							<SiSolidity className='about__icon' />
							<h5>Blockchain Development</h5>
							<small>1 Year of Experience</small>
						</article>

						<article className='about__card'>
							<FaAws className='about__icon' />
							<h5>Cloud Experience</h5>
							<small>1 year of experience</small>
						</article>
					</div>

					<p>
						Hello! My name is Ayush and I am a Full Stack Developer and Site
						Reliability Engineer who is passionate about building systems that
						scale. I have experience in architecting and implementing
						large-scale distributed systems with a focus on performance,
						reliability, and scalability. I am currently a site reliability
						engineer at <a href='https://www.phonepe.com/'>PhonePe</a>, a
						fintech company which helps people of one of the largest economy in
						the world (India) to make safe payments.
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
