import React, { useState, useRef, useEffect } from 'react';
import { filterButtonList } from './filterButtonList';
import '../../../dist/css/Buttons/FilterButtons.css';
import { useMediaQuery } from 'react-responsive';
import TripDropdown from '../Dropdown/TripDropdown';

// #007FFF

export default function FilterButtons() {
	const isDesktop = useMediaQuery({
		query: '(min-width: 1100px)'
	});

	return (
		<>
			{
				isDesktop
				? 
				<div className='filter-btns'>
					{
						filterButtonList.map(btn => 
							<button 
								key={btn.id}
								className={`btn btn-${btn.cName}`}
							>
								{btn.name}
							</button>
						)
					}
				</div>
				:
				<TripDropdown />
			}
		</>
	)
}
