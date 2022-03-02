import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

import './header.css';
import ME from '../../assets/me.png';

const Header = () => {
	return (
		<header>
			<div className='container header__container' id='home'>
				<h4>Hello &#128075; I'm</h4>
				<h1>Ayush</h1>
				<h4 className='text-light'>
					Site Reliability Engineer{' '}
					<a href='https://www.phonepe.com/' rel='noreferrer' target='_blank'>
						@PhonePe
					</a>
				</h4>
				<CTA />
				<HeaderSocials />

				<div className='me'>
					<img src={ME} alt='my_image' />
				</div>

				<a href='#contact' className='scroll__down'>
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
