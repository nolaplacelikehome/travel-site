import React from 'react';
import DesktopNavigation from './DesktopNavigation';
import AuthButton from '../Buttons/AuthButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import '../../../dist/css/Navbar/DesktopNavbar.css';

export default function DesktopNavbar() {
	return (
		<div className="desktop-nav-container">
			<div className="brand">
				<div className="logo"><FontAwesomeIcon icon={faHouseChimney} size="3x" color='#007FFF' /></div>
				<div className="name">
					<h2 className="name-top">Travely</h2>
					<div className="name-bottom">Travel anywhere</div>
				</div>
			</div>
			<DesktopNavigation />
			<div className="auth-btns">
				<AuthButton text='Login' />
				<AuthButton text='Signup' />
			</div>
		</div>
	)
}
