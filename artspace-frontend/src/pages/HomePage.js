import React from 'react';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import RevolutionaryFeatures from "../components/RevolutionaryFeatures";
import FeaturedExhibitions from "../components/FeaturedExhibitions";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <RevolutionaryFeatures />
            <FeaturedExhibitions />
            <Testimonials />
            <CallToAction />
            <Footer />
        </>
    );
}