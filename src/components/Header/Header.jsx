import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

import './header.css';
import ME from '../../assets/me.png';

const Header = () => {
	return (
		<header>
			<div className='container header__container'>
				<h4>Hello &#128075; I'm</h4>
				<h1>Ayush</h1>
				<h5 className='text-light'>
					Full Stack Developer & Site Reliability Engineer
				</h5>
				<CTA />
				<HeaderSocials />

				<div className='me'>
					<img src={ME} alt='' />
				</div>

				<a href='#contact' className='scroll__down'>
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
