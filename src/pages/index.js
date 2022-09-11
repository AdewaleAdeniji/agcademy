import React from 'react';
import DesignBy from '../components/landing/DesignBy';
import DrivingUs from '../components/landing/DrivingUs';
import Features from '../components/landing/Features';
import HeroSection from '../components/landing/HeroSection';
import Offer from '../components/landing/Offer';
import TeachWithUs from '../components/landing/TeachWithUs';
import UseCase from '../components/landing/UseCase';
import PageContainer from '../containers/PageContainer';

const LandingPage = () => {
    return (
        <PageContainer title="Agcademy">
            <HeroSection/>
            <Features />
            <DrivingUs />
            <DesignBy />
            <Offer />
            <UseCase />
            <TeachWithUs />
        </PageContainer>
    );
}
export default LandingPage;