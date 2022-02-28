import { React, useState } from 'react';

import './nav.css';
import { BiHomeAlt } from 'react-icons/bi';
import { SiAboutdotme } from 'react-icons/si';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquare } from 'react-icons/bi';

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#');
	return (
		<nav>
			<a
				href='#'
				onClick={() => setActiveNav('#')}
				className={activeNav === '#' ? 'active' : ''}
				className='noSelect'
			>
				<BiHomeAlt />
			</a>
			<a
				href='#about'
				onClick={() => setActiveNav('#about')}
				className={activeNav === '#about' ? 'active' : ''}
				className='noSelect'
			>
				<SiAboutdotme />
			</a>
			<a
				href='#experience'
				onClick={() => setActiveNav('#experience')}
				className={activeNav === '#experience' ? 'active' : ''}
				className='noSelect'
			>
				<BiBook />
			</a>
			<a
				href='#services'
				onClick={() => setActiveNav('#services')}
				className={activeNav === '#services' ? 'active' : ''}
				className='noSelect'
			>
				<RiServiceLine />
			</a>
			<a
				href='#contact'
				onClick={() => setActiveNav('#contact')}
				className={activeNav === '#contact' ? 'active' : ''}
				className='noSelect'
			>
				<BiMessageSquare />
			</a>
		</nav>
	);
};

export default Nav;
