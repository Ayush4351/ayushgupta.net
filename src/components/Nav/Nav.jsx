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
				className={activeNav === '#' ? 'active noSelect' : 'noSelect'}
			>
				<BiHomeAlt />
			</a>
			<a
				href='#about'
				onClick={() => setActiveNav('#about')}
				className={activeNav === '#about' ? 'active noSelect' : 'noSelect'}
			>
				<SiAboutdotme />
			</a>
			<a
				href='#experience'
				onClick={() => setActiveNav('#experience')}
				className={activeNav === '#experience' ? 'active noSelect' : 'noSelect'}
			>
				<BiBook />
			</a>
			<a
				href='#services'
				onClick={() => setActiveNav('#services')}
				className={activeNav === '#services' ? 'active noSelect' : 'noSelect'}
			>
				<RiServiceLine />
			</a>
			<a
				href='#contact'
				onClick={() => setActiveNav('#contact')}
				className={activeNav === '#contact' ? 'active noSelect' : 'noSelect'}
			>
				<BiMessageSquare />
			</a>
		</nav>
	);
};

export default Nav;
