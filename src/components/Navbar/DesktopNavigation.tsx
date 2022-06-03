import React from 'react'
import { desktopNavItems } from './desktopNavItems'

export default function DesktopNavigation() {
	return (
		<ul>
			{desktopNavItems.map(item => 
				<li key={item.id}><a href={item.path}>{item.name}</a></li>
			)}	 
		</ul>
	)
}