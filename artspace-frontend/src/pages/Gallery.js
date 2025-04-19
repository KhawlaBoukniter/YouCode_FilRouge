import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from '../components/gallery/HeroSection';
import ArtPieceSection from '../components/gallery/ArtPieceSection';
import CategoriesSection from '../components/gallery/CategoriesSection';
import FeaturedCollection from '../components/gallery/FeaturedCollection';

export default function Gallery() {
    return (
        <main className="flex flex-col w-full">
            <Navbar />
            <HeroSection />
            <CategoriesSection />
            <ArtPieceSection />
            <FeaturedCollection />
            <Footer />
        </main>
    );
}