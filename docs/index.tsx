import React from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './containers/HomePage';

import '../dist/css/App.css';

function App() {
	return (
		<HomePage />
	);
}

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);