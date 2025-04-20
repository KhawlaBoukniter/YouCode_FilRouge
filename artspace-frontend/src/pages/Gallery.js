import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from '../components/gallery/HeroSection';
import ArtPieceSection from '../components/gallery/ArtPieceSection';
import CategoriesSection from '../components/gallery/CategoriesSection';
import FeaturedCollection from '../components/gallery/FeaturedCollection';

export default function Gallery() {

    const [selectedArtist, setSelectedArtist] = useState("Tous");

    const allArtworks = [
        {
            id: 1,
            image: "https://c.animaapp.com/m94sczdf69r2y6/img/img-1.png",
            title: "Abstraction en Mouvement",
            artist: "Par Marie Laurent",
            price: "€2,500",
            featured: true,
        },
        {
            id: 2,
            image: "https://c.animaapp.com/m94sczdf69r2y6/img/img.png",
            title: "Abstraction en Mouvement",
            artist: "Par Marie Laurent",
            price: "€2,500",
            featured: true,
        },
        {
            id: 3,
            image: "https://c.animaapp.com/m94sczdf69r2y6/img/img-2.png",
            title: "Abstraction en Mouvement",
            artist: "Par Marie Laurent",
            price: "€2,500",
            featured: true,
        },
        {
            id: 4,
            image: "https://c.animaapp.com/m94sczdf69r2y6/img/img-3.png",
            title: "Abstraction en Mouvement",
            artist: "Par Marie Laurent",
            price: "€2,500",
            featured: true,
        },
        {
            id: 5,
            image: "https://c.animaapp.com/m94sczdf69r2y6/img/img-4.png",
            title: "Abstraction en Mouvement",
            artist: "Par Marie Laurent",
            price: "€2,500",
            featured: true,
        },
        {
            id: 6,
            image: "https://c.animaapp.com/m94sczdf69r2y6/img/img-5.png",
            title: "Abstraction en Mouvement",
            artist: "Par Marie Laurent",
            price: "€2,500",
            featured: true,
        },
        {
            id: 5,
            image: "https://c.animaapp.com/m94sczdf69r2y6/img/img-4.png",
            title: "Abstraction en Mouvement",
            artist: "Par Marie Laurent",
            price: "€2,500",
            featured: true,
        },
        {
            id: 6,
            image: "https://c.animaapp.com/m94sczdf69r2y6/img/img-5.png",
            title: "Abstraction en Mouvement",
            artist: "Par Marie Laurent",
            price: "€2,500",
            featured: true,
        },
    ];

    const filteredArtworks = selectedArtist === "Tous"
        ? allArtworks
        : allArtworks.filter((artwork) => artwork.artist === selectedArtist);

    const uniqueArtists = ["Tous", ...new Set(allArtworks.map(a => a.artist))];

    return (
        <main className="flex flex-col w-full">
            <Navbar />
            <HeroSection />
            <CategoriesSection />
            <div className="flex justify-center flex-wrap gap-4 my-8">
                {uniqueArtists.map((artist, i) => (
                    <button
                        key={i}
                        onClick={() => setSelectedArtist(artist)}
                        className={`px-4 py-2 rounded-full font-playfair text-sm border ${selectedArtist === artist
                            ? "bg-black text-white"
                            : "bg-gray-100 text-gray-800 hover:bg-black hover:text-white"
                            }`}
                    >
                        {artist}
                    </button>
                ))}
            </div>
            <ArtPieceSection artworks={filteredArtworks} />
            <FeaturedCollection />
            <Footer />
        </main>
    );
}