import React from 'react';
import PlanButton from '../../components/Buttons/PlanButton';
import DesktopDetail from '../../components/FirstSectionDetail/DesktopDetail';
import MobileDetail from '../../components/FirstSectionDetail/MobileDetail';
import { useMediaQuery } from 'react-responsive';
import '../../../dist/css/FirstSection/FirstSection.css';

export default function FirstSection() {
	const isDesktop = useMediaQuery({
		query: '(min-width: 890px)'
	});

	return (
		<div className="first-section-container" id="how-it-works">
			<p className='tint'>3 Steps to the perfect trip</p>
			<h2>Find the best places to travel with our experts</h2>
			<p className='details'>We are one of the best at travel planning because we care about our customers.
				Travel anywhere in the world with the help of our great customer service and 
				your personalized search results. 
			</p>
			{
				isDesktop ?
				<DesktopDetail />
				:
				<MobileDetail />
			}
			
			<PlanButton />
		</div>
	)
}
