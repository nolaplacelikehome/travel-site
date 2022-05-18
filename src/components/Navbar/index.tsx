import React from 'react'
import '../../../dist/css/Navbar/DesktopNavbar.css';
import Navigation from './Navigation';
import AuthButton from '../Buttons/AuthButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';

export default function DesktopNavbar() {
	return (
		<div className="nav-container">
			<div className="brand">
				<div className="logo"><FontAwesomeIcon icon={faHouseChimney} size="3x" color='#89cff0' /></div>
				<div className="name">
					<h2 className="name-top">Travely</h2>
					<div className="name-bottom">Travel anywhere</div>
				</div>
			</div>
			<Navigation />
			<div className="auth-btns">
				<AuthButton text='Login' />
				<AuthButton text='Signup' />
			</div>
		</div>
	)
}