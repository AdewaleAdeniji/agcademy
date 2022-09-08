import React from 'react';
import DrivingUs from '../components/landing/DrivingUs';
import Features from '../components/landing/Features';
import HeroSection from '../components/landing/HeroSection';
import PageContainer from '../containers/PageContainer';

const LandingPage = () => {
    return (
        <PageContainer title="Agcademy">
            <HeroSection/>
            <Features />
            <DrivingUs />
        </PageContainer>
    );
}
export default LandingPage;