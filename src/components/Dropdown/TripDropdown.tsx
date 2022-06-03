import React from 'react';
import '../../../dist/css/Dropdowns/TripDropdown.css';
import { filterButtonList } from '../Buttons/filterButtonList';

export default function TripDropdown() {
	return (
		<div className="tripdropdown-container">
			<div className="dropdown">
				<span>Things to do</span>
				<div className="dropdown-content">
					{
						filterButtonList.map(item =>
							<p>{item.name}</p>
						)
					}
				</div>
			</div>
		</div>
	);
}
