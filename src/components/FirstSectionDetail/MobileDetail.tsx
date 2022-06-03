import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrellaBeach, faComputer, faPlane } from '@fortawesome/free-solid-svg-icons';
import '../../../dist/css/FirstSectionDetail/MobileDetail.css';

export default function MobileDetail() {
	return (
		<div className="step-col-small">
			<div className='small-row row-1'>
				<FontAwesomeIcon icon={faUmbrellaBeach} />
				<div className="detail-para">
					<p className='bold'>Tell us what you want to do</p>
					<p>Fill out a simple questionnare about yourself</p>
				</div>
			</div>
			<div className='small-row row-2'>
				<FontAwesomeIcon icon={faComputer} />
				<div className="detail-para">
					<p className='bold'>Share your travel preferences</p>
					<p>Everything is recommended according to your interests</p>
				</div>
			</div>
			<div className='small-row row-3'>
				<FontAwesomeIcon icon={faPlane} />
				<div className="detail-para">
					<p className='bold'>We'll give you custom recommendations</p>
					<p>Once your happy with your plan, everything will be handled by us</p>
				</div>
			</div>
		</div>
	)
}
