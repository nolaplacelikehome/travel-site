import React from 'react'
import SearchButton from '../Buttons/SearchButton';
import '../../../dist/css/DestinationSearch/DestinationSearch.css';

export default function DestinationSearch() {
	return (
		<div className='search-container'>
			<h2>Where do you want to go?</h2>
			<p>You'll get recommendations tailored to your interests</p>
			<form action="">
				<input type="text" />
				<SearchButton />
			</form>
		</div>
	)
}