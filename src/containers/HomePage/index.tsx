import React from 'react';
import Navbar from '../../components/Navbar';
import FirstSection from './FirstSection';
import DestinationSearch from '../../components/DestinationSearch';
import TripInspiration from './TripInspiration';
import UIPlanning from '../../components/UIPlanning/UIPlanning';
import FrequentQuestions from '../../components/FrequentQuestions';

import '../../../dist/css/HomePage/HomePage.css';


export default function HomePage() {
	return (
		<div className='page-container'>
			<div className="hero-image">
				<Navbar />
				<DestinationSearch />
			</div>
			<FirstSection />
			<TripInspiration />
			<UIPlanning />
			<FrequentQuestions />
		</div>
	)
}
