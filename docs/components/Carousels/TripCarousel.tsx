import React, { useState } from 'react';
import Cycling from '../../../assets/Cycling.jpg';
import Elephant from '../../../assets/Elephant.jpg';
import Hiking from '../../../assets/Hiking.jpg'; 
import Surfing from '../../../assets/Surfing.jpg'; 
import Whale from '../../../assets/Whale.jpg'; 
import '../../../dist/css/Carousels/TripCarousel.css';

export default function TripCarousel() {
	const [current, setCurrent] = useState(0);

	return (
		<>
			<div className="carousel-container">
				<div className="img-item img-1">
					<img src={Hiking} alt="Hiking" />
					<div className="img-text">A Luxury Journey to Vietnam</div>
				</div>
				<div className="img-item img-2">
					<img src={Elephant} alt="Elephant" />
					<div className="img-text">A Stunning African Safari</div>
				</div>
				<div className="img-item img-3">
					<img src={Surfing} alt="Surfing" />
					<div className="img-text">Surfing in Hawaii</div>
				</div>
				<div className="img-item img-4">
					<img src={Cycling} alt="Cycling" />
					<div className="img-text">The Ultimate Mountain Biking Journey</div>
				</div>
				<div className="img-item img-5">
					<img src={Whale} alt="Whale" />
					<div className="img-text">Pacific Coast Whales</div>
				</div>
			</div>
		</>
	)
}