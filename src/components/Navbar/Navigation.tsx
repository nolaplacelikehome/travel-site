import React from 'react'
import '../../../dist/css/Navbar/Navigation.css';
import { navItems } from './navItems';

export default function Navigation() {
	return (
		<nav>
			<ul>
				{navItems.map(item => 
					<li key={item.id}><a href={item.path}>{item.name}</a></li>
				)}
			</ul>
		</nav>
	)
}
