import React from 'react'
import { desktopNavItems } from './desktopNavItems'

export default function DesktopNavigation() {
	return (
		<ul className='desktop-list'>
			{desktopNavItems.map(item => 
				<li className='desktop-list-item' key={item.id}><a href={item.path}>{item.name}</a></li>
			)}	 
		</ul>
	)
}