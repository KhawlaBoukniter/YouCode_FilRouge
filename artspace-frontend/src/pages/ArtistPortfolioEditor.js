import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroEditorSection from "../components/portfolio/HeroEditorSection";
import AboutEditorSection from "../components/portfolio/AboutEditorSection";
import TimelineEditorSection from "../components/portfolio/TimelineEditorSection";
import GalleryEditorSection from "../components/portfolio/GalleryEditorSection";
import UpcomingEventsEditorSection from "../components/portfolio/UpcomingEventsEditorSection";

export default function ArtistPortfolioEditor() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <main className="flex-1 w-full py-12 px-4 md:px-12 space-y-20">
                <HeroEditorSection />
                <AboutEditorSection />
                <TimelineEditorSection />
                <GalleryEditorSection />
                <UpcomingEventsEditorSection />
            </main>

            <Footer />
        </div>
    );
}