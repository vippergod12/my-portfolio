import React from 'react'
import './Home.css'
import HeroSection from './Hero';
import FeaturedProjects from './FeatureProjects';
import StatsSection from './StatsSection';
const Home = () => {
    return (
        <div>
            <HeroSection />
            <FeaturedProjects />
            <StatsSection />
        </div>
    );
};

export default Home;