import React from 'react';
import './contact.css';

import { MdOutlineMail } from 'react-icons/md';

const Contact = () => {
	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className='container contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdOutlineMail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>ayush4351@gmail.com</h5>
						<a href='mailto:ayush4351@gmail.com'>Send a message</a>
					</article>
					<article className='contact__option'>
						<MdOutlineMail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>ayush4351@gmail.com</h5>
						<a href='mailto:ayush4351@gmail.com'>Send a message</a>
					</article>
					<article className='contact__option'>
						<MdOutlineMail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>ayush4351@gmail.com</h5>
						<a href='mailto:ayush4351@gmail.com'>Send a message</a>
					</article>
				</div>
				<form action=''>
					<input type='text' name='name' placeholder='Your Name' required />
					<input type='email' name='email' placeholder='Your Email' required />
					<input type='text' name='subject' placeholder='Subject' required />
					<input
						type='text'
						name='company'
						placeholder='Your Company (Optional)'
					/>
					<textarea
						name='message'
						cols='30'
						rows='10'
						placeholder='Your Message'
						required
					></textarea>
					<button type='submit' className='btn btn-primary' id='submit'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
