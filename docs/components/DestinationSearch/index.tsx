import React from 'react'
import SearchButton from '../Buttons/SearchButton';
import '../../../dist/css/DestinationSearch/DestinationSearch.css';
import { useMediaQuery } from 'react-responsive';

export default function DestinationSearch() {
	const isDesktop = useMediaQuery({
		query: '(min-width: 1100px)'
	});
	return (
		<div className='search-container'>
			<h2>Where do you want to go?</h2>
			<p>You'll get recommendations tailored to your interests</p>
			{
				isDesktop
				?
				<form action="">
					<input type="text" placeholder='WHERE DO YOU WANT TO GO?' />
					<SearchButton />
				</form>	
				:
				<div className='mobile-input'>
					<input className='mobile-input-form' type="text" placeholder='WHERE DO YOU WANT TO GO?' />
					<SearchButton />
				</div>
			}
		</div>
	)
}