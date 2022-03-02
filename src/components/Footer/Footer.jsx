import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer>
			<a href='#home' className='footer__logo'>
				AYUSH
			</a>

			<ul className='permalinks'>
				<li>
					<a href='#home'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#experience'>Skills</a>
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
				<a href='https://facebook.com/ayush4351'>
					<FaFacebook />
				</a>
				<a href='https://www.instagram.com/_ayush.gupta000_/'>
					<FaInstagram />
				</a>
				<a href='https://twitter.com/AyushGu4351'>
					<FaTwitter />
				</a>
				<a href='https://linkedin.com/in/ayush4351'>
					<FaLinkedin />
				</a>
			</div>

			<div className='footer__copyright'>
				<small>&copy; 2022 Ayush Gupta | All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
