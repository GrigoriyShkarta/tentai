import React, { lazy } from 'react';
import './App.css';

const HeroSection = lazy(() => import('./sections/HeroSection'));
const MissionValues = lazy(() => import('./sections/MissionValues'));
const TeamList = lazy(() => import('./sections/TeamList'));
const Adds = lazy(() => import('./sections/Adds'));
const FormSection = lazy(() => import('./sections/FormSection'));
const Footer = lazy(() => import('./sections/Footer'));

function App() {
	return (
		<div className="wrapper">
			<HeroSection />
			<MissionValues />
			<TeamList />
			<Adds />
			<FormSection />
			<Footer />
		</div>
	);
}

export default App;
