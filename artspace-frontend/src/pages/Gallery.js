import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from '../components/gallery/HeroSection';
import ArtPieceSection from '../components/gallery/ArtPieceSection';
import CategoriesSection from '../components/gallery/CategoriesSection';
import FeaturedCollection from '../components/gallery/FeaturedCollection';
import api from "../api";

export default function Gallery() {
    const [allArtworks, setAllArtworks] = useState([]);

    const [selectedArtist, setSelectedArtist] = useState("Tous");

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const res = await api.get('/artworks');
                setAllArtworks(res.data.artworks || []);
            } catch (err) {
                console.log('Erreur: ', err);

            }
        };
        fetchArtworks();
    }, []);

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