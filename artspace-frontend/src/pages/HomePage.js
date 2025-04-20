import React from 'react';
import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection";
import RevolutionaryFeatures from "../components/home/RevolutionaryFeatures";
import Testimonials from "../components/home/Testimonials";
import CallToAction from "../components/home/CallToAction";
import Footer from "../components/Footer";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <RevolutionaryFeatures />
            <Testimonials />
            <CallToAction />
            <Footer />
        </>
    );
}