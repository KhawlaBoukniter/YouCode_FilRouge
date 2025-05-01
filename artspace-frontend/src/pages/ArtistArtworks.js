import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Eye, Edit, Trash2 } from "lucide-react";
import api from "../api";

export default function ArtistArtworks() {
    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const imageUrl = (image) => {
        return image.startsWith("http")
            ? image
            : `http://localhost:8000${image}`;
    };

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const res = await api.get("/my-artworks");
                setArtworks(res.data.artworks?.data || []);
                setLoading(false);

            } catch (err) {
                console.error(err);
                setError("Erreur lors du chargement des œuvres.");
                setLoading(false);
            }
        };

        fetchArtworks();
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />
            <main className="flex-1 w-full py-24 px-5 md:px-20">
                <div className="max-w-[1280px] mx-auto space-y-8">
                    <h1 className="text-3xl font-playfair text-gray-800 mb-8">Toutes vos œuvres</h1>

                    {loading ? (
                        <p>Chargement...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {artworks.map((artwork) => (
                                <div
                                    key={artwork.id}
                                    className="bg-black/30 rounded-xl overflow-hidden border border-gray-800 flex flex-col justify-between"
                                >
                                    <div
                                        className="h-64 bg-cover bg-center relative"
                                        style={{ backgroundImage: `url(${imageUrl(artwork.image)})` }}
                                    >
                                    </div>

                                    <div className="p-4 space-y-2">
                                        <h3 className="text-gray-200 font-semibold">{artwork.title}</h3>
                                        <p className="text-[#374151] text-sm">{new Date(artwork.created_at).getFullYear()}</p>

                                        <div className="flex items-center justify-between text-[#374151] text-sm mt-2">
                                            <div className="flex items-center gap-2">
                                                <a href={`/artworks/${artwork.id}`} className="hover:text-green-600">
                                                    <Eye className="w-4 h-4" />
                                                </a>
                                                <a href={`/artworks/edit/${artwork.id}`} className="hover:text-blue-700">
                                                    <Edit className="w-4 h-4" />
                                                </a>
                                                <a href={`/artworks/delete/${artwork.id}`} className="hover:text-red-500">
                                                    <Trash2 className="w-4 h-4" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </main>
            <Footer />
        </div>
    );
}