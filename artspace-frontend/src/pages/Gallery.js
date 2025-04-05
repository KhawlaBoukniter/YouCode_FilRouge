import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from '../components/gallery/HeroSection';
import ArtPieceSection from '../components/gallery/ArtPieceSection';
import CategoriesSection from '../components/gallery/CategoriesSection';
import FeaturedCollection from '../components/gallery/FeaturedCollection';
import CurrentExhibitionSection from '../components/gallery/CurrentExhibitionSection';
import SubscriptionSection from '../components/gallery/SubscriptionSection';

export default function Gallery() {
    return (
        <main className="flex flex-col w-full">
            <Navbar />
            <HeroSection />
            <CategoriesSection />
            <ArtPieceSection />
            <FeaturedCollection />
            <CurrentExhibitionSection />
            <SubscriptionSection />
            <Footer />
        </main>
    );
}