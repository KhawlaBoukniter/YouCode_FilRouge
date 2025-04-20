import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from '../components/gallery/HeroSection';
import ArtPieceSection from '../components/gallery/ArtPieceSection';
import api from "../api";

export default function Gallery() {
    const [allArtworks, setAllArtworks] = useState([]);
    console.log(allArtworks);


    const [selectedArtist, setSelectedArtist] = useState("Tous");

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const res = await api.get('/artworks');
                setAllArtworks(res.data.artworks.data || []);
            } catch (err) {
                console.log('Erreur: ', err);

            }
        };
        fetchArtworks();
    }, []);

    const filteredArtworks = selectedArtist === "Tous"
        ? allArtworks
        : allArtworks.filter((artwork) => artwork.artist?.user?.name === selectedArtist);

    const uniqueArtists = ["Tous", ...new Set(allArtworks.map(a => a.artist?.user?.name))];

    return (
        <main className="flex flex-col w-full">
            <Navbar />
            <HeroSection />
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
            <Footer />
        </main>
    );
}