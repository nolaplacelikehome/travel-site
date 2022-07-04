import React from 'react';
import ComputerCenter from '../../../assets/ComputerCenter.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountain } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import '../../../dist/css/UIPlanning/UIPlanning.css';

export default function UIPlanning() {
	return (
		<div className="planning-container">
			<div className="img-left">
				<div className="circle-container">
					<img className='center-img' src={ComputerCenter} alt="Computer" />
					<div className='icon-container'>
						<FontAwesomeIcon className='icon' icon={faMountain} />
						<div>Activities</div>
					</div>
					<div className='icon-container'>
						<FontAwesomeIcon className='icon' icon={faUtensils} />
						<div>Meals</div>
					</div>
					<div className='icon-container'>
						<FontAwesomeIcon className='icon' icon={faHotel} />
						<div>Hotels</div>
					</div>
					<div className='icon-container'>
						<FontAwesomeIcon className='icon' icon={faCarSide} />
						<div>Driving</div>
					</div>
					<div className='icon-container'>
						<FontAwesomeIcon className='icon' icon={faPlane} />
						<div>Flights</div>
					</div>
					<div className='icon-container'>
						<FontAwesomeIcon className='icon' icon={faSuitcase} />
						<div>More</div>
					</div>
				</div>
			</div>
			<div className="description-right">
				<p className='p-title'>Easy to use UI for trip planning</p>
				<h2>Ridiculously Easy to Use</h2>
				<p className='p-description'>You want to take awesome, unique vacations where luxury meets authentic and 
					everything is taylored specifically to your interests. We value your experience
					above all else; we differentiate ourselves from other travel agencies through
					our attention to each detail of your trip. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos fuga blanditiis impedit, odit culpa sequi obcaecati repudiandae provident accusantium voluptate quas, cumque, doloribus maxime ipsum perferendis magnam voluptas officiis ullam. Labore, totam illo nesciunt maiores aspernatur voluptate alias? Quaerat, autem eos? Fugiat nisi quibusdam provident ex placeat culpa beatae.
				</p>
			</div>
		</div>
	)
}
