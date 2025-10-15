import React from 'react'
import './Home.css'
import HeroSection from './Hero';
import FeaturedProjects from './FeatureProjects';
import StatsSection from './StatsSection';
const Home = () => {
    return (
        <div id="home" className="z-71">
            <HeroSection />
            <FeaturedProjects />
            <StatsSection />
        </div>
    );
};

export default Home;