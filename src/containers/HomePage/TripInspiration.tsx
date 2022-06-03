import React from 'react';
import '../../../dist/css/TripInspiration/TripInspiration.css';
import FilterButtons from '../../components/Buttons/FilterButtons';
import TripCarousel from '../../components/Carousels/TripCarousel';
import TripDropdown from '../../components/Dropdown/TripDropdown';

export default function TripInspiration() {
	return (
		<div className="trip-container">
			<p className='tint'>Trip inspiration</p>
			<h2>Find the perfect places to go for activites and more</h2>
			<FilterButtons />
			<TripCarousel />
		</div>
	)
}
