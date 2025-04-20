import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Eye, Edit, Trash2 } from "lucide-react";

export default function ArtistArtworks() {
    const artworks = [
        {
            id: 1,
            title: "Néomorphisme #12",
            type: "Sculpture digitale",
            year: 2025,
            views: 234,
            status: "Validée",
            image: "https://c.animaapp.com/m9yin6yxq1kM86/img/img-1.png",
        },
        {
            id: 2,
            title: "Géométrie Fluide",
            type: "Installation",
            year: 2025,
            views: 128,
            status: "En attente",
            image: "https://c.animaapp.com/m9yin6yxq1kM86/img/img-2.png",
        },
        {
            id: 3,
            title: "Néon Dreams",
            type: "Art numérique",
            year: 2025,
            views: 456,
            status: "Validée",
            image: "https://c.animaapp.com/m9yin6yxq1kM86/img/img-3.png",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />
            <main className="flex-1 w-full py-24 px-5 md:px-20">
                <div className="max-w-[1280px] mx-auto space-y-8">
                    <h1 className="text-3xl font-playfair text-gray-800 mb-8">Toutes vos œuvres</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {artworks.map((artwork) => (
                            <div
                                key={artwork.id}
                                className="bg-black/30 rounded-xl overflow-hidden border border-gray-800 flex flex-col justify-between"
                            >
                                <div
                                    className="h-64 bg-cover bg-center relative"
                                    style={{ backgroundImage: `url(${artwork.image})` }}
                                >
                                    <div
                                        className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
                                        style={{
                                            backgroundColor: artwork.status === "Validée" ? "#34d39933" : "#fbbf2433",
                                            color: artwork.status === "Validée" ? "#10b981" : "#f59e0b",
                                        }}
                                    >
                                        {artwork.status}
                                    </div>
                                </div>

                                <div className="p-4 space-y-2">
                                    <h3 className="text-gray-200 font-semibold">{artwork.title}</h3>
                                    <p className="text-[#374151] text-sm">{artwork.type}, {artwork.year}</p>

                                    <div className="flex items-center justify-between text-[#374151] text-sm mt-2">
                                        <div className="flex items-center gap-1">
                                            <Eye className="w-4 h-4" />
                                            {artwork.views} vues
                                        </div>

                                        <div className="flex items-center gap-2">
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

                </div>
            </main>
            <Footer />
        </div>
    );
}