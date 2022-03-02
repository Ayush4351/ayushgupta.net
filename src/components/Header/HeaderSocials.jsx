import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiGithub, FiMail } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a
				href='https://linkedin.com/in/ayush4351'
				target='_blank'
				rel='noreferrer'
			>
				<AiFillLinkedin className='header__socials-icon' />
			</a>
			<a href='https://github.com/ayush4351' target='_blank' rel='noreferrer'>
				<FiGithub className='header__socials-icon' />
			</a>
			<a
				href='https://www.instagram.com/_ayush.gupta000_/'
				target='_blank'
				rel='noreferrer'
			>
				<BsInstagram className='header__socials-icon' />
			</a>
			<a href='mailto:ayush4351@gmail.com'>
				<FiMail className='header__socials-icon' />
			</a>
		</div>
	);
};

export default HeaderSocials;
