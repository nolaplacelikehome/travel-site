import React from 'react';
import DesktopNavbar from '../../components/Navbar';
import FirstSection from './FirstSection';
import DestinationSearch from '../../components/DestinationSearch';

import '../../../dist/css/HomePage/HomePage.css';

export default function HomePage() {
	return (
		<div className='page-container'>
			<div className="hero-image">
				<DesktopNavbar />
				<DestinationSearch />
			</div>
			<FirstSection />
		</div>
	)
}
