import React from 'react';
import { desktopNavItems } from '../Navbar/desktopNavItems';
import { blogNavItems } from './blogNavItems';
import '../../../dist/css/Footer/Footer.css';

export default function Footer() {
	return (
		<div className="footer-container" id="contact">
			<div className="footer-contact">
				<div className='message'>Get in touch</div>
				<div className='address'>Address</div>
				<div className='brand'>Travely</div>
				<div className='street'>Some Address Street</div>
				<div className='city'>Atlanta, GA 30333</div>
				<div className="support-phone">Support Phone</div>
				<div className='phone-number'>813-999-9999</div>
			</div>
			<div className="about-us">
				<p className="about-us-para">About us</p>
				<ul className='footer-links'>
					{
						desktopNavItems.map(({name, path, id}) => 
							<li key={id}><a href={path}>{name}</a></li>
						)
					}
				</ul>
			</div>
			<div className="from-the-blog">
				<p className='blog-para'>From the blog</p>
				<ul className='blog-links'>
					{
						blogNavItems.map(({ name, path, id }) => 
							<li key={id}><a href={`#${path}`}>{name}</a></li>
						)
					}
				</ul>
			</div>
		</div>
	)
}
