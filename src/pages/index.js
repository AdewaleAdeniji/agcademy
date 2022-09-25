import React from "react";
import DesignBy from "../components/landing/DesignBy";
import DrivingUs from "../components/landing/DrivingUs";
import Experts from "../components/landing/Experts";
import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import HeroSection from "../components/landing/HeroSection";
import Offer from "../components/landing/Offer";
import Subscribe from "../components/landing/Subscribe";
import TeachWithUs from "../components/landing/TeachWithUs";
import UseCase from "../components/landing/UseCase";
import PageContainer from "../containers/PageContainer";

const LandingPage = () => {
  return (
    <PageContainer title="Agcademy">
      <HeroSection />
      <Features />
      <DrivingUs />
      <DesignBy />
      <Offer />
      <UseCase />
      <TeachWithUs />
      <Experts />
      <Subscribe />
      <Footer />
    </PageContainer>
  );
};
export default LandingPage;
