import React from 'react';
import './footer.css';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer>
			<a href='#header' className='footer__logo'>
				AYUSH
			</a>

			<ul className='permalinks'>
				<li>
					<a href='#header'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#experience'>Skills</a>
				</li>
				<li>
					<a href='#services'>Services</a>
				</li>
				<li>
					<a href='#portfolio'>Portfolio</a>
				</li>
				<li>
					<a href='#testimonials'>Testimonials</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>

			<div className='footer__socials'>
				<a href='https://facebook.com'>
					<FaFacebook />
				</a>
				<a href='https://facebook.com'>
					<FaFacebook />
				</a>
				<a href='https://facebook.com'>
					<FaFacebook />
				</a>
			</div>

			<div className='footer__copyright'>
				<small>&copy; 2022 Ayush Gupta | All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
