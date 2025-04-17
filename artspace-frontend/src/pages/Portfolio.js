import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/portfolio/HeroSection";
import About from "../components/portfolio/About";
import Timeline from "../components/portfolio/Timeline";
import Gallery from "../components/portfolio/Gallery";
import UpcomingEvents from "../components/portfolio/UpcomingEvents";

export default function Portfolio() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <main className="flex-1 w-full">
                <HeroSection />
                <About />
                <Timeline />
                <Gallery />
                <UpcomingEvents />
            </main>

            <Footer />
        </div>
    );
}