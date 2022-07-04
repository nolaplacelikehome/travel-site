import React from 'react';
import Bicycle from '../../../assets/Bicycle.svg';
import Computer from '../../../assets/Computer.svg';
import Airport from '../../../assets/Airport.svg';
import '../../../dist/css/FirstSectionDetail/DesktopDetail.css';

export default function DesktopDetail() {
	return (
		<div className="step-col">
			<div className='row row-1'>
				<img src={Bicycle} alt="Bike" className='img-responsive' />
				<p className='bold'>Tell us what you want to do</p>
				<p>Fill out a simple questionnare about yourself</p>
			</div>
			<div className='row row-2'>
				<img src={Computer} alt="On the computer" className='img-responsive' />
				<p className='bold'>Share your travel preferences</p>
				<p>Everything is recommended according to your interests</p>
			</div>
			<div className='row row-3'>
				<img src={Airport} alt="Traveling" className='img-responsive' />
				<p className='bold'>We'll give you custom recommendations</p>
				<p>Once your happy with your plan, everything will be handled by us</p>
			</div>
		</div>
	)
}
