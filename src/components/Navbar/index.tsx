import React from 'react'
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

import '../../../dist/css/Navbar/DesktopNavbar.css';

import { useMediaQuery } from 'react-responsive';

export default function Navbar() {
	const isDesktop = useMediaQuery({
		query: '(min-width: 1100px)'
	});
	return (
		<>
			{
				isDesktop
				?
				<DesktopNavbar /> :
				<MobileNavbar />	
			}
		</>
	)
}